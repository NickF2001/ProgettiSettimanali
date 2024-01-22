import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import "./WeatherResults.css";

const MainHome = () => {
    return (
        <div className="app text-center">
            <h1>Weather App</h1>
            <p>Search your location here</p>
            <Button className='m-0 p-0'><Link className='btn' type='button' to='/searchpage'><i className="fa-solid fa-magnifying-glass"></i></Link></Button>
            
        </div>
    )
}

export default MainHome