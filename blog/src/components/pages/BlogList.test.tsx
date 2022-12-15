import { render, screen } from '@testing-library/react'
import { BlogList } from "../../components/pages/BlogList"
import { server } from '../mocks/server'

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('BlogList.tsx', () => {
    test('should render no post message', async() => {
        render(<BlogList />)

        const title = await screen.findByText(/how to write test/i)
        expect(title).toBeInTheDocument()
    })
})