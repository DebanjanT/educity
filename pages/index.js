import Link from "next/link";
import Head from "next/head";
import Typewriter from "typewriter-effect";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function index() {
  const [playedTime, setPlayedTime] = useState(null);
  const previewClick = () => {
    toast.success("Playing Educity Intro");
  };
  const stats = (playedSeconds) => {
    console.log(playedSeconds);
    var ptm = Math.floor(playedSeconds.playedSeconds);
    setPlayedTime(ptm);
  };
  return (
    <div>
      <Head>
        <title>Educity| City of learining</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section className="flex flex-col lg:flex-row bg-neutral">
        <div className="container mx-auto flex flex-col items-center px-4 py-14 text-center md:py-20 md:px-10 lg:px-32 xl:max-w-3xl">
          <p className="w-full leading-relaxed flex justify-center  align-center items-center font-bold text-2xl text-white lg:text-5xl mb-4">
            <span>
              <kbd className="kbd kbd-lg text-accent bg-primary mr-3">⌥</kbd>{" "}
            </span>{" "}
            City to learn{" "}
            <span className="text-primary ml-2 -rotate-6">
              <code> Coding</code>
            </span>{" "}
            <br />
          </p>

          <div className="mockup-code bg-accent-focus w-4/5 lg:w-full flex flex-col  items-start align-center">
            <pre data-prefix="$">
              <code>get it freeforever</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>
                learning<span className="animate-pulse">...</span>
              </code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Done!</code>
            </pre>
          </div>

          <div className="flex flex-wrap justify-center mt-4">
            <div className="indicator">
              <div className="indicator-item badge badge-accent mr-6 mt-3">
                Beta
              </div>
              <Link href="/signup">
                <div
                  data-tip="Register Today"
                  className="tooltip tooltip-bottom tooltip-info"
                >
                  <button className=" shadow-lg px-8 py-3 m-2 text-lg font-semibold rounded bg-coolGray-50 text-accent-focus hover:bg-accent hover:text-coolGray-50 hover:border hover:border-primary transition-all ease-out duration-500 hover:scale-105 ">
                    Join Today
                  </button>
                </div>
              </Link>
            </div>

            <label
              for="my-modal-2"
              className="modal-button cursor-pointer relative shadow-lg text-white px-8 py-3 m-2 transition ease-out duration-500 hover:scale-105 overflow-hidden font-semibold rounded border-2 border-t-blue-500 border-r-pink-500 border-b-green-500 border-l-yellow-500 hover:border shadow hover:border-2 hover:border-secondary "
            >
              WHO ARE
              <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center text-white shadow uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-secondary">
                WE
              </span>
            </label>

            {/* who are we modal */}
            <input type="checkbox" id="my-modal-2" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box rounded-md">
                <p className="text-lg">
                  We are building udemy like platform absolutely free , under
                  development!{" "}
                </p>
                <div class="modal-action">
                  <a
                    href="mailto:debanjantewary.1997@gmail.com"
                    for="my-modal-2"
                    class="btn btn-primary"
                  >
                    {" "}
                    ❤️ Contact
                  </a>
                  <label for="my-modal-2" class="btn">
                    ❌ Close
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center -mt-8 w-5/6 lg:w-full mx-auto ">
        <div className="relative flex flex-col items-center w-full max-w-6xl px-4 py-8 mx-auto text-center rounded-lg shadow-md lg:text-left lg:block bg-gradient-to-br from-primary  to-secondary sm:px-6 md:pb-0 md:pt-12 lg:px-12 lg:py-12">
          <h2 className="my-4 text-3xl font-extrabold tracking-tight text-accent sm:text-4xl md:text-5xl lg:my-0 xl:text-4xl sm:leading-tight">
            Infastructure that is{" "}
            <span className="block text-accent/50 xl:inline">
              out of this world
            </span>
          </h2>
          <p className="mt-1 mb-10 text-sm font-medium text-coolGray-600 uppercase xl:text-base xl:tracking-wider lg:mb-0">
            Pushing the envelope for being awesome!
          </p>
          <div className="flex mb-8 lg:mt-6 lg:mb-0">
            <div className="inline-flex">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-700 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-accent hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300"
              >
                Sign Up Today
              </a>
            </div>
          </div>
          <div className="bottom-0 right-0 mb-0 mr-3 lg:absolute lg:-mb-12">
            <img
              src="https://cdn.devdojo.com/images/september2020/cta-1.png"
              className="max-w-xs mb-4 opacity-75 md:max-w-2xl lg:max-w-lg xl:mb-0 xl:max-w-md"
            />
          </div>
        </div>
      </div>

      <section className="relative   rounded-lg  animation-fade animation-delay my-16">
        <div className="container px-1 mx-auto sm:px-10 md:px-0">
          <div className="flex flex-col items-center justify-center w-full md:flex-row">
            <div className="flex justify-center w-full md:max-w-md md:mr-8 lg:mr-12">
              <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_1H7IW0.json"
                background="transparent"
                className="max-w-md min-w-sm"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="w-full max-w-md px-4 pb-10 text-xs text-center md:pb-0 sm:text-sm lg:text-base md:max-w-lg md:w-full md:text-left">
              <h2 className="text-transparent text-2xl font-bold leading-snug sm:text-3xl md:text-4xl lg:text-5xl md:leading-tight md:mt-10 bg-clip-text bg-gradient-to-br from-accent-focus to-coolGray-500  ">
                Understanding the
                <br />
                customer journey.
              </h2>

              <p className="mt-4 sm:mt-6 md:max-w-sm">
                To succeed, one must have an unwavering desire to succeed amidst
                fear of failure.
              </p>

              <button className="flex justify-center w-full max-w-xs py-4 mx-auto mt-10 text-sm font-semibold text-coolGray-50 transition-all  bg-accent rounded hover:shadow-lg  hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:scale-105 duration-400  hover:text-white focus:bg-purple-600 focus:text-white md:max-w-sm md:mx-0 hover:-rotate-3">
                Start your 14 day FREE Trial
              </button>

              <hr className="my-10 border-2" />

              <p className="text-gray-700 text-md">
                “Our conversion rates have gone up 12% since we start using this
                platform! I highly recommend using this tool.”
              </p>

              <div className="mt-4">
                <div className="self-center font-semibold text-gray-900">
                  Debanjan Tewary, CEO of Educity
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
