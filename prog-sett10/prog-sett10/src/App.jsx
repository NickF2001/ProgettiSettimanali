import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import NavbarHome from "./components/NavbarHome";
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
