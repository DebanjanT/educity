import Link from "next/link";

const InstructorNav = () => {
  return (
    <>
      <div className="mx-auto w-full sm:w-full lg:w-4/5 flex justify-center align-center items-center  ">
        <div className="pt-4 ">
          <ul className="menu items-stretch w-full px-4  horizontal text-sm ">
            <li className=" text-xs  btn transition-all duration-200 hover:scale-105 mr-2">
              <Link href="/instructor">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                    />
                  </svg>
                  Dashboard
                </a>
              </Link>
            </li>
            <li className="bg-white border-2 hover:border-2 hover:border-t-blue-500 hover:border-r-pink-500 hover:border-b-green-500 hover:border-l-yellow-500 rounded-lg">
              <Link href="/instructor/course/create">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Create course
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider w-4/5 mx-auto"></div>
      <div></div>
    </>
  );
};

export default InstructorNav;
