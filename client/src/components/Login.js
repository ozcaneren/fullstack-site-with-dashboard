import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/auth/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/dashboard";
      console.log(res);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError(error.response.data);
      }
    }
  };

  return (
    <div>
      <div>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
          <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
            <h1 className="font-bold text-center text-2xl mb-5">
              Marmaris Otel Panel
            </h1>
            <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
              <div className="px-5 py-7">
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  required
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  required
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                >
                  <span className="inline-block mr-2">Login</span>
                </button>
                {error && <p>{error}</p>}
                <button className="transition duration-200 mt-4 text-gray-800">
                  <Link to="/">Erisimim Yok</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
