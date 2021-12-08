import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../context";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const context = useContext(Context);
  const { state, dispatch } = context;
  const { user } = state;
  const router = useRouter();
  const logout = async () => {
    try {
      dispatch({
        type: "LOGOUT",
      });
      window.localStorage.removeItem("user");
      const { data } = await axios.get("/api/logout");
      toast.success(data.message);
      router.push("/");
    } catch (err) {
      console.log("Logout error", err);
      toast.error(err);
    }
  };

  return (
    <div className="navbar shadow bg-neutral text-neutral-content sticky top-0 z-50">
      <div className="flex-1 px-2 mx-2l">
        <div className="flex flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500 -mb-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
          <Link href="/">
            <span className="text-2xl font-bold cursor-pointer ">
              Edu<span className="text-primary">city</span>
            </span>
          </Link>
        </div>
      </div>
      <div className="flex-none  px-2 mx-2 ">
        <div className="flex items-stretch">
          <a className="btn btn-ghost btn-sm rounded-btn normal-case mr-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className=" text-primary inline-block w-5 mr-2 stroke-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Github
          </a>

          {!user && (
            <Link href="/login">
              <a className="btn btn-sm bg-primary text-accent hover:bg-primary hover:text-accent rounded-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 mr-2 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
                Login
              </a>
            </Link>
          )}

          {user && (
            <>
              <div className="dropdown dropdown-hover dropdown-end">
                <button
                  tabindex="0"
                  className="btn btn-sm hover:rounded-t-md hover:rounded-b-none hover:bg-white text-accent bg-white normal-case"
                >
                  My Account
                </button>
                <div
                  tabindex="0"
                  className="p-1 -mt-1 mr-[1px]  menu dropdown-content bg-gradient-to-r from-primary/70  via-coolGray-50 to-white  w-52  border-l-4 border-l-secondary z-50 backdrop-filter backdrop-blur-sm "
                >
                  <Link href="/user">
                    <a className="btn btn-ghost btn-sm rounded-btn text-accent mb-1 capitalize ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="current"
                        viewBox="0 0 24 24"
                        className="inline-block w-5 mr-2 stroke-current"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                      {user.name.length < 8 ? (
                        user.name
                      ) : (
                        <>{user.name.slice(0, 8)}...</>
                      )}
                    </a>
                  </Link>
                  {user.role && user.role.includes("Instructor") ? (
                    <Link href="/instructor/course/create">
                      <a className="btn btn-ghost btn-sm hover:bg-white hover:text-secondary rounded-btn text-accent mb-1 capitalize">
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
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        Create Course
                      </a>
                    </Link>
                  ) : (
                    <Link href="/user/become-instructor">
                      <a className="btn btn-ghost btn-sm hover:bg-white hover:text-secondary rounded-btn text-accent mb-1 capitalize ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        Become Instructor
                      </a>
                    </Link>
                  )}
                  <button
                    onClick={logout}
                    className="btn btn-sm bg-accent border-none"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
