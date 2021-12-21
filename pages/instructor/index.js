import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import InstructorWrapper from "../../components/wrapperRoutes/instructorWrapper";
import { Context } from "../../context";
import InstructorNav from "../../components/instructor_nav";

const instructorDashboard = () => {
  const router = useRouter();

  const { state: user } = useContext(Context);
  //preventing not loggeding user to rediirect
  useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  return (
    <InstructorWrapper>
      <InstructorNav />
      <div class="text-sm breadcrumbs w-4/5 mx-auto flex justify-center   ">
        <ul>
          <li className="text-secondary">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Instructor Dashboard
            </a>
          </li>
        </ul>
      </div>
    </InstructorWrapper>
  );
};

export default instructorDashboard;
