import {useEffect} from "react";
import countryData from "./data.json";
import {useParams} from "react-router-dom";

function CountryInfo() {
  const {country} = useParams();

  const foundCountry = countryData.find((e) => country === e.country);

  const currencies = foundCountry.currencies.map((currency) => currency.name);

  const languages = foundCountry.languages.map((language) => language.name);

  if (!foundCountry) {
    return <p> Data Not Found </p>;
  }

  const borderCountries = countryData.filter((c) =>
    foundCountry.borders.includes(c.alpha3Code)
  );

  return (
    <>
      <div className="main-info-container">
        <div className="back-button">
          <button>← Back </button>
        </div>

        <div className="country-info-container">
          <div className="country-flag">
            <img src="https://flagcdn.com/be.svg" alt="" />
          </div>
          <div className="country-detailed-info">
            <div className="country-main-name">
              <h1>{foundCountry.name} </h1>
            </div>
            <div className="specific-country-info">
              <div className="country-primary-info">
                <p>
                  <b>Native Name: </b> {foundCountry.nativeName}
                </p>
                <p>
                  <b>Population: </b>
                  {foundCountry.population}
                </p>
                <p>
                  <b>Region: </b>
                  {foundCountry.region}
                </p>
                <p>
                  <b>Sub Region: </b>
                  {foundCountry.subregion}
                </p>
                <p>
                  <b>Capital: </b>
                  {foundCountry.capital}
                </p>
              </div>
              <div className="country-secondary-info">
                <p>
                  <b>Top Level Domain: </b>
                  {foundCountry.topLevelDomain}
                </p>
                <p>
                  <b>Currencies: </b>
                  {currencies}
                </p>
                <p>
                  <b>Languages: </b>
                  {languages.join(", ")}
                </p>
              </div>
            </div>
            <div className="border-countries">
              <p>
                <b>Border Countries: </b>
                {borderCountries.map((c) => (
                  <div className="border-countries-names">{c.name}</div>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryInfo;
