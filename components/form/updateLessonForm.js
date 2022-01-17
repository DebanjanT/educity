import ReactPlayer from "react-player";
import { toast } from "react-toastify";

const UpdateLessonForm = ({
  lesson,
  handleLessonVideoUpload,
  handleLessonVideoDelete,
  progress,
  handleUpdateLesson,
  updatingLesson,
  setCurrentLesson,
  uploadVideoText,
}) => {
  const handleFreePreview = (e) => {
    let fp = e.target.value;
    if (fp == "true") {
      setCurrentLesson({ ...lesson, free_preview: true });
    } else if (fp == "false") {
      setCurrentLesson({ ...lesson, free_preview: false });
    } else {
      toast.error("Opps! Something went wrong");
    }
  };
  return (
    <>
      {/* <pre className="text-xs overflow-scroll">
        {JSON.stringify(lesson, null, 4)}
      </pre> */}
      <div className="flex justify-between">
        <p className="flex align-center items-center text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
          Update Lesson
        </p>
        {lesson && lesson.free_preview ? (
          <div className="badge badge-md bg-green-500 border-green-500 shadow-md shadow-green-400">
            Free Lesson
          </div>
        ) : (
          <div className="badge badge-md bg-red-500 border-red-500 shadow-md shadow-red-400">
            Paid Lesson
          </div>
        )}
      </div>
      <hr className="mt-2" />

      <form onSubmit={handleUpdateLesson}>
        <div className="form-control mt-2">
          <label className="input-group">
            <span className="text-sm flex-shrink-0">Lesson Title</span>
            <input
              type="text"
              value={lesson.title}
              onChange={(e) =>
                setCurrentLesson({ ...lesson, title: e.target.value })
              }
              placeholder="Enter your lesson title"
              className="input input-bordered input-sm w-full input-primary text-accent-focus"
            />
          </label>
        </div>

        <div className="form-control mt-3">
          <label className="input-group input-group-vertical input-group-sm">
            <span>Description</span>
            <input
              type="text"
              value={lesson.content}
              onChange={(e) =>
                setCurrentLesson({ ...lesson, content: e.target.value })
              }
              placeholder="What does this lesson explain to user?"
              className="input input-bordered input-md  input-primary text-accent-focus"
            />
          </label>
        </div>
        {lesson && lesson.video && lesson.video.Location && (
          <div className="shadow-lg mt-2">
            <ReactPlayer
              url={lesson.video.Location}
              width="100%"
              height="100%"
              controls
            />
          </div>
        )}
        <div className="mt-3 ">
          <div className="flex">
            <label
              htmlFor="video-input"
              className="flex align-center items-center cursor-pointer"
            >
              <input
                id="video-input"
                type="file"
                accept="video/*"
                className="hidden"
                disabled={
                  updatingLesson || (lesson.video && lesson.video.Location)
                }
                onChange={handleLessonVideoUpload}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-secondary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
              </svg>
            </label>
            {lesson && lesson.video && lesson.video.Location
              ? "Lesson has video"
              : uploadVideoText}

            {lesson && lesson.video && lesson.video.Location && (
              <button
                className="ml-2 text-red-500 tooltip cursor-pointer "
                data-tip="Delete Video"
                onClick={handleLessonVideoDelete}
                disabled={updatingLesson}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              </button>
            )}
          </div>
          <select
            onChange={(e) => handleFreePreview(e)}
            value={lesson.free_preview}
            className="select select-bordered select-sm select-secondary w-full lg:w-4/5 mt-3  rounded-none lg:rounded-lg"
          >
            <option value={false} selected>
              Paid Lesson
            </option>
            <option value={true}>Preview : Free to watch </option>
          </select>

          {progress > 0 && (
            <progress
              className="progress progress-success"
              value={progress}
              max="100"
            ></progress>
          )}
        </div>

        <div className="modal-action">
          <button
            className="btn btn-sm btn-primary normal-case"
            disabled={!lesson.title || !lesson.content || updatingLesson}
          >
            {updatingLesson ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 animate-spin"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                Please wait...
              </>
            ) : (
              "Update Lesson"
            )}
          </button>
          <label for="lessonUpdateModal" className="btn btn-sm">
            Close
          </label>
        </div>
      </form>
      {/* <pre>{JSON.stringify(values.video, null, 4)}</pre> */}
    </>
  );
};

export default UpdateLessonForm;
