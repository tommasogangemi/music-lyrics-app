import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/header/header';
import ArtistCard from '../components/artist-card/artist-card';
import ErrorMessage from '../components/error-message/error-message';
import InputGroupContainer from '../components/input-group/input-group';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
	const apiKey = '648a67790deaef2e3474bebe96db4265';
	const [relatedArtists, setRelatedArtists] = useState([]);
	const [didNotFind, setDidNotFind] = useState(false);

	const searchAlbums = async artist => {
		setRelatedArtists([]);
		setDidNotFind(false);

		try {
			const artistRes = await fetch(
				`https://api.musixmatch.com/ws/1.1/artist.search?q_artist=${artist}&apikey=${apiKey}`
			);
			const artistData = await artistRes.json();
			if (!artistData.message.body.artist_list.length) {
				setDidNotFind(true);
				return;
			}

			const artistId = await artistData.message.body.artist_list[0].artist
				.artist_id;

			const relatedRes = await fetch(
				`https://api.musixmatch.com/ws/1.1/artist.related.get?artist_id=${artistId}&page_size=6&page=1&apikey=${apiKey}`
			);
			const relatedData = await relatedRes.json();
			if (!relatedData.message.body.artist_list.length) {
				setDidNotFind(true);
				return;
			}

			setRelatedArtists(relatedData.message.body.artist_list);
		} catch (error) {
			console.log('Error was caught:', error.message);
		}
	};

	return (
		<div className='display'>
			<Head>
				<title>Related Artists Research</title>
			</Head>

			<Header />

			<InputGroupContainer searchAlbums={searchAlbums} />

			{didNotFind ? <ErrorMessage /> : null}

			<div className='container py-3 p-lg-0'>
				<div className='row mx-0'>
					{relatedArtists.map(artist => (
						<ArtistCard key={artist.artist.artist_id} artistObject={artist} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
