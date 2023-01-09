import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

export const Counter = () => {
	const [value, setValue] = useState(0);

	const handlePlusClick = () => {
		setValue(value + 1);
	};

	const handleMinusClick = () => {
		setValue(value - 1);
	};

	const handleResetClick = () => {
		setValue(0);
	};

	return (
		<Container>
			<h2>Counter</h2>
			<Button onClick={handleMinusClick}>-</Button>
			<span>{value}</span>
			<Button onClick={handlePlusClick}>+</Button>
			<Container>
				<Button onClick={handleResetClick}>Reset</Button>
			</Container>
		</Container>
	);
};
