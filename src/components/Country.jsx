import { flagemojiToPNG } from "../contexts/CitiesContext";

function Country({ country }) {
  return (
    <li className="flex flex-col items-center rounded-md border-l-4 border-l-orange-400 bg-gray-600 px-24">
      <p className="scale-125 pt-4  ">{flagemojiToPNG(country.emoji)}</p>
      <br />
      <p className="pb-2 text-lg font-semibold text-white">{country.country}</p>
    </li>
  );
}

export default Country;
