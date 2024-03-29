import Link from "next/link";
import Footer from "../footer";

const DrawerWrapper = ({ children }) => {
  return (
    <div className="drawer h-[100vh]">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {children}
        <Footer />
      </div>
      <div className="drawer-side">
        <label for="my-drawer" className="drawer-overlay"></label>
        <ul className="menu overflow-y-auto w-80 bg-white text-accent">
          <Link href="/instructor">
            <li className="group font-semibold hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-primary hover:text-accent hover:border-l-4 hover:border-primary hover:font-semibold hover:shadow-md">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-1 group-hover:text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                Dashboard
              </a>
            </li>
          </Link>
          <Link href="/instructor/course/create">
            <li className="group font-semibold hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-primary hover:text-accent hover:border-l-4 hover:border-primary hover:font-semibold hover:shadow-md">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 group-hover:text-secondary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
                Create Course
              </a>
            </li>
          </Link>
          <Link href="/editor">
            <li className="group font-semibold hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-primary hover:text-accent hover:border-l-4 hover:border-primary hover:font-semibold hover:shadow-md">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 group-hover:text-secondary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
                Code Editor
              </a>
            </li>
          </Link>

          <div className="stats w-4/5 mx-auto mt-3">
            <div className="stat bg-primary">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">New Year Sale</div>
              <div className="stat-value">₹199</div>
              <div className="stat-desc">Jan 1st - jul 1st</div>
            </div>
          </div>
          <div className="stats w-4/5 mx-auto mt-2">
            <div className="stat bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <div className="stat-title">Upcoming</div>
              <div className="stat-value">SHOP</div>
              <div className="stat-desc">Expected March</div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DrawerWrapper;
