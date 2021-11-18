import { useRef, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Context } from "../../context";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const emailRef = useRef();
  const passRef = useRef();
  //context state
  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  //redirect for already logged in user
  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);
  //form submit
  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;

    try {
      const { data } = await axios.post("/api/login", {
        email,
        password,
      });
      toast.success(`Logged in as ${email}`, {
        theme: "dark",
      });
      //updating context state with reducer dispatch
      dispatch({
        type: "LOGIN",
        payload: data,
      });

      //saving user_data to local storage
      window.localStorage.setItem("user", JSON.stringify(data));

      //redirect user
      router.push("/");
    } catch (err) {
      toast.error(err.response.data, {
        theme: "dark",
      });
    }
  };
  return (
    <div className="w-full sm:w-full md:w-1/2 m-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={loginSubmitHandler}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
            placeholder="email"
            required
            ref={emailRef}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow  border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            required
            ref={passRef}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2021 Educity . All rights reserved.
      </p>
    </div>
  );
};

export default Login;
