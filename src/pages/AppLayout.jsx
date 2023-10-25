import SideBar from "../components/SideBar";
import Map from "../components/Map";

function AppLayout() {
  return (
    <div className="m-7 flex h-[calc(100vh-56px)]">
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;
