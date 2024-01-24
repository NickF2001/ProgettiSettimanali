// Importo BrowserRouter gestire la navigazione tramite React Router, Routes per definire le route dell'applicazione.
// In questo caso ho creato due route: una per la homepage (<Homepage />) e una per la pagina di ricerca (<SearchPage />).
// Le route sono specificate con il percorso (path), che è obbligatorio inserire, e l'elemento (element) che deve essere renderizzato quando la route corrisponde
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importo bootstrap e il suo componente navbar
// Non metterò NavbarHome all'interno delle Routes perché mi serve averla in ogni pagina dell'applicazione
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHome from "./components/NavbarHome";

// Importo le pages (Homepage e SearchPage)
import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";

// Importo lo store di Redux e il componente Provider
// Il componente Provider serve per avvolgere l'intera applicazione in modo da fornire lo store Redux a tutti i componenti figli
import { Provider } from "react-redux";
import store from './store/store'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <NavbarHome />
          <Routes>
            <Route path="/" element={<Homepage page="homepage" />} />
            <Route
              path="/searchpage"
              element={<SearchPage page="Search Location" />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
