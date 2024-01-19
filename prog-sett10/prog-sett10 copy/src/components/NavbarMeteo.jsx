import axios from "axios";
import React, { useState } from "react";
import "./NavbarMeteo.css";

function NavbarMeteo() {
  /*
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=eb2e657251724ce3a1143224856d2154&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };
  */

  return (
    <div className="app-nav">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
    </div>
  );
}

export default NavbarMeteo;

/*
<Navbar className="bg-body-secondary">
      <Container>
        <Navbar.Brand>
          <Link to='/react.svg'>
            <img
              src="./src/assets/weather-ios.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
*/
