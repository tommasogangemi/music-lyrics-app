import Card from 'react-bootstrap/Card';

const ArtistCard = ({ artistObject }) => {
	const { artist } = artistObject;

	const printYear = year => {
		const yearSplit = year.split('-');
		return yearSplit[0];
	};

	return (
		<div className='col-lg-4 col-6 d-flex justify-content-center align-items-center p-lg-3 p-md-1 p-2'>
			<Card bg='light' className='w-100 h-100'>
				<Card.Body>
					<Card.Title>{artist.artist_name}</Card.Title>
					<Card.Subtitle className='mb-3 text-muted'>
						Origin Country: {artist.artist_country}
					</Card.Subtitle>
					<Card.Text>Active from: {printYear(artist.begin_date)}</Card.Text>
					<Card.Link href={artist.artist_twitter_url} target='_blank'>
						Twitter Account
					</Card.Link>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ArtistCard;
