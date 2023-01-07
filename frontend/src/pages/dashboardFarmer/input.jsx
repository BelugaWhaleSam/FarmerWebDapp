import React from "react";
import { useState } from "react";

export const Input = () => {
  /* ******************************************************************************** State ***************************************************************************************** */

  var [name, setName] = useState("");
  var [title, setTitle] = useState("");
  var [description, setDescription] = useState("");
  var [video, setVideo] = useState(null);

  /* ******************************************************************************** handleSubmit button ***************************************************************************************** */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    console.log(e.target[3].value);
  };

  return (
    <div className="h-screen bg-gray-100 font-sans">
      <div className="container mx-auto px-10 py-8">
        <form
          className="w-full max-w-sm"
          // action="/upload"
          // method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input
              className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight text-gray-700 focus:outline-none"
              type="file"
              accept="video/*"
              required
              onChange={(e) => (setVideo = e.target.files[0])}
            />
          </div>
          <div className="mt-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="focus:shadow-outline text-1xl w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              type="text"
              // value={name}
              onChange={(e) => (setName = e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="focus:shadow-outline text-1xl w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              type="text"
              // value={title}
              onChange={(e) => (setTitle = e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="focus:shadow-outline text-1xl w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="description"
              name="description"
              required
              // value={description}
              onChange={(e) => (setDescription = e.target.value)}
            />
          </div>
          <div className="mt-4">
            <button
              className="focus:shadow-outline hover:bg-white-700 rounded bg-blue-500 py-2 px-4 font-bold text-white focus:outline-none"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
