import { useState} from 'react';
import { Button, Container } from 'react-bootstrap';

export const Counter = () => {
    const [value, setValue] = useState(0)


	return (
		<Container>
			<h2>Counter</h2>
			<Button>-</Button>
			<span>{value}</span>
			<Button>+</Button>
		</Container>
	);
};
