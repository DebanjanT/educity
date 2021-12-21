import { useState, useEffect } from "react";

const CreateCourseForm = ({
  handleChange,
  handleImageUpload,
  handleSubmit,
  values,
  setValues,
}) => {
  let priceChildren = [];
  for (let i = 500; i <= 6500; i += 1000) {
    priceChildren.push(<option key={i.toFixed(2)}>{i.toFixed(2)}</option>);
  }
  return (
    <div className="col-span-2 form-control">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name of course"
          value={values.name}
          onChange={handleChange}
          className=" w-full lg:w-4/5 border border-secondary my-2 text-sm py-2 px-6 rounded-none lg:rounded-lg focus:outline-accent text-accent focus:text-secondary"
          required
          autoFocus
        />

        <textarea
          name="description"
          cols="7"
          rows="7"
          value={values.description}
          onChange={handleChange}
          placeholder="Enter your course description"
          className="w-full lg:w-4/5 border border-secondary my-2 text-sm py-2 px-6 rounded-none lg:rounded-lg focus:outline-accent text-accent focus:text-secondary"
        ></textarea>

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={values.category}
          onChange={handleChange}
          className=" w-full lg:w-4/5 border border-secondary my-2 text-sm py-2 px-6 rounded-none lg:rounded-lg focus:outline-accent text-accent focus:text-secondary"
          required
        />

        <select
          value={values.paid}
          onChange={(v) => setValues({ ...values, paid: !values.paid })}
          className="select select-bordered select-secondary w-full lg:w-4/5 mb-3 rounded-none lg:rounded-lg"
        >
          <option value={false} selected>
            Free Course
          </option>
          <option value={true}>₹ Paid Course</option>
        </select>

        <div>
          {values.paid && (
            <select
              value={values.price}
              onChange={(v) => setValues({ ...values, price: v.target.value })}
              className="select select-bordered select-secondary w-full lg:w-4/5 mb-3 rounded-none lg:rounded-lg"
            >
              {priceChildren}
            </select>
          )}
        </div>

        {/* image upload handle */}
        <div className="flex items-center align-center my-3">
          <label
            className="btn btn-circle bg-secondary border-none rounded-lg"
            for="image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            <input
              type="file"
              id="image"
              onChange={handleImageUpload}
              accept="image/*"
              hidden
            />
          </label>
          <p className="ml-2">
            {values.loading ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>Uploading Image...</p>
              </>
            ) : (
              "Upload Image"
            )}
          </p>
        </div>

        <button
          className="btn btn-sm my-3 normal-case"
          onClick={handleSubmit}
          disabled={
            values.loading ||
            values.uploading ||
            !values.name ||
            !values.description ||
            !values.category
          }
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
            />
          </svg>
          {values.loading ? "Saving..." : "Save & Continue"}
        </button>
      </form>
    </div>
  );
};

export default CreateCourseForm;
