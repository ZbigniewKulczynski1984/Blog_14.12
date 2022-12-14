import { render, screen, fireEvent } from '@testing-library/react';
import { Blog } from '../hooks/useBlogs';
import { BlogCard } from '../blog-cards/BlogCards';

const blogMock: Blog = {
	id: 1,
	img: 'url_to_img',
	longText: 'long_text_mock',
	shortText: 'short_text_mock',
	title: 'title_mock',
};

describe('BlogCard.tsx', () => {
	test('blog img should be rendered', () => {
		render(<BlogCard blog={blogMock} />);

		const image = screen.getByRole('img');
		expect(image).toBeInTheDocument();
	});

	test('Title is rendered', () => {
		render(<BlogCard blog={blogMock} />);

		const title = screen.getByText(/title_mock/i);
		expect(title).toBeInTheDocument();
	});

	test('shortText is visible after click', () => {
		render(<BlogCard blog={blogMock} />);

		fireEvent.click(screen.getByRole('button'));
		const shortText = screen.queryByText('short_text_mock');

		expect(shortText).toBeInTheDocument();
	});
});
