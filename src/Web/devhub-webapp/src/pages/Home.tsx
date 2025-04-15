// src/pages/Home.tsx
import { useEffect, useState } from 'react';
import { getWeatherForecast } from '../services/weatherService';
import WeatherCard from '../components/WeatherCard';
import '../styles/WeatherCard.css'; // Ensure styles are loaded
import Button from '@mui/material/Button';




export default function Home() {
  const [forecast, setForecast] = useState<any[]>([]);

  useEffect(() => {
    getWeatherForecast()
      .then(data => setForecast(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Weather Forecast</h1>
      <div className="forecast-container">
        {forecast.map((item, i) => (
          <WeatherCard key={i} weather={item} />
        ))}
        <Button variant="contained" color="primary" onClick={() => alert('Clicked!')}>
        Click Me
        </Button>
      </div>
    </div>
  );
}