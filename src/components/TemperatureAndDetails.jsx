import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  // Preklad details EN do CZ
  let czech_details = "Jasno"
  if (details === "Clear") {
    czech_details = "Jasno"
  }
  else if (details === "Clouds") {
    czech_details = "Zataženo"
  }
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-white">
        <p>{czech_details}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Pocitově:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Vlhkost:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Vítr:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
      <div className="bg-white/10 px-2 py-1 rounded-3xl border border-solid border-white/40 flex justify-center aling-center">
        <UilSun className="hidden md:block" />
        <p className="font-light pt-0.5 pl-2">
          Východ:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "HH:mm")}
          </span>
        </p>
        </div>
        
        <div className="bg-white/10 px-2 py-1 rounded-3xl border border-solid border-white/40 flex justify-center aling-center">
        <UilSunset className="hidden md:block" />
        <p className="font-light pt-0.5 pl-2">
          Západ:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "HH:mm")}
          </span>
        </p>
        </div>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
