import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundPosition: "50%",
          backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')`,
          height: "500px",
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                The best offer on the market <br />
                <span>for your Car</span>
              </h1>
              <Link to="/login">
                <button
                  type="button"
                  className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-gray-300 my-24 mx-auto md:px-6">
  <section className="mb-32 text-center">
    <div className="py-12 md:px-12">
      <div className="container mx-auto xl:px-32">
        <div className="flex grid items-center  lg:grid-cols-2">
          <div className="mb-12 md:mt-12 lg:mt-0 bg-gray-800 lg:mb-0">
            <div
              className="relative z-[1] block rounded-lg bg-gray-800 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
              <h2 className="mb-16 text-3xl font-bold">
                Trusted by the best companies <br />
                <span className="">around the world</span>
              </h2>
              <div className="grid gap-x-6 md:grid-cols-2">
                <div className="mb-12">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo2-1.png"
                    className="neutralscale px-6" />
                </div>

                <div className="mb-12">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo5-1.png"
                    className="neutralscale px-6" />
                </div>

                <div className="mb-12 md:mb-0">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo3-1.png"
                    className="neutralscale px-6" />
                </div>

                <div className="">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo4-1.png"
                    className="neutralscale px-6" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:mb-12 lg:mb-0">
            <img src="https://mdbcdn.b-cdn.net/img/new/textures/full/166.jpg"
              className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </div>
  );
}

export default Home;
