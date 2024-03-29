import { screen, render, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter.tsx', () => {
	test('should add 1', () => {
		render(<Counter />);
		const counterValue = screen.getByTestId('counterValue');
		const plusButton = screen.getByRole('button', {
			name: /\+/i,
		});

		fireEvent.click(plusButton);

		expect(parseInt(counterValue.innerHTML)).toEqual(1);
	});

	test('should subtract 1', () => {
		render(<Counter />);
		const counterValue = screen.getByTestId('counterValue');
		const subtractButton = screen.getByRole('button', {
			name: /-/i,
		});

		fireEvent.click(subtractButton);

		expect(parseInt(counterValue.innerHTML)).toEqual(-1);
	});

	test('should set initial value', () => {
		render(<Counter />);
		const counterValue = screen.getByTestId('counterValue');

		fireEvent.change(screen.getByTestId('initialValue'), {
			target: { value: '957' },
		});
		expect(parseInt(counterValue.innerHTML)).toEqual(957);
	});

	test('should reset value', () => {
		render(<Counter />);
		const counterValue = screen.getByTestId('counterValue');
		const resetButton = screen.getByRole('button', {
			name: /reset/i,
		});
		fireEvent.click(resetButton);
		expect(parseInt(counterValue.innerHTML)).toEqual(0);
	});

	test('should set step value', () => {
		render(<Counter />);

		const stepValue = screen.getByTestId('stepValue') as HTMLInputElement;

		fireEvent.change(stepValue, {
			target: { value: '2' },
		});
		expect(parseInt(stepValue.value)).toEqual(2);
	});

	test("should set initial value 15", () => {
		render (<Counter />);
		const stepValue = screen.getByTestId("stepValue");
	
		const counterValue = screen.getByTestId("counterValue");
	
		fireEvent.change(screen.getByTestId("initialValue"), {
		  target: { value: "10" },
		});
	
		fireEvent.change(stepValue, {
		  target: { value: "5" },
		});
	
		const plusButton = screen.getByRole("button", {
		  name: /\+/i,
		});
	
		fireEvent.click(plusButton);
	
		expect(parseInt(counterValue.innerHTML)).toEqual(15);
	  });

	  test("should set initial value 5", () => {
		render (<Counter />);
		const stepValue = screen.getByTestId("stepValue");
	
		const counterValue = screen.getByTestId("counterValue");
	
		fireEvent.change(screen.getByTestId("initialValue"), {
		  target: { value: "10" },
		});
	
		fireEvent.change(stepValue, {
		  target: { value: "5" },
		});
	
		const plusButton = screen.getByRole("button", {
		  name: /\-/i,
		});
	
		fireEvent.click(plusButton);
	
		expect(parseInt(counterValue.innerHTML)).toEqual(5);
	  });
});
