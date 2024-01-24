import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import "./WeatherResults.css";

const MainHome = () => { // Definisco il componente che sarà il main della hompage
    return (
        <div className="app text-center">
            <h1>Weather App</h1>
            <p>Search your location here</p>
            <Button className='m-0 p-0'><Link className='btn' type='button' to='/searchpage'><i className="fa-solid fa-magnifying-glass"></i></Link></Button>
            
        </div>
    )
}

export default MainHome

// E' un componente che rappresenta la pagina principale dell'applicazione meteorologica,
// Contiene il titolo dell'app, un messaggio d'invito a cliccare il bottone sottostante per sapere il meteo nella città che si desidera
// e il pulsante per avviare la ricerca di posizioni meteorologiche.