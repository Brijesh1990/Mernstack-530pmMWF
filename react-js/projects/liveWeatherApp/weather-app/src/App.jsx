import React, { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  // STEP 1: Convert city -> latitude/longitude
  const getCoordinates = async () => {
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );
    const data = await res.json();

    if (!data.results) {
      alert("City not found!");
      return null;
    }

    return data.results[0];
  };

  // STEP 2: Get weather using lat/lon
  const getWeather = async () => {
    const location = await getCoordinates();
    if (!location) return;

    const { latitude, longitude, name, country } = location;

    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );

    const data = await res.json();

    setWeather({
      city: name,
      country: country,
      temp: data.current_weather.temperature,
      wind: data.current_weather.windspeed,
    });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-cyan-400 text-white">

      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-96 text-center animate__animated animate__fadeIn">

        <h1 className="text-3xl font-bold mb-4">🌦 Weather App</h1>

        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 rounded-lg text-black mb-4 outline-none bg-white"
        />

        <button
          onClick={getWeather}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg animate__animated animate__pulse animate__infinite"
        >
          Get Weather
        </button>

        {weather && (
          <div className="mt-6 animate__animated animate__fadeInUp">
            <h2 className="text-2xl font-semibold">
              {weather.city}, {weather.country}
            </h2>
            <p className="text-5xl font-bold">{weather.temp}°C</p>
            <p>💨 Wind: {weather.wind} km/h</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;