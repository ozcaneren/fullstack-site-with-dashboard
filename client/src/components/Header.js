import React from "react";
import { Link } from "react-router-dom";
import {
  FaBed,
  FaHome,
  FaPhotoVideo,
  FaUserAlt,
  FaQuestion,
} from "react-icons/fa";

export default function Header() {
  return (
    <div className="container mx-auto">
      <div className="fixed top-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-xl grid-cols-5 mx-auto font-medium">
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Link to="/">
              <FaHome className="ml-5 text-gray-500" size={22} />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                Ana Sayfa
              </span>
            </Link>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Link to="/rooms">
              <FaBed className="ml-2 text-gray-500" size={22} />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                Odalar
              </span>
            </Link>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Link to="/gallery">
              <FaPhotoVideo className="text-gray-500 ml-2" size={22} />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                Galeri
              </span>
            </Link>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Link to="/specs">
              <FaQuestion className="ml-5 text-gray-500" size={22} />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                Neden Biz
              </span>
            </Link>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Link to="/dashboard">
              <FaUserAlt className="ml-1 text-gray-500" size={22} />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                Profil
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
