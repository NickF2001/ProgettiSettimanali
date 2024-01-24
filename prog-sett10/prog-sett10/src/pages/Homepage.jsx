// La pagina Homepage funge da "contenitore" per MainHome, come punto di ingresso al componente
import MainHome from '../components/MainHome'

const Homepage = (page) => {
    return ( // Inserisco il parametro 'page' e lo passo al componente MainHome come prop
        <>
            <MainHome page={page} />
        </>
    )
}

export default Homepage