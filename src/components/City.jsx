import { Link } from "react-router-dom";
import { flagemojiToPNG, useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function City({ city }) {
  const { deleteCity } = useCities();

  function handleClick(e) {
    e.preventDefault();
    console.log("test");
    deleteCity(city.id);
  }
  return (
    <Link to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}>
      <li className="flex w-[28rem] items-center  justify-between gap-3  rounded-md  border-l-4  border-l-green-500 bg-gray-600 py-2 text-lg">
        <span className="pl-5">{flagemojiToPNG(city.emoji)}</span>
        <span className="mr-auto font-semibold ">{city.cityName}</span>
        <span className="ml-auto text-base font-light">
          ({formatDate(city.date)})
        </span>
        <button
          onClick={handleClick}
          className=" mr-5 w-5 rounded-[50%] bg-gray-700 text-sm hover:bg-yellow-500 hover:text-black"
        >
          &times;
        </button>
      </li>
    </Link>
  );
}

export default City;
