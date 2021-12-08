import { toast } from "react-toastify";

const becomeInstructor = () => {
  const becomeInstructorHandle = () => {
    toast.warning("Under development ! Hold on");
  };
  return (
    <>
      <div className="w-full  flex flex-col lg:flex-row justify-around    items-center align-center px-0 lg:px-10 ">
        <div className="flex-1 text-center text-2xl lg:text-3xl mt-10 lg:mt-0 font-bold ">
          <code className="bg-clip-text bg-gradient-to-r from-purple-500 to-purple-800 text-transparent">
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
                Setup Instructor Account
              </button>
            </div>
          </div>

          <img
            className="rounded-none md:rounded-lg  lg:-rotate-6"
            src="/assets/stripe.png"
          />
        </div>
      </div>
    </>
  );
};

export default becomeInstructor;
