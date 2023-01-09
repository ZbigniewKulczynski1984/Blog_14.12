import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

export const Counter = () => {
	const [value, setValue] = useState<number | string >(0);
    const [initialValue, setInitialValue] = useState('')

	const handlePlusClick = () => {
        if (typeof value === 'number') setValue(value + 1);
		
	};

	const handleMinusClick = () => {
		if (typeof value === 'number') setValue(value - 1);
	};

	const handleResetClick = () => {
		setValue(0);
	};

    const handleValueChange = (value: string) => {
        console.log(parseInt(value))
    }

	return (
		<Container>
			<h2>Counter</h2>
            <span>Initial value</span>
            <input value={initialValue} onChange={event => handleValueChange(event.target.value)}/>
			<Button onClick={handleMinusClick}>-</Button>
			<span data-testid="counterValue">{initialValue? initialValue : value}</span>
			<Button onClick={handlePlusClick}>+</Button>
			<Container>
				<Button onClick={handleResetClick}>Reset</Button>
			</Container>
		</Container>
	);
};
