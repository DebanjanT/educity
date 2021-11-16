import Link from "next/link";

export default function index() {
  return (
    <div>
      <section className="bg-coolGray-100 text-coolGray-800">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Welcome to <span className="text-blue-600">EduCity</span> <br />
          </h1>
          <span className="text-blue-600 text-lg">
            <code>[ @javascript / @Node.js / @any ]</code>
          </span>
          <p className="px-8 mt-8 mb-12 text-lg">
            A learing platform build for students. Lots of free course & great
            paid ones. JOIN TODAY!
          </p>
          <div className="flex flex-wrap justify-center">
            <Link href="/signup">
              <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-blue-500 text-coolGray-50 hover:bg-blue-800">
                Join Today
              </button>
            </Link>
            <button
              type="button"
              className="relative px-8 py-3 m-2 overflow-hidden font-semibold rounded border hover:border shadow hover:border-2 hover:border-blue-500 "
            >
              Features
              <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center text-white shadow uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-blue-500">
                Hot
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
