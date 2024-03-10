function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a country..."
          className="search-input"
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
          <option value="">Filter by Region</option>

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
