import { useCities } from "../contexts/CitiesContext";
import Country from "./Country";

function CountryList() {
  const { cities } = useCities();

  const countries = cities?.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className="grid grid-cols-2 gap-4">
      {countries?.map((country) => (
        <Country key={country.country} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
