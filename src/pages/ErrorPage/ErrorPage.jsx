import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="hero min-h-screen">
      <main className="grid min-h-full place-items-center bg-[#2a303c] text-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibol">404</p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>

          <p className="mt-6 text-base leading-7">
            Sorry, we couldn’t find the page you’re looking for.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;
