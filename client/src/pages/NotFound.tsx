function NotFound() {
  return (
    <section className="">
      <div className="flex items-center justify-center h-screen px-4 py-8 lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h1 className="mb-4 font-extrabold tracking-tight text-7xl lg:text-9xl text-primary-600">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Iets gaat niet helemaal goed.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            Sorry, we kunnen die pagina niet vinden. Je vindt veel om te
            ontdekken op de homepagina.{" "}
          </p>
          <a
            href="#"
            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Terug naar de homepage
          </a>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
