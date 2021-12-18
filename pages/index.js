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
              <kbd className="animate-bounce kbd kbd-lg text-accent bg-primary mr-3">
                ⌥
              </kbd>{" "}
            </span>{" "}
            City to learn{" "}
            <span className=" text-primary ml-2 -rotate-6 transition-all underline underline-offset-4  decoration-wavy hover:underline-offset-8">
              <code> Coding</code>
            </span>{" "}
            <br />
          </p>

          <div className="mockup-code bg-accent-focus w-4/5 lg:w-full flex flex-col  items-start align-center">
            <pre data-prefix="$">
              <code>
                Learning started at port{" "}
                <span className="text-green-500">8000</span>
              </code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>GET /learning 200 1.484 ms</code>
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
              className="modal-button cursor-pointer relative  text-white px-8 py-3 m-2 transition ease-out duration-500 hover:scale-105 overflow-hidden font-semibold rounded border-2 border-t-blue-500 border-r-pink-500 border-b-green-500 border-l-yellow-500  shadow hover:border-2 hover:border-secondary "
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
          <h2 className="my-4 text-3xl font-extrabold tracking-tight text-accent sm:text-4xl md:text-5xl lg:my-0 xl:text-[2rem] sm:leading-tight">
            Coding courses stack that is{" "}
            <span className="block text-accent/50 xl:inline">
              out of this world
            </span>
          </h2>
          <p className="mt-1 mb-10 text-sm font-medium text-accent-focus/50  uppercase xl:text-base xl:tracking-wider lg:mb-0">
            Pushing the envelope for being awesome!
          </p>
          <div className="flex mb-8 lg:mt-6 lg:mb-0">
            <div className="inline-flex">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-accent transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-accent hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300"
              >
                Browse Courses
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                width="888"
                height="442.24956"
                viewBox="0 0 888 442.24956"
              >
                <title>next_js</title>
                <circle
                  cx="190.00923"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="218.10149"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="246.19376"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="274.28602"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="302.37828"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="330.47054"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="358.5628"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="386.65506"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="414.74732"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="442.83958"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="470.93185"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="499.02411"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="527.11637"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="555.20863"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="583.30089"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="611.39315"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="639.48541"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="667.57767"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="695.66993"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="723.7622"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="751.85446"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="779.94672"
                  cy="79.90411"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="190.00923"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="218.10149"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="246.19376"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="274.28602"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="302.37828"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="330.47054"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="358.5628"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="386.65506"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="414.74732"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="442.83958"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="470.93185"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="499.02411"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="527.11637"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="555.20863"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="583.30089"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="611.39315"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="639.48541"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="667.57767"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="695.66993"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="723.7622"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="751.85446"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="779.94672"
                  cy="108.34899"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="190.00923"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="218.10149"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="246.19376"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="274.28602"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="302.37828"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="330.47054"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="358.5628"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="386.65506"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="414.74732"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="442.83958"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="470.93185"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="499.02411"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="527.11637"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="555.20863"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="583.30089"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="611.39315"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="639.48541"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="667.57767"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="695.66993"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="723.7622"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="751.85446"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="779.94672"
                  cy="136.79387"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="190.00923"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="218.10149"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="246.19376"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="274.28602"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="302.37828"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="330.47054"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="358.5628"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="386.65506"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="414.74732"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="442.83958"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="470.93185"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="499.02411"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="527.11637"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="555.20863"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="583.30089"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="611.39315"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="639.48541"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="667.57767"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="695.66993"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="723.7622"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="751.85446"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="779.94672"
                  cy="165.23874"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="190.00923"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="218.10149"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="246.19376"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="274.28602"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="302.37828"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="330.47054"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="358.5628"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="386.65506"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="414.74732"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="442.83958"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="470.93185"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="499.02411"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="527.11637"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="555.20863"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="583.30089"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="611.39315"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="639.48541"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="667.57767"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="695.66993"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="723.7622"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="751.85446"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="779.94672"
                  cy="193.68362"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="190.00923"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="218.10149"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="246.19376"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="274.28602"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="302.37828"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="330.47054"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="358.5628"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="386.65506"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="414.74732"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="442.83958"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="470.93185"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="499.02411"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="527.11637"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="555.20863"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="583.30089"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="611.39315"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="639.48541"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="667.57767"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="695.66993"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="723.7622"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="751.85446"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="779.94672"
                  cy="222.1285"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="190.00923"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="218.10149"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="246.19376"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="274.28602"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="302.37828"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="330.47054"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="358.5628"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="386.65506"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="414.74732"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="442.83958"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="470.93185"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="499.02411"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="527.11637"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="555.20863"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="583.30089"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="611.39315"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="639.48541"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="667.57767"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="695.66993"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="723.7622"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="751.85446"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="779.94672"
                  cy="250.57337"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="190.00923"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="218.10149"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="246.19376"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="274.28602"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="302.37828"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="330.47054"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="358.5628"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="386.65506"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="414.74732"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="442.83958"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="470.93185"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="499.02411"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="527.11637"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="555.20863"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="583.30089"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="611.39315"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="639.48541"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="667.57767"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="695.66993"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="723.7622"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="751.85446"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="779.94672"
                  cy="279.01825"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="190.00923"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="218.10149"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="246.19376"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="274.28602"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="302.37828"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="330.47054"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="358.5628"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="386.65506"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="414.74732"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="442.83958"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="470.93185"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="499.02411"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="527.11637"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="555.20863"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="583.30089"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="611.39315"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="639.48541"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="667.57767"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="695.66993"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="723.7622"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="751.85446"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="779.94672"
                  cy="307.46313"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="190.00923"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="218.10149"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="246.19376"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="274.28602"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="302.37828"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="330.47054"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle cx="358.5628" cy="335.908" r="5.54965" fill="#e6e6e6" />
                <circle
                  cx="386.65506"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="414.74732"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="442.83958"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="470.93185"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="499.02411"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="527.11637"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="555.20863"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="583.30089"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="611.39315"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="639.48541"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="667.57767"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="695.66993"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle cx="723.7622" cy="335.908" r="5.54965" fill="#e6e6e6" />
                <circle
                  cx="751.85446"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <circle
                  cx="779.94672"
                  cy="335.908"
                  r="5.54965"
                  fill="#e6e6e6"
                />
                <rect y="341.12316" width="888" height="2.24072" />
                <circle
                  cx="857.37804"
                  cy="271.93466"
                  r="28.89362"
                  fill="#00277b"
                />
                <circle cx="869.39158" cy="309.4043" r="3.67737" />
                <path
                  d="M483.52846,398.70427H598.7473V407.862H494.09019v68.92413h98.41609v9.15775H494.09019v75.672H599.9475v9.15774h-116.419Zm125.54053,0h12.242l54.24887,75.67195,55.44907-75.67195,75.41978-96.12077L682.521,482.329l63.85044,88.44458H733.64936l-58.0895-80.4918-58.32953,80.4918H604.74827L669.0788,482.329ZM750.93216,407.862v-9.15775H882.23365V407.862h-60.4899V570.77359H811.182V407.862Zm-411.54723-9.15775h13.20216L534.63714,671.12478,459.40456,570.77359,350.42674,411.71792l-.48008,159.05567H339.38493ZM881.16952,558.85222a3.833,3.833,0,1,1,3.77622-3.83256A3.73261,3.73261,0,0,1,881.16952,558.85222Zm10.37817-10.083h5.65146c.07708,3.06091,2.312,5.11868,5.60011,5.11868,3.67347,0,5.75421-2.2121,5.75421-6.35335V521.29808h5.75425v26.26219c0,7.45939-4.31569,11.755-11.45708,11.755C896.14594,559.31523,891.54769,555.14826,891.54769,548.76921Zm30.28676-.33439h5.70284c.4881,3.52391,3.93035,5.76173,8.88824,5.76173,4.624,0,8.01483-2.39215,8.01483-5.68457,0-2.82943-2.15783-4.52707-7.06434-5.68456l-4.77809-1.15749c-6.7047-1.56905-9.76161-4.81-9.76161-10.26309,0-6.61056,5.39458-11.009,13.48645-11.009,7.52674,0,13.0241,4.39847,13.358,10.64892h-5.60008c-.53948-3.421-3.51933-5.556-7.835-5.556-4.54688,0-7.57811,2.18636-7.57811,5.53023,0,2.64936,1.95232,4.167,6.78175,5.29873l4.08448,1.00316c7.60381,1.77482,10.7378,4.86146,10.7378,10.44315,0,7.09928-5.49732,11.54918-14.28281,11.54918C927.7685,559.31523,922.24547,555.07109,921.83445,548.43482Z"
                  transform="translate(-156 -228.87522)"
                />
                <circle cx="119.864" cy="63.38029" r="10.7783" fill="#00277b" />
                <path
                  d="M278.86687,281.7739a10.77979,10.77979,0,0,1,9.48819,15.89357A10.77573,10.77573,0,1,0,270.452,285.827,10.7517,10.7517,0,0,1,278.86687,281.7739Z"
                  transform="translate(-156 -228.87522)"
                  fill="#00277b"
                />
                <circle
                  cx="99.72319"
                  cy="31.6962"
                  r="31.66125"
                  fill="#00277b"
                />
                <path
                  d="M230.87426,240.92712a31.65557,31.65557,0,0,1,43.87848-3.31975c-.25891-.24611-.51507-.49421-.78409-.73337A31.66126,31.66126,0,0,0,231.897,284.19961c.269.23916.54542.46449.82017.69278A31.65557,31.65557,0,0,1,230.87426,240.92712Z"
                  transform="translate(-156 -228.87522)"
                  fill="#00277b"
                />
                <path
                  d="M286.254,341.28137l4.87038,27.59877,5.68209,54.38581s1.62346,21.91667-5.68209,22.7284-5.6821-24.35186-5.6821-24.35186L277.325,375.374l-3.24691-28.41049Z"
                  transform="translate(-156 -228.87522)"
                  fill="#fbbebe"
                />
                <circle
                  cx="100.22002"
                  cy="38.53885"
                  r="19.48148"
                  fill="#fbbebe"
                />
                <polygon
                  points="84.797 46.656 81.55 65.326 102.655 70.196 102.655 52.338 84.797 46.656"
                  fill="#fbbebe"
                />
                <polygon
                  points="34.47 319.397 32.035 335.631 41.776 336.443 47.458 322.644 34.47 319.397"
                  fill="#fbbebe"
                />
                <polygon
                  points="109.961 321.832 112.396 334.82 122.948 334.82 122.948 322.644 109.961 321.832"
                  fill="#fbbebe"
                />
                <path
                  d="M273.26632,368.88014l-53.57409,8.11728-3.24691,38.15124-6.49383,55.19754-23.54013,80.36113,23.54013,2.43518,42.20989-107.95989,10.55247,108.77162H287.0657l1.62346-111.20681s.81173-61.69137-12.17593-65.75Z"
                  transform="translate(-156 -228.87522)"
                />
                <path
                  d="M200.21075,562.88326l-13.79939-2.43519-5.6821,27.59877s-10.55247,37.33951,3.24692,34.0926,11.3642-34.0926,11.3642-34.0926Z"
                  transform="translate(-156 -228.87522)"
                />
                <path
                  d="M265.96076,562.88326l13.79939-2.43519,5.6821,27.59877s10.55247,37.33951-3.24692,34.0926-11.3642-34.0926-11.3642-34.0926Z"
                  transform="translate(-156 -228.87522)"
                />
                <path
                  d="M198.58729,329.10544s-6.49383,34.0926-3.24691,42.20988,21.91667,36.52779,21.91667,36.52779l5.6821-12.17593-16.23457-31.65741,5.6821-32.46915Z"
                  transform="translate(-156 -228.87522)"
                  fill="#fbbebe"
                />
                <path
                  d="M262.71385,305.56531l-1.62346-12.17593s-20.29321-3.24691-23.54013-8.929l-5.6821,9.74074-18.66975,4.05864s-10.55247,0-11.3642,8.11729-5.6821,24.35186-5.6821,24.35186l14.61111,4.87037,11.3642,42.20988,48.70371-7.30556L268.396,348.58692l2.43518-5.6821,2.43519,6.49383,15.42284-3.24691s.81173-29.22223-14.61111-34.0926Z"
                  transform="translate(-156 -228.87522)"
                />
                <polygon
                  points="82.014 17.207 82.014 37.599 86.737 37.599 92.747 31.16 91.942 37.599 112.817 37.599 111.529 31.16 114.105 37.599 117.432 37.599 117.432 17.207 82.014 17.207"
                  fill="#00277b"
                />
                <polygon points="858.878 343.354 855.878 343.354 857.378 272.354 858.878 343.354" />
                <polygon points="858 334.354 856.538 333.23 870.865 306.829 858 334.354" />
              </svg>
            </div>

            <div className="w-full max-w-md px-4 pb-10 text-xs text-center md:pb-0 sm:text-sm lg:text-base md:max-w-lg md:w-full md:text-left">
              <h2 className="text-transparent text-3xl font-bold leading-snug sm:text-3xl md:text-4xl lg:text-5xl md:leading-tight md:mt-10 bg-clip-text bg-gradient-to-br from-accent-focus to-coolGray-500 pb-2  ">
                Understanding the
                <br />
                developer's journey.
              </h2>

              <p className="mt-4 sm:mt-6 md:max-w-sm">
                Reducing the hastle for developers searching free tutorial
                videos in youtube and other platforms.
              </p>

              <button className="flex justify-center w-full max-w-xs py-4 mx-auto mt-10 text-sm font-semibold text-coolGray-50 transition-all  bg-gradient-to-br from-coolGray-600 to-accent/90 -rotate-6 rounded hover:shadow-lg  hover:bg-gradient-to-br hover:from-secondary hover:to-primary hover:scale-105 duration-400  hover:text-white  focus:text-white md:max-w-sm md:mx-0 hover:-rotate-3">
                Contribute your knowledge
              </button>

              <hr className="my-10 border-2" />

              <p className="text-gray-700 text-md">
                “Developers have increased productivity by 20% using educity!
                Join today its <strong>free!</strong>”
              </p>

              <div className="mt-4 flex justify-end ">
                <div className="self-center  text-yellow-600  flex flex-col">
                  Debanjan Tewary,{" "}
                  <span className="font-semibold text-accent">
                    OWNER of Educity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" text-coolGray-800 mb-2">
        <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
          <div className="flex flex-wrap justify-center lg:justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-label="Angular"
              className="w-12 h-12 mx-10 my-6 fillCurrent md:mx-12 lg:m-0 text-coolGray-600"
            >
              <title>Angular</title>
              <path d="M13.24 16.859h5.51l-2.755-6.542zM15.995 0.010l-15.078 5.307 2.297 19.677 12.781 6.995 12.786-6.984 2.297-19.688-15.083-5.302zM25.406 24.406h-3.516l-1.896-4.667h-8l-1.896 4.667h-3.516l9.411-20.865z"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-label="Plain HTML"
              className="w-12 h-12 mx-10 my-6 fillCurrent md:mx-12 lg:m-0 text-coolGray-600"
            >
              <title>Plain HTML</title>
              <path d="M2 0h28l-2.547 28.75-11.484 3.25-11.417-3.25zM11.375 13l-0.307-3.625 13.411 0.005 0.307-3.495-17.573-0.005 0.932 10.682h12.167l-0.432 4.568-3.88 1.068-3.938-1.078-0.255-2.813h-3.479l0.443 5.563 7.229 1.932 7.172-1.927 0.99-10.875z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-label="Next.js"
              className="w-12 h-12 mx-10 my-6 fillCurrent md:mx-12 lg:m-0 text-coolGray-600"
            >
              <title>Next.js</title>
              <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-label="React"
              className="w-12 h-12 mx-10 my-6 fillCurrent md:mx-12 lg:m-0 text-secondary animate-spin"
            >
              <title>React</title>
              <path d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854s-1.281-2.854-2.854-2.854zM8.010 21.672l-0.63-0.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l0.63-0.156 0.177 0.625c0.474 1.635 1.083 3.229 1.818 4.771l0.135 0.281-0.135 0.286c-0.734 1.536-1.344 3.13-1.818 4.771zM7.089 11.932c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c0.438-1.391 0.964-2.745 1.578-4.063-0.615-1.318-1.141-2.672-1.578-4.063zM23.99 21.672l-0.177-0.625c-0.474-1.635-1.083-3.229-1.818-4.766l-0.135-0.286 0.135-0.286c0.734-1.536 1.344-3.13 1.818-4.771l0.177-0.62 0.63 0.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zM23.333 15.995c0.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-0.438 1.385-0.964 2.745-1.578 4.063zM7.078 11.927l-0.177-0.625c-1.318-4.646-0.917-7.979 1.099-9.141 1.979-1.141 5.151 0.208 8.479 3.625l0.453 0.464-0.453 0.464c-1.182 1.229-2.26 2.552-3.229 3.958l-0.182 0.255-0.313 0.026c-1.703 0.135-3.391 0.406-5.047 0.813zM9.609 3.089c-0.359 0-0.677 0.073-0.943 0.229-1.323 0.766-1.557 3.422-0.646 7.005 1.422-0.318 2.859-0.542 4.313-0.672 0.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zM22.396 30.234c-0.005 0-0.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-0.453-0.464 0.453-0.464c1.182-1.229 2.26-2.552 3.229-3.958l0.177-0.255 0.313-0.031c1.703-0.13 3.391-0.401 5.052-0.813l0.63-0.156 0.177 0.625c1.318 4.646 0.917 7.974-1.099 9.135-0.49 0.281-1.042 0.422-1.604 0.411zM16.932 25.729c2.078 2.026 4.047 3.172 5.458 3.172h0.005c0.354 0 0.672-0.078 0.938-0.229 1.323-0.766 1.563-3.422 0.646-7.005-1.422 0.318-2.865 0.542-4.313 0.667-0.833 1.193-1.75 2.323-2.734 3.396zM24.922 11.927l-0.63-0.161c-1.661-0.406-3.349-0.677-5.052-0.813l-0.313-0.026-0.177-0.255c-0.969-1.406-2.047-2.729-3.229-3.958l-0.453-0.464 0.453-0.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zM19.667 9.651c1.521 0.141 2.969 0.365 4.313 0.672 0.917-3.583 0.677-6.24-0.646-7.005-1.318-0.76-3.797 0.406-6.401 2.943 0.984 1.073 1.896 2.203 2.734 3.391zM9.609 30.234c-0.563 0.010-1.12-0.13-1.609-0.411-2.016-1.161-2.417-4.49-1.099-9.135l0.177-0.625 0.63 0.156c1.542 0.391 3.24 0.661 5.047 0.813l0.313 0.031 0.177 0.255c0.969 1.406 2.047 2.729 3.229 3.958l0.453 0.464-0.453 0.464c-2.526 2.604-4.969 4.031-6.865 4.031zM8.021 21.667c-0.917 3.583-0.677 6.24 0.646 7.005 1.318 0.75 3.792-0.406 6.401-2.943-0.984-1.073-1.901-2.203-2.734-3.396-1.453-0.125-2.891-0.349-4.313-0.667zM16 22.505c-1.099 0-2.224-0.047-3.354-0.141l-0.313-0.026-0.182-0.26c-0.635-0.917-1.24-1.859-1.797-2.828-0.563-0.969-1.078-1.958-1.557-2.969l-0.135-0.286 0.135-0.286c0.479-1.010 0.995-2 1.557-2.969 0.552-0.953 1.156-1.906 1.797-2.828l0.182-0.26 0.313-0.026c2.234-0.188 4.479-0.188 6.708 0l0.313 0.026 0.182 0.26c1.276 1.833 2.401 3.776 3.354 5.797l0.135 0.286-0.135 0.286c-0.953 2.021-2.073 3.964-3.354 5.797l-0.182 0.26-0.313 0.026c-1.125 0.094-2.255 0.141-3.354 0.141zM13.073 21.057c1.969 0.151 3.885 0.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-0.844-1.76-1.823-3.453-2.932-5.063-1.948-0.151-3.906-0.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063 0.849 1.76 1.828 3.453 2.932 5.063z"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-label="Vue.js"
              className="w-12 h-12 mx-10 my-6  md:mx-12 lg:m-0 "
            >
              <title>Vue.js</title>
              <path d="M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z"></path>
            </svg>
          </div>
        </div>
      </section>
      <div className="mt-3 -mb-6 rounded-full text-coolGray-100">
        <div className="container  mx-auto bg-gradient-to-br from-coolGray-700 to-accent-focus rounded-xl">
          <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
            <div className="flex justify-start">
              <span className="px-2 py-1 mb-3 text-xs rounded-full bg-primary text-coolGray-700 shadow-xl">
                Educity Official
              </span>
            </div>
            <h1 className="text-3xl font-semibold">
              Why we started <code className="text-primary">educity</code>?
            </h1>
            <p className="flex-1 pt-2">
              Early days of a developer spent away most of the time , searching
              for the right courses for right tech stack...
            </p>
            <a
              href="#"
              className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-secondary"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <div className="flex items-center justify-between pt-2 pb-4">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-coolGray-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="self-center text-sm">by Debanjan Tewary</span>
              </div>
              <span className="text-xs">18 Oct, 2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
