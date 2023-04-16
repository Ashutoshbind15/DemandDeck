import React, { useState } from "react";
import { Search, Tune, Favorite } from "../public/icons";
import DemandCard from "./DemandCard";

export default function DemandsPageComponent({ demands }) {
  const [searchText, setSearchText] = useState("");

  function searchHandler(event) {
    setSearchText(event.target.value);
  }

  return (
    <>
      <div class="px-4 flex justify-between items-center shadow-lg">
        <h2 class="text-2xl font-bold">1299 Demands</h2>
        <div class="flex justify-evenly items-center w-1/2">
          <div className="input-group my-2">
            <button className="btn btn-square">{Search}</button>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered rounded-3xl w-full p-4"
              onChange={searchHandler}
              value={searchText}
            />
          </div>
          {Tune}
        </div>
        {Favorite}
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
        {demands?.map((el) => (
          <DemandCard
            location={el.location}
            title={el.title}
            tags={el.tags}
            key={el._id}
            numresp={el.proposals.length}
            id={el._id}
            numsup={el.responses.length}
          />
        ))}
      </div>
    </>
  );
}
