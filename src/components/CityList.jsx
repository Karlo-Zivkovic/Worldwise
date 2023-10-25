import { useCities } from "../contexts/CitiesContext";
import { ClipLoader } from "react-spinners";
import City from "./City";
function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading)
    return (
      <div className="sidebar-spinner">
        <ClipLoader color="gray" size={100} />
      </div>
    );
  return (
    <ul className="co flex flex-col gap-3 text-white">
      {cities?.map((city) => (
        <City key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
