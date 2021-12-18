import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import InstructorWrapper from "../../components/wrapperRoutes/instructorWrapper";
import { Context } from "../../context";

const instructorDashboard = () => {
  const router = useRouter();

  const { state: user } = useContext(Context);
  //preventing not loggeding user to rediirect
  useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  return (
    <InstructorWrapper>
      <div>ddsadsa</div>
    </InstructorWrapper>
  );
};

export default instructorDashboard;
