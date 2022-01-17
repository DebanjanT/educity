import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import InstructorWrapper from "../../components/wrapperRoutes/instructorWrapper";
import { Context } from "../../context";
import InstructorNav from "../../components/instructor_nav";
import axios from "axios";
import Link from "next/link";
import Footer from "../../components/footer";
import DrawerWrapper from "../../components/wrapperRoutes/DrawerWrapper";
import moment from "moment";

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
      <DrawerWrapper>
        <InstructorNav />

        {/* <pre>{JSON.stringify(courses, null, 4)}</pre> */}
        {/* course single ui */}
        <div className="w-full lg:w-4/5 mx-auto mb-6 flex justify-center">
          <h3 className="text-lg font-semibold flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            Instructor Courses
          </h3>
        </div>
        <div className="w-4/5 mx-auto grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {courses ? (
            courses.map((course) => (
              <a
                key={course.slug}
                className="flex-shrink-0 w-full mx-auto group hover:no-underline focus:no-underline dark:bg-white rounded-md shadow  transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {course.image && course.image.Location && (
                  <img
                    role="presentation"
                    className="object-cover w-full rounded-t-md h-44 dark:bg-coolGray-500"
                    src={course.image.Location}
                  />
                )}

                <div className="p-6 space-y-2">
                  <h3 className="text-sm font-semibold  group-focus:underline">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 pb-4 text-sm ">
                    {moment(course.createdAt).format(
                      "dddd, MMMM Do YYYY, h:mm:ss a"
                    )}
                  </p>

                  {/* <p className="text-gray-600">{course.description}</p> */}
                  <div className="flex justify-end mt-4">
                    {course.lessons.length < 1 ? (
                      <p className="text-red-500 text-xs">
                        You need atleast 1 lesson to publish your course
                      </p>
                    ) : course.published ? (
                      <p className="text-gray-100 bg-red-500 text-sm text-center my-auto py-1 px-2 rounded-full flex align-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                        Already Live
                      </p>
                    ) : (
                      <a className="text-green-500 text-xs font-semibold">
                        Your course is ready to publish and put it live on
                        educity
                      </a>
                    )}
                    <Link href={`/instructor/course/view/${course.slug}`}>
                      <a className="bg-primary hover:bg-primary/70 text-accent py-1 px-3 text-sm rounded-md ml-2 cursor-pointer">
                        View
                      </a>
                    </Link>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <>
              <Link href="/instructor/course/create">
                <div
                  className="w-full mx-auto cursor-pointer tooltip tooltip-bottom lg:tooltip"
                  data-tip="Create New Course"
                >
                  <div className="border-2 border-dashed hover:border-accent group rounded-lg w-52 h-60 mx-auto flex flex-col justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500 mb-1 group-hover:text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-gray-500 group-hover:text-secondary">
                      Add Course
                    </p>
                  </div>
                </div>
              </Link>
            </>
          )}
        </div>
      </DrawerWrapper>
    </InstructorWrapper>
  );
};

export default instructorDashboard;
