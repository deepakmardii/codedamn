import React from "react";
import Image from "next/image";

const navbar = () => {
  return (
    <>
      <div className="container flex justify-between h-16 mx-auto my-5">
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-2xl"
        >
          codedamn
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex px-3">
            <form>
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="search"
                    className="block w-full p-4 pl-10 pr-36 text-sm text-gray-900 border border-gray-100 rounded-xl"
                    placeholder="Search"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex text-gray-500 absolute right-2.5 bottom-2.5 bg-gray-300 font-medium rounded-lg text-sm px-4 py-2 items-center"
                >
                  Courses
                  <img src="/Vector.png" alt="img" className="pl-2" />
                </button>
              </div>
            </form>
          </li>
          <li className="px-3">
            <div className="flex pt-3">
              <img src="/Lightning.png" alt="img" height="24" width="24" />
              <h2>2</h2>
            </div>
          </li>
          <li className="flex px-3">
            <div className="flex flex-wrap gap-x-2 gap-y-2 pt-3">
              <div className="relative flex-shrink-0">
                <Image
                  src="/1.png"
                  alt=""
                  className="absolute bottom-10 left-3"
                  height="15"
                  width="14"
                />
                <Image src="/Bell.png" alt="" height="24" width="24" />
              </div>
            </div>
          </li>
          <li className="flex px-3">
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              <div className="relative flex-shrink-0">
                <Image
                  src="/Badge.png"
                  alt=""
                  className="absolute bottom-8 left-4"
                  height="55"
                  width="54"
                />
                <Image
                  src="/profile.png"
                  alt=""
                  className="w-12 h-12 border rounded-full"
                  height="24"
                  width="24"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default navbar;
