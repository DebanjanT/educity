import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import InstructorWrapper from "../../components/wrapperRoutes/instructorWrapper";
import { Context } from "../../context";
import InstructorNav from "../../components/instructor_nav";
import axios from "axios";
import Link from "next/link";

const instructorDashboard = () => {
  const router = useRouter();

  const { state: user } = useContext(Context);
  const [courses, setCourses] = useState([]);
  const [imgLoading, setImgLoading] = useState(true);

  //fetching courses from api
  const loadCourses = async () => {
    const { data } = await axios.get("/api/course/get-instructor-courses");
    setCourses(data);
    // console.log(data);
  };

  //preventing not loggeding user to rediirect
  useEffect(() => {
    if (user == null) router.push("/");
    loadCourses();
  }, [user]);

  return (
    <InstructorWrapper>
      <InstructorNav />
      <div className="text-sm breadcrumbs w-4/5 mx-auto flex justify-center   ">
        <ul>
          <li className="text-secondary">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Instructor Dashboard
            </a>
          </li>
        </ul>
      </div>

      {/* <pre>{JSON.stringify(courses, null, 4)}</pre> */}
      {/* course single ui */}
      {courses &&
        courses.map((course) => (
          <div className="" key={course.slug}>
            <div className="w-4/5 mx-auto card lg:card-side border-2 mb-2">
              {/* {course.image && (
                <>
                  <div className="my-auto mx-auto object-contain">
                    <figure className="">
                      <img
                        className="rounded-lg w-full h-60 aspect-auto object-fill ml-0 lg:ml-3 shadow-lg"
                        src={course.image.Location}
                      />
                    </figure>
                  </div>
                </>
              )} */}
              <div className="card-body">
                <Link href={`/instructor/course/view/${course.slug}`}>
                  <h2 className="card-title cursor-pointer hover:underline">
                    {course.title}
                    <div className="badge mx-2">
                      {" "}
                      {course.paid ? <>₹ {course.price}</> : "Free"}
                    </div>
                  </h2>
                </Link>
                <h4 className="mb-2 text-secondary">
                  {course.lessons.length} lessons{" "}
                </h4>
                <p className="text-gray-500 text-sm">{course.description}</p>
                <div className="card-actions flex align-center items-center">
                  {course.lessons.length < 1 ? (
                    <p className="text-red-500 text-sm">
                      You need atleast 1 lesson to publish your course
                    </p>
                  ) : course.published ? (
                    <p className="text-blue-500 font-semibold text-sm">
                      Your course is already live on educity
                    </p>
                  ) : (
                    <button className="btn btn-primary">Publish Course</button>
                  )}
                  <button className="px-3 py-2 border-2 rounded-lg flex">
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
                        strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>{" "}
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </InstructorWrapper>
  );
};

export default instructorDashboard;
