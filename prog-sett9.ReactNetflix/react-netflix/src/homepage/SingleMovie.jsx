import Image from 'react-bootstrap/Image';
import './SingleMovie.css'

const SingleMovie = ({ movie }) => {
  return (
    <section className="single-movie">
        
            <div className="d-flex p-0 mb-5 single-movie">
              <a href="#">
                <Image src={movie.Poster} alt={movie.Title} width="100%" height="auto" />
              </a>
            </div>
        
    </section>
  );
};

export default SingleMovie;