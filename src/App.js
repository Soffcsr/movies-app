import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from './redux/reducers/moviesSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function App() {
  const imageURL = 'https://image.tmdb.org/t/p/original/'
  const dispatch = useDispatch();
  const { movies, loading, error, page} = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(fetchPopularMovies(page))
  }, [dispatch])

  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={4}>
            {
              movies.map((movie) => {
                return (
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
                    <Card.Body>
                      <Card.Title>{movie.original_title}</Card.Title>
                      <Card.Text>
                        {
                          movie.overview
                        }
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )
              })
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
