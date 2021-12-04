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
          <a className="btn btn-ghost btn-sm rounded-btn">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            Likes
          </a>
          {/* modal */}
         
          <label for="modal1" className="btn btn-primary modal-button">open modal</label> 
            <input type="checkbox" id="modal1" className="modal-toggle"/>
          <div id="modal1" className="modal z-50">
          <div className="modal-box">
            <p className="text-accent">Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p> 
            <div className="modal-action">
              
          <a className="btn btn-primary">Verify</a>
          
          <label for="modal1" className="btn">Later</label>
                    </div>
                  </div>
          </div>
          
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
          <button tabindex="0" className="m-1 btn btn-sm rounded-btn">My Account</button> 
          <div tabindex="0" className="p-1 shadow menu dropdown-content bg-base-100 rounded w-40">
          <Link href="/user">
              <a className="btn btn-ghost btn-sm rounded-btn text-accent mb-1 ">
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
                  {user.name}
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
