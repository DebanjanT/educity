import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../../context";
import Image from "next/image";

export default function Signup() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const PasswordRef = useRef();

  //usecontext
  const context = useContext(Context);
  const {
    state: { user },
  } = context;

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const registerFormSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const password = PasswordRef.current.value;
      const { data } = await axios.post("/api/register", {
        name,
        email,
        password,
      });
      toast.success(`Registration success for ${name}`, {
        theme: "dark",
      });
      setLoading(false);
      router.replace("/");
    } catch (err) {
      toast.error(err.response.data, {
        theme: "dark",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 mx-auto">
          <div className="flex flex-col justify-center items-center align-center">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Register Your Account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                <span className="text-blue-500 font-semibold cursor-pointer">
                  Login
                </span>
              </Link>
            </p>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={registerFormSubmitHandler}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Enter Your Name"
                  ref={nameRef}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  ref={emailRef}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  ref={PasswordRef}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center"></div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={
                  loading
                    ? "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 focus:outline-none   "
                    : "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none   "
                }
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {" "}
                </span>
                {loading ? "Please Wait..." : "Create Account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
