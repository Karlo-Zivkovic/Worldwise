import { useNavigate, useParams } from "react-router-dom";
import { flagemojiToPNG, useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";

function CityInfo() {
  const { id } = useParams();
  const { getCity, curCity, isLoading } = useCities();
  const navigate = useNavigate();

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

  useEffect(
    function () {
      getCity(id);
    },
    [id, getCity],
  );
  if (isLoading)
    return (
      <div className="sidebar-spinner">
        <ClipLoader color="gray" size={100} />
      </div>
    );
  return (
    <div className="w-full rounded-md bg-gray-600 p-7 ">
      <p className="text-sm font-bold uppercase text-gray-400">city name</p>
      <div className="mb-5 mt-1 flex  items-center gap-3 text-3xl">
        <span className="">{flagemojiToPNG(curCity.emoji || 0)}</span>
        <span className="text-white">{curCity.cityName}</span>
      </div>
      <p className="text-sm font-bold uppercase text-gray-400">
        you went to {curCity.cityName} on
      </p>
      <p className="mb-5 mt-1 text-white">{formatDate(curCity.date || null)}</p>
      <p className="mb-1 text-sm font-bold uppercase text-gray-400">
        learn more
      </p>
      <a
        href={`https://en.wikipedia.org/wiki/${curCity.cityName}`}
        target="_blank"
        rel="noreferrer"
        className=" text-orange-400"
      >
        Check out {curCity.cityName} on Wikipedia &rarr;
      </a>
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
        className="mt-5  rounded-md border border-gray-300 bg-gray-700 px-4 py-2 text-base text-white"
      >
        &larr; BACK
      </button>
    </div>
  );
}

export default CityInfo;
