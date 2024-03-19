import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css";

// icon
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'; 

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/uploads/14125383307942ca04b48/2c169440?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const RAIN_URL =
    "https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const SUNNY_URL =
    "https://images.unsplash.com/photo-1605371893234-db5e7b01aad2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const WINTER_URL =
    "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div>
      <h2>Weather Info!</h2>
      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? SUNNY_URL
                : WINTER_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{
                info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 15
                ? <WbSunnyIcon/>
                : <AcUnitIcon/>
                
              }
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Temprature : {info.temp}&deg;c</div>
              <div>Humidity : {info.humidity}</div>
              <div> Min temp : {info.tempMin}&deg;c</div>
              <div>Max temp : {info.tempMax}&deg;c</div>
              <div>
                The weather is described as <b>{info.weather}</b> and feels
                like&nbsp;
                <u>
                  <i>{info.feelsLike}&deg;c</i>
                </u>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
