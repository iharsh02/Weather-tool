import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, SetCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

  // console.log(API_KEY);

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    // console.log(jsonResponse);

    let results = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(results);
    return results;
  };

  let handelChange = (evt) => {
    SetCity(evt.target.value);
  };

  let handelSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      SetCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <form className="search-box" onSubmit={handelSubmit}>
      <div className="input">
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          className="Input"
          value={city}
          onChange={handelChange}
        />
      </div>
      <div className="btn">
        <Button variant="outlined" type="submit">
          Search
        </Button>
      </div>
      <div>{error && <p>No such place Exits in our database! sorry :(</p>}</div>
    </form>
  );
}
