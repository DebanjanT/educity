import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import InstructorWrapper from "../../../components/wrapperRoutes/instructorWrapper";
import { Context } from "../../../context";

const createCourse = () => {
  const router = useRouter();

  const { state: user } = useContext(Context);
  //preventing not loggeding user to rediirect
  useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  return <InstructorWrapper>Create New course</InstructorWrapper>;
};

export default createCourse;
