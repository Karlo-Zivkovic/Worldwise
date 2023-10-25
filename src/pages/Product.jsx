import PageNav from "../components/PageNav";

function Product() {
  return (
    <main>
      <div className="m-7 h-[calc(100vh-56px)] bg-gray-700 text-white">
        <PageNav />
        <div className="mx-auto mt-10 grid w-[60rem] grid-cols-2 gap-[4rem]">
          <img
            className="row-span-2"
            src="img-1.jpg"
            alt="person looking into distance with 2 dogs on a hill"
          />
          <h1 className="self-end text-5xl font-semibold">About WorldWide.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Product;
