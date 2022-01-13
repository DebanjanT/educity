import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import InstructorNav from "../../../../components/instructor_nav";
import InstructorWrapper from "../../../../components/wrapperRoutes/instructorWrapper";
import AddLessonForm from "../../../../components/form/addLessonForm";
import { toast } from "react-toastify";
import ReactPlayer from "react-player";
import DrawerWrapper from "../../../../components/wrapperRoutes/DrawerWrapper";
import moment from "moment";

const CourseView = () => {
  const [course, setCourse] = useState();
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState({
    title: "",
    content: "",
    video: {},
  });
  const [uploading, setUploading] = useState(false);
  const [uploadVideoText, setUploadVideoText] = useState("Upload lesson video");
  const [uploadProgress, setProgress] = useState(0);

  const router = useRouter();
  const { slug } = router.query;

  //fetch course from backed using slug
  useEffect(async () => {
    let isCancelled = false;
    try {
      if (!isCancelled) {
        setLoading(true);
        loadSingleCourse();
      }
    } catch (err) {
      console.log(err);
    }
    return () => {
      isCancelled = true;
    };
  }, [slug]);

  //fetching single course by using slug as params
  const loadSingleCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    setCourse(data);
    setLoading(false);
    //   console.log(data);
  };

  //handle lesson video upload to s3
  const handleLessonVideo = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) {
        setUploadVideoText("Upload lesson video");
      } else {
        setUploadVideoText(`Uploading ${file.name}`);
        setUploading(true);
        //send video as form data
        const lessonVideo = new FormData();
        lessonVideo.append("lessonVideo", file);

        //send video to api with pogress trackig by axios
        const { data } = await axios.post(
          `/api/course/lesson-video-upload/${course.instructor._id}`,
          lessonVideo,
          {
            onUploadProgress: (e) => {
              setProgress(Math.round((100 * e.loaded) / e.total));
            },
          }
        );

        //successful response back
        // console.log(data);
        setValues({ ...values, video: data });
        setUploadVideoText(`Uploaded ${file.name}`);
        setUploading(false);
      }
    } catch (err) {
      console.log(err);
      setUploading(false);
      toast.error("Video Upload Failed, Please try again");
    }
  };

  //handle video remove from s3
  const handleRemoveLessonVideo = async () => {
    try {
      setUploading(true);
      const { data } = await axios.post(
        `/api/course/lesson-video-remove/${course.instructor._id}`,
        values.video
      );
      setUploading(false);
      setValues({ ...values, video: {} });
      setUploadVideoText("Upload Lesson Video");
      setProgress(0);
    } catch (err) {
      console.log(err);
      setUploading(false);

      toast.error("Video remove fail");
    }
  };

  //handle publish the course
  const handleUnpublish = async (e) => {
    try {
      e.preventDefault();
      const answer = window.confirm(
        "Your course will be unpublished. It will be removed from educity marketplace and users cannot enroll"
      );
      if (!answer) return toast.info("Course is still live on marketplace");
      const { data } = await axios.put(`/api/course/unpublish/${course._id}`);
      setCourse(data);
      toast.success("Course Successfully unublished");
    } catch (err) {
      console.log(err);
      toast.error("Cannot unpublish, try again later");
    }
  };

  const handlePublish = async (e) => {
    try {
      e.preventDefault();
      const answer = window.confirm(
        "Your course will be published. It will go live on educity marketplace and users to enroll"
      );
      if (!answer) return toast.info("Course was not published");

      //send request to api to update published
      const { data } = await axios.put(`/api/course/publish/${course._id}`);
      setCourse(data);
      toast.success("Course Successfully Published");
    } catch (err) {
      console.log(err);
      toast.error("Cannot publish, please try again later");
    }
  };

  //handle overall lesson add form submit
  const handleAddLesson = async (e) => {
    setUploading(true);
    try {
      e.preventDefault();
      const { data } = await axios.post(
        `/api/course/add-lesson/${slug}/${course.instructor._id}`,
        values
      );
      setValues({ ...values, title: "", content: "", video: {} });
      router.push("/instructor");
      setUploadVideoText("Upload Lesson Video");
      setCourse(data);
      setUploading(false);
      setProgress(0);
      toast.success(`Lesson added to ${course.title}`);
    } catch (err) {
      console.log(err);
      toast.error("Failed to create course");
      setUploading(false);
    }
  };

  return (
    <InstructorWrapper>
      <DrawerWrapper>
        {loading ? (
          <>
            <div className="flex items-center justify-center space-x-2 mt-6 min-h-screen">
              <div className="w-8 h-8 rounded-full animate-pulse bg-primary"></div>
              <div className="w-8 h-8 rounded-full animate-pulse bg-primary"></div>
              <div className="w-8 h-8 rounded-full animate-pulse bg-primary"></div>
            </div>
            <h3 className="ml-3">Loading ${slug}...</h3>
          </>
        ) : (
          <>
            {" "}
            <InstructorNav />
            {course && (
              <>
                {/* <pre>{JSON.stringify(course, null, 4)}</pre> */}

                <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
                  <article className="space-y-8 ">
                    <div>
                      {course.image && course.image.Location && (
                        <img
                          className="w-full h-72 rounded-xl shadow-xl"
                          src={course.image.Location}
                        />
                      )}
                    </div>
                    <div className="space-y-6">
                      <div className="flex justify-between">
                        <h1 className="text-lg font-bold md:tracking-tight  text-accent">
                          {course.title}
                        </h1>
                      </div>

                      <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-coolGray-400">
                        <div className="flex items-center md:space-x-2">
                          <img
                            src="https://source.unsplash.com/75x75/?portrait"
                            alt=""
                            className="w-4 h-4 border rounded-full dark:bg-coolGray-500 dark:border-coolGray-700"
                          />
                          <p className="text-sm">
                            {course.instructor.name} •{" "}
                            {moment(course.createdAt).format(
                              "dddd, MMMM Do YYYY, h:mm:ss a"
                            )}{" "}
                            •
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="dark:text-coolGray-500">
                      <p>{course.description}</p>
                    </div>
                  </article>
                  <div>
                    <div className="flex flex-wrap justify-center py-6 space-x-2 border-t border-b border-dashed dark:border-coolGray-400 mb-3">
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
                          className="border-2 flex align-center items-center text-accent py-1 rounded-md px-2 cursor-pointer shadow-inner"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Add Lesson
                        </label>
                        <input
                          type="checkbox"
                          id="add-lesson-modal"
                          className="modal-toggle "
                        />
                        <div className="modal">
                          <div className="modal-box overflow-scroll">
                            <AddLessonForm
                              handleAdd={handleAddLesson}
                              values={values}
                              setValues={setValues}
                              uploading={uploading}
                              course={course}
                              uploadVideoText={uploadVideoText}
                              handleLessonVideo={handleLessonVideo}
                              uploadProgress={uploadProgress}
                              handleRemoveLessonVideo={handleRemoveLessonVideo}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row justify-center items-center align-center">
                      <p
                        className=" mr-0  lg:mr-2 flex flex-shrink-0 w-40 justify-center align-center items-center text-sm  px-2 py-1 rounded-xl bg-blue-500 text-gray-50 cursor-pointer tooltip lg:tooltip-bottom"
                        data-tip="Edit Course"
                        onClick={() =>
                          router.push(`/instructor/course/edit/${slug}`)
                        }
                      >
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Edit this course
                      </p>
                      <p
                        className="mt-2 lg:mt-0 flex flex-shrink-0 w-52 justify-center align-center items-center text-sm  px-2 py-1 rounded-xl bg-red-400 text-gray-50 cursor-pointer tooltip  lg:tooltip-bottom"
                        data-tip="Delete Course"
                        onClick={() => alert("DEL COURSE")}
                      >
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Delete this course
                      </p>

                      {course.lessons &&
                        course.lessons.length >= 1 &&
                        (course.published ? (
                          <p
                            className="btn btn-sm  ml-0 lg:ml-2 mt-2 lg:mt-0 shadow-md shadow-accent normal-case"
                            data-tip="Ready to publish"
                            onClick={(e) => handleUnpublish(e)}
                          >
                            {" "}
                            Unpublish
                          </p>
                        ) : (
                          <p
                            className="btn btn-sm bg-white  hover:bg-gray-100 hover:border-green-500 text-green-600  ml-0 lg:ml-2 mt-2 lg:mt-0 shadow-md border-green-500 shadow-green-500 "
                            data-tip="Ready to publish"
                            onClick={(e) => handlePublish(e)}
                          >
                            {" "}
                            Publish
                          </p>
                        ))}
                    </div>
                  </div>
                </div>

                {/* lesson list */}
                {course.lessons && course.lessons.length > 0 && (
                  <>
                    <div className="w-1/2 mx-auto text-lg font-semibold text-secondary">
                      {course.lessons.length} Lessons
                    </div>
                    <div>
                      {course.lessons.map((lesson, i) => (
                        <div
                          className="collapse w-full lg:w-1/2 mx-auto border rounded  border-base-300 collapse-arrow mt-2  backdrop-blur-3xl"
                          key={i}
                        >
                          <input type="checkbox" />
                          <div className="collapse-title text-md  text-accent font-medium flex align-center items-center">
                            {i + 1}: {lesson.title}{" "}
                            <span
                              className="tooltip tooltip-right"
                              data-tip="Include Video"
                            >
                              {lesson.video && lesson.video.Location && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-7 w-7 text-gray-100 bg-blue-500 mx-2 rounded-full px-1 "
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                </svg>
                              )}
                            </span>
                          </div>
                          <div className="collapse-content text-gray-800">
                            {lesson && lesson.video && lesson.video.Location && (
                              <div className="shadow-xl  mt-2">
                                <ReactPlayer
                                  url={lesson.video.Location}
                                  width="100%"
                                  height="100%"
                                  config={{
                                    youtube: {
                                      playerVars: { showinfo: 1 },
                                    },
                                  }}
                                  controls
                                />
                              </div>
                            )}
                            <p>{lesson.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </>
        )}
      </DrawerWrapper>
    </InstructorWrapper>
  );
};
export default CourseView;
