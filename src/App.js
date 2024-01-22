import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from './redux/reducers/moviesSlice';
import { Container, Row } from 'reactstrap';
import Topbar from './components/Topbar';
import Paginator from './components/Paginator';
import Card from './components/card/Card';
import Carousel from './components/carousel/Carousel';

function App() {
  const imageURL = 'https://image.tmdb.org/t/p/original/'
  const dispatch = useDispatch();
  const { movies, loading, error, page} = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(fetchPopularMovies(page))
  }, [dispatch])

  const handleOnChangePage = () => {

  }

  return (
    <div className="App">
      <Topbar/>
      <Carousel/>
      <Container>
        <Row>
            {
              movies.map((movie) => {
                return (
                    <Card movie={movie}/>
                )
              })
            }
        </Row>
        <Paginator page={page} changePage={handleOnChangePage}/>
      </Container>
    </div>
  );
}

export default App;
