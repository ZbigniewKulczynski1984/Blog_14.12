import { screen, render, fireEvent } from '@testing-library/react'
import { Counter} from './Counter'

describe('Counter.tsx', () => {

    test('should add 1', () => {
        render(<Counter />)

        const counterValue = screen.getByTestId('counterValue');
        const plusButton = screen.getByRole('button')
        name: /\+/i
    })

    fireEvent.click(plusButton)

    expect(parseInt(counterValue.innerHTML)).toEqual(1)
})

test('should substruct 1', () => {
    render(<Counter />)

    const counterValue = screen.getByTestId('counterValue');
    const minusButton = screen.getByRole('button')
    name: /\-/i
})

fireEvent.click(minusButton)

expect(parseInt(counterValue.innerHTML)).toEqual(-1)