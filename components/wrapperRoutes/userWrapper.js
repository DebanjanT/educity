import { useEffect, useState } from "react";
import axios from "axios";

const UserWrapper = ({ children }) => {
  const [secure, setSecure] = useState(false);
  //make request to current user verify api
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/current-user");
      if (data.secure) setSecure(true);
    } catch (err) {
      console.log(err);
      setSecure(false);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return <>{secure && <>{children}</>}</>;
};
export default UserWrapper;
