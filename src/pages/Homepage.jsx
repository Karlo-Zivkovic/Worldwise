import { Link } from "react-router-dom";
import Button from "../components/Button";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <main className="p-7">
      <div className=" h-[calc(100vh-56px)] bg-[url('image.jpg')]   bg-cover bg-local bg-center  text-white">
        <PageNav />
        <div className="mt-40 flex flex-col gap-4 text-center text-5xl font-semibold">
          <p>You travel the world.</p>
          <p>WorldWise keeps track of your adventures.</p>
          <p className="mt-5 text-xl font-medium text-neutral-400">
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </p>
          <span>
            <Link to="/app">
              <Button>Start tracking now</Button>
            </Link>
          </span>
        </div>
      </div>
    </main>
  );
}

export default Homepage;
