import { useState, useContext, useRef, useEffect } from "react";
import axios from "axios";
import { Context } from "../context";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(true);
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //router
  const router = useRouter();

  //context
  const {
    state: { user },
  } = useContext(Context);

  useEffect(() => {
    if (user !== null) {
      router.push("/");
    }
  }, [user]);

  //handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("/api/forgot-password", { email });
      setSuccess(true);
      toast("check your email for verification code");
    } catch (err) {
      console.log(err);
      toast(err.response.data);
    }
  };

  return (
    <>
      <div>
        <form
          className="m-4 flex flex-col w-1/2 mx-auto justify-center"
          onSubmit={handleSubmit}
        >
          <input
            className="rounded-lg p-3 mr-0  border-2 text-gray-800 border-gray-200 bg-white"
            placeholder="your@mail.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {success && "Show othe two options"}
          <button className="w-1/2 mx-auto px-3 text-md rounded-lg bg-blue-500  text-gray-100 font-bold  border-blue-500 border-t border-b border-r">
            {loading ? "Stay tuned ..." : "Reset Password"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
