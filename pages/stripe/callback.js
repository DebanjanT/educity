import axios from "axios";
import { useEffect, useContext } from "react";
import { Context } from "../../context";

const StripeCallback = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  useEffect(() => {
    if (user) {
      axios
        .post("/api/get-account-status")
        .then((res) => {
          // console.log(res);
          //saving updated user data to context
          dispatch({
            type: "LOGIN",
            payload: res.data,
          });
          window.location.href = "/instructor";
        })
        .catch((err) => {
          console.log("get stripe status errr", err);
        });
    }
  }, [user]);

  return (
    <div className="min-h-screen ">
      <div className="container flex flex-col align-center items-center justify-center mx-auto">
        <div class="alert alert-info mt-6">
          <div class="flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 mx-2 stroke-current animate-bounce"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <label>
              Almost done! We are connecting to stripe for confirmation
            </label>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-40 w-40 text-secondary animate-spin mt-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          />
        </svg>

        <h3 className="mt-6 text-xl">🔓 Checking your Stripe account...</h3>
      </div>
    </div>
  );
};

export default StripeCallback;
