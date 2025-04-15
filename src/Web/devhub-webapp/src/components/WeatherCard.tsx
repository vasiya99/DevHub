// src/components/WeatherCard.tsx
interface WeatherProps {
  weather: {
    date: string;
    temperatureC: number;
    summary: string;
  };
}

export default function WeatherCard({ weather }: WeatherProps) {
  return (
    <div className="weather-card">
      <div className="weather-header">
        <h3>{weather.date}</h3>
      </div>
      <div className="weather-details">
        <p className="temperature">{weather.temperatureC}°C</p>
        <p className="summary">{weather.summary}</p>
      </div>
    </div>
  );
}
