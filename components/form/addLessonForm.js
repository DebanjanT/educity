const AddLessonForm = ({ handleAdd, values, setValues, uploading, course }) => {
  return (
    <>
      <p className="flex align-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
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
      </p>
      <hr className="mt-2" />

      <p className="flex justify-center text-accent text-sm mt-1 bg-primary rounded-full shadow-md py-1">
        {course.title}
      </p>

      <form onSubmit={handleAdd}>
        <div className="form-control mt-2">
          <label className="input-group">
            <span>Lesson Title</span>
            <input
              type="text"
              value={values.title}
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              placeholder="Enter your lesson title"
              class="input input-bordered input-sm input-primary text-accent-focus"
            />
          </label>
        </div>

        <div className="form-control mt-2">
          <label className="input-group input-group-vertical input-group-sm">
            <span>Description</span>
            <input
              type="text"
              value={values.content}
              onChange={(e) =>
                setValues({ ...values, content: e.target.value })
              }
              placeholder="What does this lesson explain to user?"
              className="input input-bordered input-md  input-primary text-accent-focus"
            />
          </label>
        </div>

        <div className="modal-action">
          <button
            className="btn btn-primary normal-case"
            disabled={!values.title || !values.content || uploading}
          >
            Save Lesson
          </button>
          <label for="add-lesson-modal" className="btn normal-case">
            Cancel
          </label>
        </div>
      </form>
      {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
    </>
  );
};

export default AddLessonForm;
