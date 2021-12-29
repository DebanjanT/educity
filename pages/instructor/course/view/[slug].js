import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import InstructorNav from "../../../../components/instructor_nav";
import InstructorWrapper from "../../../../components/wrapperRoutes/instructorWrapper";
import AddLessonForm from "../../../../components/form/addLessonForm";

const CourseView = () => {
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState({
    title: "",
    content: "",
    video: "",
  });

  const [uploading, setUploading] = useState(false);
  const router = useRouter();
  const { slug } = router.query;
  const modalClick = () => {
    console.log(`Modal Clicked for ${slug} `);
  };

  //fetch course from backed using slug
  useEffect(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`/api/course/${slug}`);
      setCourse(data);
      setLoading(false);
      //   console.log(data);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, [slug]);

  const handleAddLesson = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <InstructorWrapper>
      <InstructorNav />
      {loading ? (
        "Loading..."
      ) : (
        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
          <article className="space-y-8 ">
            {/* <div>
              <img
                className="w-full h-72 rounded-xl shadow-xl"
                src={course.image.Location}
              />
            </div> */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl text-accent">
                {course.title}
              </h1>
              <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-coolGray-400">
                <div className="flex items-center md:space-x-2">
                  <img
                    src="https://source.unsplash.com/75x75/?portrait"
                    alt=""
                    className="w-4 h-4 border rounded-full dark:bg-coolGray-500 dark:border-coolGray-700"
                  />
                  <p className="text-sm">
                    {course.instructor.name} • {course.createdAt}
                  </p>
                </div>
              </div>
            </div>
            <div className="dark:text-coolGray-500">
              <p>{course.description}</p>
            </div>
          </article>
          <div>
            <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-coolGray-400">
              <p className="px-3 py-1 rounded-md hover:underline bg-primary text-accent">
                #{course.category}
              </p>
              <p className="px-3 py-1 rounded-md hover:underline bg-accent text-primary">
                {course.lessons.length} Lessons
              </p>

              {/* Add Lession Modal */}
              <div>
                <label
                  for="add-lesson-modal"
                  className="border-2 flex align-center items-center text-accent py-1 rounded-md px-2 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Add Lesson
                </label>
                <input
                  type="checkbox"
                  id="add-lesson-modal"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box overflow-scroll">
                    <AddLessonForm
                      handleAdd={handleAddLesson}
                      values={values}
                      setValues={setValues}
                      uploading={uploading}
                      course={course}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <pre>{JSON.stringify(course, null, 4)}</pre> */}
    </InstructorWrapper>
  );
};
export default CourseView;
