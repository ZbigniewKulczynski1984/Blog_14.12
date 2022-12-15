import { render, screen } from '@testing-library/react'
import { BlogList } from "./BlogList"
import { server } from '../mocks/server'

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('BlogList.tsx', () => {
    test('should render two blogs', async() => {
        render(<BlogList />)

        const title = await screen.findAllByText(/test title/i)
        expect(title.length).toBe(2)
    })
})