import Layout from "./Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex pb-6">
          <img src="/profile.png" alt="img" className="rounded-full" />
          <div className="self-center">
            <button className="bg-indigo-600 text-white ms-4 mx-2 p-2 px-4 rounded-lg">
              Upload new picture
            </button>
          </div>
          <div className="self-center">
            <button className="bg-zinc-100 mx-2 p-2 px-4 rounded-lg">
              Delete
            </button>
          </div>
        </div>
        <div className="pe-20 py-4">
          <label className="block mb-2 text-lg font-medium">Display name</label>
          <input
            type="name"
            id="name"
            aria-describedby="helper-text-explanation"
            className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 "
            placeholder="Modi Ji"
          />
          <p
            id="helper-text-explanation"
            className="mt-2 text-lg text-gray-500 dark:text-gray-400"
          >
            Name entered above will be used for all issued certificates
          </p>
        </div>
        <div className="pe-20 pt-2 mb-6">
          <label className="block mb-2 text-lg font-medium">About</label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="pe-20 mb-6">
          <label className="block mb-2 text-lg font-medium">Profession</label>
          <input
            type="profession"
            id="profession"
            aria-describedby="helper-text-explanation"
            className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 "
            placeholder="Student"
          />
        </div>
        <div className="relative pe-20 mb-6">
          <label className="block mb-2 text-lg font-medium">
            Date of birth
          </label>
          <input
            type="dates"
            id="date"
            className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 "
            placeholder="DD/MM/YYY"
          />
          <span className="absolute inset-y-14 end-20 grid w-10 place-content-center ">
            <img src="/calendar.png" alt="img" width="20" height="20" />
          </span>
        </div>
        <div className="relative pe-20 mb-6">
          <label className="block mb-2 text-lg font-medium">Gender</label>
          <input
            type="gender"
            id="gender"
            className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 "
            placeholder="What is your gender"
          />
          <span className="absolute inset-y-12 end-20 grid w-10 place-content-center ">
            <img src="/Vector.png" alt="img" width="12" height="8" />
          </span>
        </div>
        <div className="relative pe-20 mb-6">
          <h2 className="font-bold text-2xl	">Section visibility</h2>
          <h3 className="text-zinc-500">
            Select which sections and content should show on your profile page.
          </h3>
        </div>
        <div className=" mb-6 me-20 px-10 py-5 bg-zinc-50 rounded-lg">
          <div className="flex py-2 justify-between">
            <div>
              <h2 className="font-bold text-lg">Followers and following</h2>
              <h3 className="text-zinc-500 text-lg  ">
                Shows your followers and the users you follow on codedamn
              </h3>
            </div>
            <div className="my-auto">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 rounded-full bg-gray-700 peer-checked:after:translate-x-full  after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
          <div className="flex py-2 justify-between">
            <div>
              <h2 className="font-bold text-lg">XP</h2>
              <h3 className="text-zinc-500 text-lg  ">
                Shows the XP you have earned
              </h3>
            </div>
            <div className="my-auto">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 rounded-full bg-gray-700 peer-checked:after:translate-x-full  after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
          <div className="flex py-2 justify-between">
            <div>
              <h2 className="font-bold text-lg">Achievement badges</h2>
              <h3 className="text-zinc-500 text-lg  ">
                Shows your relative percentile and proficiency
              </h3>
            </div>
            <div className="my-auto">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 rounded-full bg-gray-700 peer-checked:after:translate-x-full  after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="flex me-20 pb-32 justify-end">
          <button className="bg-gray-300 p-3 px-5 mx-2 rounded-xl">
            Cancel
          </button>
          <button className="bg-indigo-600 text-white p- px-5 mx-2 rounded-xl">
            Save Changes
          </button>
        </div>
      </Layout>
    </>
  );
}
