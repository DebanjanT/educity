import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import InstructorWrapper from "../../../../components/wrapperRoutes/instructorWrapper";
import { Context } from "../../../../context";
import InstructorNav from "../../../../components/instructor_nav";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import { toast } from "react-toastify";
import UpdateCourseForm from "../../../../components/form/updateCourseForm";
import UpdateLessonForm from "../../../../components/form/updateLessonForm";

const EditCourse = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [drag, setDrag] = useState(false);

  const {
    state: { user },
  } = useContext(Context);

  const [loading, setLoading] = useState(true);

  //state for lesson update
  const [currentLesson, setCurrentLesson] = useState({});
  const [updatingLesson, setUpdatingLesson] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadVideoText, setUploadVideoText] = useState("Upload Video");

  //course details structure , defining default values
  const [values, setValues] = useState({});

  //to display image preview
  const [imgPreview, setImgPreview] = useState("");

  //image state for storing resized image
  const [image, setImage] = useState({});

  useEffect(() => {
    loadCourse();
  }, [slug]);

  //fetch single course
  const loadCourse = async () => {
    setLoading(true);
    const { data } = await axios.get(`/api/course/${slug}`);

    setValues(data);
    if (data && data.image) {
      setImage(data.image);
      setImgPreview(data.image.Location);
    }
    setLoading(false);
  };

  //handling value changes on form
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //handle image upload from form, resize, and upload to aws s3
  const handleImageUpload = (e) => {
    let user_uploaded_image = e.target.files[0];
    setImgPreview(window.URL.createObjectURL(user_uploaded_image));
    setValues({ ...values, loading: true });

    //resizing image from client side
    Resizer.imageFileResizer(
      user_uploaded_image,
      720,
      500,
      "JPEG",
      100,
      0,
      async (uri) => {
        try {
          const { data } = await axios.post("/api/course/image-upload", {
            image: uri,
          });
          setImage(data);
          // setImgPreview(data);
          // console.log(uploadProgress);
          setValues({ ...values, loading: false });
          console.log(data);
        } catch (err) {
          console.log(err);
          setValues({ ...values, loading: false });
          toast.error("Image upload failed! Contact suppot team ❤️");
        }
      }
    );
  };

  //send an api request to backend
  //with current image state
  //find image at aws with Key
  //remove and send respnse
  const removeCourseImage = async () => {
    try {
      setValues({ ...values, loading: true });
      const { data } = await axios.post("/api/course/image-remove", { image });
      setImage({});
      setImgPreview("");
      setValues({ ...values, loading: false });
    } catch (err) {
      console.log(err);
      setValues({ ...values, loading: false });
      toast.error("Problem removing image , Contact Support");
    }
  };

  //logic of saving draggable items
  //1.set item index that has been moved
  //2.Drop: get the moved item index from event
  //3.save target index in a const
  //4.

  //handle drag
  const handleDrag = (e, i) => {
    // console.log("ON DRAG ==>", i);
    //set index at event data transfer
    e.dataTransfer.setData("itemIndex", i);
    setDrag(true);
  };

  const handleDrop = async (e, i) => {
    // console.log("ON DROP ==>", i);
    try {
      const movingItemIndex = e.dataTransfer.getData("itemIndex");
      const targetIndex = i;
      let allLessons = values.lessons;
      console.log(targetIndex);
      console.log(movingItemIndex);

      if (targetIndex != movingItemIndex) {
        let movingLesson = allLessons[movingItemIndex];
        allLessons.splice(movingItemIndex, 1);
        allLessons.splice(targetIndex, 0, movingLesson);

        //saving reordered lessons inside state
        setValues({ ...values, lessons: [...allLessons] });
        setDrag(false);

        // send api to update course

        const { data } = await axios.put(`/api/course/update-course/${slug}`, {
          ...values,
          image,
        });
        setDrag(false);
        toast.success("Lesson re-arranged");
      } else {
        setDrag(false);
        toast.info("Nothing re-ordered");
      }
    } catch (err) {
      console.log(err);
      toast.error("Unable to save re-arrangement");
    }
  };

  //handle Lesson Delete
  const handleLessonDelete = async (i) => {
    try {
      const confirm = window.confirm(`You want to delete No:${i + 1} lesson`);
      if (confirm) {
        let allLessons = values.lessons;
        const removed_lesson = allLessons.splice(i, 1);
        setValues({ ...values, lessons: allLessons });

        //send put request with course slug & removed lesson id
        const { data } = await axios.put(
          `/api/course/remove-lesson/${slug}/${removed_lesson[0]._id}`
        );
        console.log("After delete lesson =>", data);

        toast.success("Lesson deleted from course", {
          theme: "dark",
        });
      } else {
        toast.info("No Change", {
          theme: "dark",
        });
      }
    } catch (err) {
      toast.error("Something went wrong from client");
    }
  };

  //handle video update for lesson update
  const handleLessonVideoUpload = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) {
        setUploadVideoText("Upload lesson video");
      } else {
        setUploadVideoText(`Uploading ${file.name}`);
        setUpdatingLesson(true);
        //send video as form data
        const lessonVideo = new FormData();
        lessonVideo.append("lessonVideo", file);

        //send video to api with pogress trackig by axios
        const { data } = await axios.post(
          `/api/course/lesson-video-upload/${values.instructor._id}`,
          lessonVideo,
          {
            onUploadProgress: (e) => {
              setProgress(Math.round((100 * e.loaded) / e.total));
            },
          }
        );

        //successful response back
        // console.log(data);
        setCurrentLesson({ ...currentLesson, video: data });
        setUploadVideoText(`Uploaded ${file.name}`);
        setUpdatingLesson(false);
      }
    } catch (err) {
      console.log(err);
      setUpdatingLesson(false);
      toast.error("Video Upload Failed, Please try again");
    }
  };

  const handleLessonVideoDelete = async () => {
    try {
      setUpdatingLesson(true);
      const { data } = await axios.post(
        `/api/course/lesson-video-remove/${values.instructor._id}`,
        currentLesson.video
      );
      setUpdatingLesson(false);
      setCurrentLesson({ ...currentLesson, video: {} });
      setUploadVideoText("Upload Lesson Video");
      setProgress(0);
    } catch (err) {
      console.log(err);
      setUpdatingLesson(false);

      toast.error("Video remove fail");
    }
  };
  //handle update lesson
  const handleUpdateLesson = async (e) => {
    try {
      e.preventDefault();
      setUpdatingLesson(true);
      //send put request to Update the lesson
      const { data } = await axios.put(
        `/api/course/update-lessons/${slug}/${currentLesson._id}`,
        currentLesson
      );
      setUpdatingLesson(false);

      if (data.updated) {
        //find the index of the lesson from array to change the ui
        let arr = values.lessons;
        //find the index that matches current lesson id
        let index = arr.findIndex((el) => el._id === currentLesson._id);
        arr[index] = currentLesson;
        setValues({ ...values, lessons: arr });
        toast.success("Lesson Updated", { theme: "dark" });
      }
    } catch (err) {
      console.log(err);
      toast.error("Opps! Error updating Lesson", { theme: "dark" });
    }
  };

  //handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/course/update-course/${slug}`, {
        ...values,
        image,
      });
      router.push("/instructor");
      toast.success(`${slug} updated`);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  return (
    <InstructorWrapper>
      <InstructorNav />
      {values && (
        <>
          <div className="text-sm breadcrumbs w-4/5 mx-auto flex justify-center -mt-3">
            <ul>
              <li>
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

              <li className="text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                Update {slug}
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h1 className="text-center mt-16 mb-3 text-xl  text-accent font-semibold">
              Update {values.title}
            </h1>

            {/* course creation form */}
            <div className="w-full lg:w-4/5 mx-auto">
              <div className=" ">
                <p className="text-gray-500">
                  Some fields are not editable due to security reasons
                </p>
              </div>
              {/* course creation form component */}

              <UpdateCourseForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleImageUpload={handleImageUpload}
                values={values}
                setValues={setValues}
                imgPreview={imgPreview}
                image={image}
                removeCourseImage={removeCourseImage}
                loading={loading}
              />

              {values.lessons && values.lessons.length > 0 && (
                <>
                  <div className="w-full lg:w-4/5 mx-auto border-t-2 border-dashed my-6"></div>

                  <div className="w-1/2 mx-auto text-md font-semibold text-secondary mb-4">
                    Update or Reorder Lessons
                    <div className="dropdown dropdown-right text-accent   ">
                      <div
                        tabindex="0"
                        className="btn btn-circle btn-ghost btn-xs text-info"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline w-5 h-5 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                      <div
                        tabindex="0"
                        className="shadow-lg card compact dropdown-content bg-accent  rounded-box w-40"
                      >
                        <div className="card-body">
                          <p className="text-gray-200 text-xs">
                            Drag lessons up/down to re-order
                          </p>
                        </div>
                      </div>
                    </div>
                    {drag && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8  w-8 text-accent animate-spin"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>

                  <div onDragOver={(e) => e.preventDefault()}>
                    {values.lessons.map((lesson, i) => (
                      <div
                        draggable={true}
                        onDragStart={(e) => handleDrag(e, i)}
                        onDrop={(e) => handleDrop(e, i)}
                        className=" collapse w-full lg:w-1/2 mx-auto border rounded  border-base-300 collapse-arrow mt-2  backdrop-blur-3xl group-hover:bg-black"
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
                          <p>{lesson.content}</p>
                        </div>
                        <div className="flex justify-center bg-gray-700 py-1 group">
                          <div
                            className="flex justify-center items-center align-center cursor-pointer"
                            onClick={() => handleLessonDelete(i)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-red-400"
                              data-tip="delete"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                            <p className="text-sm text-gray-200">Delete</p>
                          </div>
                          <div className="divider divider-vertical"></div>
                          <div className="flex justify-center items-center align-center cursor-pointer z-50 overflow-visible">
                            <label
                              for="lessonUpdateModal"
                              className="btn btn-xs btn-primary modal-button"
                              onClick={() => setCurrentLesson(lesson)}
                            >
                              Update
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {/*   
              <pre>{JSON.stringify(values, null, 4)}</pre>
              <hr />
              <pre>{JSON.stringify(image, null, 4)}</pre> */}
            </div>
            <input
              type="checkbox"
              id="lessonUpdateModal"
              className="modal-toggle"
            />
            <div className="modal break-all">
              <div className="modal-box break-all">
                <UpdateLessonForm
                  lesson={currentLesson}
                  setCurrentLesson={setCurrentLesson}
                  updatingLesson={updatingLesson}
                  handleUpdateLesson={handleUpdateLesson}
                  handleLessonVideoUpload={handleLessonVideoUpload}
                  handleLessonVideoDelete={handleLessonVideoDelete}
                  uploadVideoText={uploadVideoText}
                  progress={progress}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {/* breadcrumbs */}
    </InstructorWrapper>
  );
};

export default EditCourse;
