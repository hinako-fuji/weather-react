import React from "react";

import Summary from "./Summary";

export default function Weather() {
  let form = (
    <div className="search">
      <form id="search-form">
        <div className="row">
          <div className="col-sm-9">
            <input
              type="search"
              placeholder="Enter a city..."
              class="form-control"
              id="city-input"
              autocomplete="off"
            />
          </div>
          <div className="col-sm-3">
            <input
              type="submit"
              value="Search"
              class="search-button btn btn-search w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      {form}
      <Summary />
    </div>
  );
}
