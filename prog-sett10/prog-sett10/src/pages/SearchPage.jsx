// La pagina Homepage funge da "contenitore" a WeatherResults, come punto di ingresso al componente
import WeatherResults from '../components/WeatherResults'

const SearchPage = (page) => {
    return ( // Inserisco il parametro 'page' e lo passo al componente WeatherResults come prop
        <>
            <WeatherResults page={page} />
        </>
    )
}

export default SearchPage