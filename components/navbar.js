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
    <div className="navbar shadow-lg bg-neutral text-neutral-content">
      <div className="flex-1 px-2 mx-2l">
        <Link href="/">
        <span className="text-2xl font-bold cursor-pointer ">
          Edu<span className="text-primary">city</span>
        </span>
        </Link>
      </div>
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
          <a className="btn btn-ghost btn-sm rounded-btn normal-case mr-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className=" text-primary inline-block w-5 mr-2 stroke-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        
            Github
          </a>
          
          {!user && <Link href="/login"><a className="btn btn-sm bg-primary text-accent hover:bg-primary hover:text-accent rounded-btn">
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
          </a></Link>}
          
          {user && <>
          <div className="dropdown dropdown-hover">
          <button tabindex="0" className="btn btn-sm rounded-btn bg-coolGray-700 normal-case">My Account</button> 
          <div tabindex="0" className="p-1 shadow menu dropdown-content bg-base-100 rounded w-40">
          <Link href="/user">
              <a className="btn btn-ghost btn-sm rounded-btn text-accent mb-1 lowercase ">
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
                  {user.name.length<=6 ? user.name : <>{user.name.slice(0,6)}...</>}
                  
                </a>
            </Link>
            <button onClick={logout} className="btn btn-sm bg-secondary border-none">
            
            Logout
          </button>
  </div>
          </div>
         </>}
   
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Nav;
