import { toast } from "react-toastify";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../../context";
import { useRouter } from "next/router";

const becomeInstructor = () => {
  const [loading, setLoading] = useState(false);
  const context = useContext(Context);
  const { state, dispatch } = context;
  const { user } = state;

  const router = useRouter();

  // hit  make instructor edpoint
  const becomeInstructorHandle = () => {
    setLoading(true);
    axios
      .post("/api/make-instructor")
      .then((res) => {
        //saving updated user data to context
        // dispatch({
        //   type: "LOGIN",
        //   payload: res.data,
        // });

        window.location.href = res.data;
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error("Oops! something went wrong");
        setLoading(false);
      });
  };

  return (
    <>
      <div className="w-full  flex flex-col lg:flex-row justify-around    items-center align-center px-0 lg:px-10 ">
        <div className="flex-1 text-center text-2xl lg:text-3xl mt-10 lg:mt-0 font-bold ">
          <code className="bg-clip-text bg-gradient-to-r from-accent to-purple-800 text-transparent">
            Become Educity Instructor
          </code>
          <p className="font-normal text-sm mt-3 ">
            🔑 Secure Stripe Payment gateway{" "}
          </p>
        </div>
        <div className="card rounded-none  w-full md:max-w-lg mx-auto shadow-none  lg:shadow-2xl bg-base-100 my-10 overflow-visible">
          <div className="card-body">
            <p>
              By doing the setup of Instructor account, you agree to our{" "}
              <code className="text-secondary font-semibold">
                Instructor policy{" "}
              </code>{" "}
              +{"  "}
              <code className="text-secondary font-semibold ml-1">
                {" "}
                API Security Policy
              </code>
            </p>
            <div className="form-control mt-6">
              <button
                type="button"
                onClick={becomeInstructorHandle}
                className="btn btn-primary normal-case shadow transition-all hover:scale-105 duration-300 hover:bg-gradient-to-tr hover:from-secondary hover:to-primary hover:text-coolGray-50"
              >
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
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>{" "}
                {loading ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto animate-spin h-6 w-6 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </>
                ) : (
                  "Setup onboarding account"
                )}
              </button>
            </div>
          </div>

          <img className="grayscale contrast-125" src="/assets/stripe.png" />
        </div>
      </div>
    </>
  );
};

export default becomeInstructor;
