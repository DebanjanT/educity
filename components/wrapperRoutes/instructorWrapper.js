import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const InstructorWrapper = ({ children }) => {
  const [secure, setSecure] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  //make request to current user verify api
  const fetchInstructor = async () => {
    try {
      const { data } = await axios.get("/api/current-instructor");

      if (data.secure) {
        setSecure(true);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setSecure(false);
      router.push("/login");
    }
  };
  useEffect(() => {
    fetchInstructor();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <div className="flex items-center justify-center space-x-2 mt-6 min-h-screen">
            <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>

            <h3>Security Checking...</h3>
          </div>
        </>
      ) : (
        secure && <>{children}</>
      )}
    </>
  );
};
export default InstructorWrapper;
