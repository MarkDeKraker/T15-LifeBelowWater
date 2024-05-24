import { Button } from "../components/buttons/Button";

function NotFound() {
  return (
    <section className="font-custom">
      <div className="flex items-center justify-center h-screen px-4 py-8 lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h1 className="mb-4 font-extrabold tracking-tight text-7xl lg:text-9xl text-primary-600">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Iets gaat niet helemaal goed.
          </p>
          <p className="mb-4 text-gray-800 text-md">
            Sorry, we kunnen die pagina niet vinden. Je vindt veel om te
            ontdekken op de homepagina.{" "}
          </p>
          <Button To="/" buttonStyle="secondary">
            Terug naar de homepage
          </Button>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
