const API_URL = import.meta.env.VITE_API_URL;

export async function getWeatherForecast() {
  const res = await fetch(`${API_URL}/weatherforecast`);
  if (!res.ok) throw new Error("Failed to fetch weather forecast");
  return res.json();
}
