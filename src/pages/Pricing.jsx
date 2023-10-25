import PageNav from "../components/PageNav";

function Pricing() {
  return (
    <main>
      <div className="m-7 h-[calc(100vh-56px)]  bg-gray-700 text-white">
        <PageNav />
        <div className="mx-auto mt-10 grid w-[60rem] grid-cols-2 gap-[4rem]">
          <img
            className="col-start-2 row-span-2"
            src="img-2.jpg"
            alt="city skyscrapers"
          />
          <h1 className="col-start-1 row-start-1 self-end text-5xl font-semibold">
            Simple pricing.
            <br /> Just $9/month.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          </p>
        </div>
      </div>
    </main>
  );
}

export default Pricing;
