import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const InstructorWrapper = ({ children }) => {
  const [secure, setSecure] = useState(false);
  const router = useRouter();
  //make request to current user verify api
  const fetchInstructor = async () => {
    try {
      const { data } = await axios.get("/api/current-instructor");

      if (data.secure) {
        setSecure(true);
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

  return <>{secure && <>{children}</>}</>;
};
export default InstructorWrapper;
