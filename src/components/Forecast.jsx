import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ title, items }) {
  // Prelozeni EN dnu do CZ
  function translationToCZ(tranlated) {
      if (tranlated === "Mon") { return "Po"
      } else if (tranlated === "Tue") { return "Út"
      } else if (tranlated === "Wed") { return "St"
      } else if (tranlated === "Thu") { return "Čt"
      } else if (tranlated === "Fri") { return "Pá"
      } else if (tranlated === "Sat") { return "So"
      } else if (tranlated === "Sun") { return "Ne"
      } else return tranlated
  }
  return (
    <div className="bg-white/10 px-4 pt-1 pb-3 rounded mb-4 border border-solid border-white/40">
      <div className="flex items-center justify-start mt-3">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      

      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{translationToCZ(item.title)}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
