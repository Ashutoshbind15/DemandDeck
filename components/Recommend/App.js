import React from "react";

import SearchBar from "./SearchBar";
import MapItem from "./Mapper/MapItem";

const city = [
  ["Mumbai", ["farm", "poulty"]],
  ["Delhi", ["milk"]],
  ["Varanasi", ["milk"]],
  ["Jaunpur", ["milk"]],
];

function RecommendationComponent() {
  return (
    <div className="bg-transparent">
      <h1 className="pl-12 py-6 text-2xl">
        If you need any assistance in how to start a new venture or to be more
        precise demands unaddressed in any city.<br></br>
        <br />
        You can check the facilities lacking in the cities below:
      </h1>

      <div className="py-8">
        <h1 className="pl-12 py-2 text-2xl font-sans hover:font-serif font-medium text-lime-500">
          Enter Locations:
        </h1>
      </div>
      <div className=" ml-12 px:auto">
        <SearchBar />
        <span className="text-xs">
          Insert tags related to your idea and press Enter
        </span>
      </div>

      <div>
        <div className="block pl-12 py-6">
          <div>
            {city.map((el) => (
              <MapItem item={el} key={Math.random.toString()} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendationComponent;
