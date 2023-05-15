import React from "react";
import Layout from "./Layout";

const socials = () => {
  return (
    <Layout>
      <div className="pe-20 mb-6">
        <label className="block mb-2 text-lg font-medium">GitHub</label>
        <input
          type="GitHub"
          id="GitHub"
          aria-describedby="helper-text-explanation"
          className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 "
          placeholder="GitHub Profile URL"
        />
      </div>
      <div className="pe-20 mb-6">
        <label className="block mb-2 text-lg font-medium">Linkedin</label>
        <input
          type="Linkedin"
          id="Linkedin"
          aria-describedby="helper-text-explanation"
          className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 "
          placeholder="Linkedin Profile URL"
        />
      </div>
      <div className="pe-20 mb-6">
        <label className="block mb-2 text-lg font-medium">Facebook</label>
        <input
          type="Facebook"
          id="Facebook"
          aria-describedby="helper-text-explanation"
          className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 "
          placeholder="Facebook Profile URL"
        />
      </div>
      <div className="pe-20 mb-6">
        <label className="block mb-2 text-lg font-medium">Instagram</label>
        <input
          type="Instagram"
          id="Instagram"
          aria-describedby="helper-text-explanation"
          className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 "
          placeholder="Instagram Profile URL"
        />
      </div>
      <div className="pe-20 mb-6">
        <label className="block mb-2 text-lg font-medium">Dribble</label>
        <input
          type="Dribble"
          id="Dribble"
          aria-describedby="helper-text-explanation"
          className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 "
          placeholder="Dribble Profile URL"
        />
      </div>
      <div className="pe-20 mb-6">
        <label className="block mb-2 text-lg font-medium">Behance</label>
        <input
          type="Behance"
          id="Behance"
          aria-describedby="helper-text-explanation"
          className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 "
          placeholder="Behance Profile URL"
        />
      </div>
      <div className="flex me-20 pt-4 pb-32 justify-end">
        <button className="bg-gray-300 p-3 px-5 mx-2 rounded-xl">Cancel</button>
        <button className="bg-indigo-600 text-white p- px-5 mx-2 rounded-xl">
          Save Changes
        </button>
      </div>
    </Layout>
  );
};

export default socials;
