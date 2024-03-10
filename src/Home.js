import countryData from "./data.json";

function Home() {
  return (
    <div className="items-container">
      {countryData.map((country) => (
        <div className="country" key={country.name}>
          <div className="image">
            <img src={country.flag} alt="" />
          </div>
          <div className="country-info">
            <div className="country-name">
              <b>{country.name}</b>
            </div>
            <div className="population">
              <b>Population:</b> {country.population}
            </div>
            <div className="region">
              <b>Region: </b> {country.region}
            </div>
            <div className="capital">
              <b>Capital:</b> {country.capital}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
