import { useRef, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Context } from "../../context";
import { useRouter } from "next/router";
import Link from "next/link";
import DrawerWrapper from "../../components/wrapperRoutes/DrawerWrapper";

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
    <DrawerWrapper>
      <div className="w-full sm:w-full md:w-1/2 m-auto mt-20 ">
        <form
          className="bg-white rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={loginSubmitHandler}
        >
          <h1 className="text-3xl font-semibold mb-8 text-accent">
            Welcome <span className="text-secondary">back</span> ❤️
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              ✉️ Email
            </label>
            <input
              className="input input-secondary input-bordered w-full"
              id="email"
              type="email"
              placeholder="email"
              required
              ref={emailRef}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              🔑 Password
            </label>
            <input
              className="input input-secondary input-bordered w-full"
              id="password"
              type="password"
              placeholder="******************"
              required
              ref={passRef}
            />
          </div>
          <div className="w-1/2 mx-auto p-2 card bordered mb-2">
            <div className="form-control">
              <label className=" label">
                <span className="label-text">Remember me</span>
                <input
                  type="checkbox"
                  checked="checked"
                  className="toggle toggle-primary"
                  disabled="disabled"
                />
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button className="btn glass text-accent" type="submit">
              Log In
            </button>
            <Link href="/forgot-password">
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Forgot Password?
              </a>
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs mb-6">
          &copy;Educity secure login policy
        </p>
      </div>
    </DrawerWrapper>
  );
};

export default Login;
