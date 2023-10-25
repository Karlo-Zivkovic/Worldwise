import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { useEffect, useState } from "react";
import { flagemojiToPNG, useCities } from "../contexts/CitiesContext";
import Message from "./Message";
import { ClipLoader } from "react-spinners";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const navigate = useNavigate();
  const [lat, lng] = useUrlPosition();
  const { createCity, isLoading } = useCities();
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState(" ");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");

  useEffect(
    function () {
      if (!lat && !lng) return;

      async function fetchCityData() {
        try {
          setIsLoadingGeocoding(true);
          setGeocodingError("");
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`,
          );
          const data = await res.json();

          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a City. Click somewhere else 😉",
            );

          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (err) {
          setGeocodingError(err.message);
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      fetchCityData();
    },
    [lat, lng],
  );

  async function handleSubmit(e) {
    e.preventDefault();

    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };
    await createCity(newCity);
    navigate("/app/cities");
  }

  if (isLoadingGeocoding)
    return (
      <div className="sidebar-spinner">
        <ClipLoader color="gray" size={100} />
      </div>
    );

  if (!lat && !lng)
    return <Message message={"Start by clicking somewhere on the map"} />;

  if (geocodingError) return <Message message={geocodingError} mt={6} />;
  if (isLoading)
    return (
      <div className="sidebar-spinner">
        <ClipLoader color="gray" size={100} />
      </div>
    );
  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-md bg-gray-600 px-8  py-5 text-lg text-white"
    >
      <label htmlFor="cityName" className="mb-1 font-semibold">
        City name
      </label>
      <input
        id="cityName"
        className="mb-6 rounded-md bg-gray-300 px-3 py-1 text-black"
        type="text"
        size={40}
        onChange={(e) => setCityName(e.target.value)}
        value={cityName}
      />
      <span className="absolute right-12 top-[57px]">
        {flagemojiToPNG(emoji)}
      </span>
      <label htmlFor="date" className="mb-1 font-semibold">
        When did you go to City
      </label>
      <DatePicker
        id="date"
        onChange={(date) => setDate(date)}
        selected={date}
        dateFormat="dd/MM/yyyy"
        className="mb-6 rounded-md bg-gray-300 px-3  py-1 pr-[200px] text-black"
      />
      <label htmlFor="notes" className="mb-1 font-semibold">
        Notes about your trip to City
      </label>
      <input
        id="notes"
        className="mb-6 rounded-md bg-gray-300 px-3 py-1 text-black"
        type="text"
        onChange={(e) => setNotes(e.target.value)}
        value={notes}
        size={40}
      />
      <Button>ADD</Button>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
        className="ml-[236px] rounded-md border border-gray-300 bg-gray-700 px-4 py-2 text-base"
      >
        &larr;BACK
      </button>
    </form>
  );
}

export default Form;
