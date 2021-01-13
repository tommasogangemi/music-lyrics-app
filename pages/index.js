import { useState, useEffect } from 'react';
import Head from 'next/head';
import LyricsContainer from '../components/lyrics-container/lyrics-container';
import InputGroupContainer from '../components/input-group/input-group';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
	const apiKey = '648a67790deaef2e3474bebe96db4265';
	const [relatedArtists, setRelatedArtists] = useState([]);
	useEffect(() => {
		console.log(relatedArtists);
	}, [relatedArtists]);

	const searchAlbums = async artist => {
		const artistRes = await fetch(
			`https://api.musixmatch.com/ws/1.1/artist.search?q_artist=${artist}&apikey=${apiKey}`
		);
		const artistData = await artistRes.json();
		const artistId = await artistData.message.body.artist_list[0].artist
			.artist_id;
		const relatedRes = await fetch(
			`https://api.musixmatch.com/ws/1.1/artist.related.get?artist_id=${artistId}&page_size=6&page=1&apikey=${apiKey}`
		);
		const relatedData = await relatedRes.json();
		setRelatedArtists(relatedData.message.body.artist_list);
	};

	return (
		<div>
			<Head>
				<title>Music Lyrics App</title>
			</Head>

			<h1>Hello World</h1>
			<InputGroupContainer searchAlbums={searchAlbums} />
			<LyricsContainer />
		</div>
	);
};

export default Home;
