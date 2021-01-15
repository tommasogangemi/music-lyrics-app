import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const InputGroupContainer = ({ searchAlbums }) => {
	const [title, setTitle] = useState('');

	const handleChange = e => {
		setTitle(e.target.value);
	};

	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			handleClick();
		} else {
			return;
		}
	};

	const handleClick = () => {
		if (title) {
			const artistName = title.toLowerCase().split(' ').join('_');
			searchAlbums(artistName);

			setTitle('');
		} else {
			return;
		}
	};

	return (
		<div className='container mt-2 mb-2'>
			<div className='row'>
				<InputGroup className='mb-3 col-12'>
					<FormControl
						className='form-input'
						placeholder='Type the title of the song'
						aria-label="Recipient's username"
						aria-describedby='basic-addon2'
						value={title}
						onChange={handleChange}
						onKeyDown={handleKeyDown}
					/>
					<InputGroup.Append>
						<Button variant='outline-dark' onClick={handleClick}>
							Search
						</Button>
					</InputGroup.Append>
				</InputGroup>
			</div>
		</div>
	);
};
export default InputGroupContainer;
