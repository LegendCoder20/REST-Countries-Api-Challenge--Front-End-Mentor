import React from "react";
import {useDarkMode} from "./DarkModeContext";

function SearchBar() {
  const {isDarkMode} = useDarkMode();

  const searchBarStyles = {
    backgroundColor: isDarkMode ? "#333" : "#fff", // Adjust background color based on dark mode state
    color: isDarkMode ? "#fff" : "#333", // Adjust text color based on dark mode state
    // Add more style properties as needed
  };

  return (
    <div className="search-container" style={searchBarStyles}>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a country..."
          className="search-input"
          style={{backgroundColor: isDarkMode ? "#444" : "#eee"}} // Adjust input background color based on dark mode state
        />
      </div>
      {/* Uncomment the below code to include the datalist option */}
      {/* <input list="FilterbyRegion" />
        <datalist id="FilterbyRegion">
          <option value="Africa" />
          <option value="America" />
          <option value="Asia" />
          <option value="Europe" />
          <option value="Oceania" />
        </datalist> */}
      <div className="filter-box">
        <select name="filterByRegion" className="filter-by-region">
          <option className="eg" value="">
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
