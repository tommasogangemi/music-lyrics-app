import Head from 'next/head';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
	return (
		<div>
			<Head>
				<title>Music Lyrics App</title>
			</Head>

			<h1>Hello World</h1>
			<InputGroup className='mb-3'>
				<FormControl
					placeholder='Type the title of the song'
					aria-label="Recipient's username"
					aria-describedby='basic-addon2'
				/>
				<InputGroup.Append>
					<Button variant='outline-secondary'>Search</Button>
				</InputGroup.Append>
			</InputGroup>
		</div>
	);
};

export default Home;
