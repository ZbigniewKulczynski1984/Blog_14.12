import { render, screen} from '@testing-library/react'
import { Navigation } from './Navigation'

describe('Navigation.tsx', () => {

    test('should render new posts', () => {
        render(<Navigation blogsCount={2}/>)

        const newPost = screen.getByTestId('addMe');
        expect(newPost).toBeInTheDocument();
    })
})