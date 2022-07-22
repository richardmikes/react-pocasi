import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  // Prevod mezi C a F
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  // Pokud neni input prazdny, nastavi ho jako query
  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  // Po kliknuti zjisti polohu (lat,lon) a nastavi ji jako query
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };
  
  return (
    <div className="flex md:flex-row flex-col items-center justify-center my-6">
      <div className="flex flex-row w-full md:w-3/4 items-center justify-center">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Vyhledat město (anglicky)..."
          className="text-l font-light px-7 w-full shadow-xl focus:outline-none capitalize placeholder:normal-case rounded-l-3xl h-full py-3"
        />
        <div className="bg-slate-800 p-3 rounded-r-3xl h-full mr-30">
          <UilSearch
            size={20}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearchClick}
          />
          </div>
        </div>
        <div className="flex flex-row md:mt-0 mt-4">
        <div className="bg-slate-800 rounded-3xl p-2.5 md:mx-3 mx-1">
          <UilLocationPoint
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocationClick}
          />
        </div>

        <div className="bg-slate-800 rounded-3xl h-full px-5 py-2 items-center justify-center flex flex-row">
          <button
            name="metric"
            className="text-xl text-white font-light transition ease-out hover:scale-125"
            onClick={handleUnitsChange}
          >
            °C
          </button>
          <p className="text-xl text-white mx-1">|</p>
          <button
            name="imperial"
            className="text-xl text-white font-light transition ease-out hover:scale-125"
            onClick={handleUnitsChange}
          >
            °F
          </button>
          </div>
      </div>
    </div>
  );
}

export default Inputs;
