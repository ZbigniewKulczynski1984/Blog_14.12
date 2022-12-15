import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { useBlogs } from '../../hooks/useBlogs'
import { BlogCard } from '../../blog-cards/BlogCards';
import { Navigation } from '../navigation/Navigation';

export const BlogList = () => {
const { blogsList, isLoading } = useBlogs();

  return (
    <Container>
      <Navigation blogsCount={blogsList.length}/>
      <h1>My blog</h1>
      {isLoading ? <Spinner data-testid="spinner" /> : (
      <Container>
        <Row>
          {blogsList.length ? blogsList.map((blog, index) => (
            <Col>
              <BlogCard blog={blog} key={index} />
            </Col>
          )) : <p>There is no blogs</p>}
          {}
        </Row>
      </Container>
      )}
    </Container>
  )
}
