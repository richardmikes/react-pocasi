import "./App.css";
import Inputs from "./components/Inputs";
import Location from "./components/Location";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "prague" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  // Ziskani dat Weather API
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  // Zmena barvy pozadi podle teploty
  const formatBackground = () => {
    if (!weather) return "from-cyan-700/50 to-sky-900/50";
    const threshold = units === "metric" ? 22 : 71.6;
    if (weather.temp <= threshold) return "from-cyan-700/50 to-sky-900/90";
    return "from-yellow-700/50 to-amber-900/80";
  };

  return (
    <div
      className={`md:py-5 md:px-5 bg-gradient-to-b min-h-screen ${formatBackground()}`}
    ><div className="max-w-screen-md min-h-screen md:min-h-fit mx-auto bg-slate-800/50 md:p-10 p-6 md:rounded border border-solid border-white/50">
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <Location weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast title="následující hodiny" items={weather.hourly}/>
          <Forecast title="následující dny" items={weather.daily} />
        </div>
      )}
      </div>
    </div>
  );
}

export default App;
