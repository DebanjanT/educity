import { useState, useContext, useRef, useEffect } from "react";
import axios from "axios";
import { Context } from "../context";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState("");
  const [newPassword, setnewPassword] = useState("");
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
      setLoading(false);
      setSuccess(true);
      toast.success("check your email for verification code");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error(err.response.data);
    }
  };

  //handle reset after success
  const handleForgotPassword = async(e) =>{
    e.preventDefault();
    try{
      setLoading(true);
      const {data} = await axios.post('/api/reset-password', {
        email,
        code,
        newPassword
      })
      setEmail("");
      setnewPassword("");
      setCode("");
      setSuccess(false);
      setLoading(false);
      toast.success("🔑 Awsome, now you can login with new password")


    }catch(err){
      console.log(err);
      setLoading(false)
      toast(err.response.data)
    }

  }

  return (
    <>
      <div>
        <form
          className="m-4 flex flex-col w-4/5 lg:w-1/2 mx-auto justify-center"
          onSubmit={success ? handleForgotPassword : handleSubmit}
        >
          <h3 className="text-gray-600 text-[20px] mb-3">Registered email : </h3>
          
          <input
            className="rounded-lg p-3 mr-0  border-2 text-gray-800 border-gray-200 bg-white mb-3"
            placeholder="your@mail.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {success && <>

            <h3 className="text-gray-600 text-[20px] mt-3 italic font-semibold">Reset Zone : </h3>
          
            <input
            className="rounded-lg p-3 mr-0  border-2 text-gray-800 border-gray-200 bg-white mt-2"
            placeholder="Reset Secret Code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
           <input
            className="rounded-lg p-3 mr-0  border-2 text-gray-800 border-gray-200 bg-white my-2"
            placeholder="Enter your new password"
            type="password"
            value={newPassword}
            onChange={(e) => setnewPassword(e.target.value)}
            required
          />
          
          </>}
          <button className="w-1/2 mx-auto py-3 shadow-sm rounded-lg bg-gradient-to-b from-coolGray-600 to-accent text-coolGray-50 hover:scale-105 hover:shadow-xl transition-all duration-200">
            {loading ?<svg xmlns="http://www.w3.org/2000/svg" className="mx-auto animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

            : "Reset Password"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;

