import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import SingleMovie from './SingleMovie';
import SpinnerWait from './SpinnerWait';
import './Gallery.css'

const Gallery = ({ saga }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  const getMovies = async () => {
    try {
      setLoading(true)
      const res = await fetch(
        `https://www.omdbapi.com/?s=${saga}&apikey=c642f00a`
      );
      if (res.ok) {
        let data = await res.json();
        setMovies(data.Search);
        setLoading(false)
      } else {
        console.log('error');
        setLoading(false)
        setError(true)
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
      setError(true)
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <> 
      <div className='mt-1 mx-1 d-flex gap-4'>
          {isLoading && <SpinnerWait />}
          {
          movies.slice(0, 6).map((movie) => (
            <Col key={movie.imdbID}>
              <SingleMovie movie={movie}></SingleMovie>
            </Col>
          ))}
        
      </div>
    </>
  );
};

export default Gallery;