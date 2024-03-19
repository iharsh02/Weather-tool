import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function weatherApp() {
  const [weatherInfo, setWeatherinfo] = useState({
    city: "Shimla",
    feelsLike: 5.95,
    humidity: 78,
    temp: 7.86,
    tempMax: 7.86,
    tempMin: 7.86,
    weather: "overcast clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherinfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App by senpai</h1>
      <SearchBox updateInfo = {updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
