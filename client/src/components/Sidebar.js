import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Sidebar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <Helmet>
        <title>Panel</title>
      </Helmet>
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center text-black gap-8">
              <h2 className="font-bold text-xl ml-4">
                <Link to="/">Ana Sayfa</Link>
              </h2>
              <h2 className="font-bold text-xl ml-4">
                <Link to="/dashboard">Panel</Link>
              </h2>
              <button onClick={handleLogout}>Cikis Yap</button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-wrap">
          <div className="p-2 bg-white w-full md:w-60 flex flex-col md:flex">
            <nav>
              <div className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white">
                <Link to="/dashboard/rooms">Odalar</Link>
              </div>
              <div className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white">
                <Link to="/dashboard/specs">Özellikler</Link>
              </div>
            </nav>
          </div>
          <div className="mx-auto mt-8 w-4/5 bg-white p-4 shadow rounded-lg">
            <h2 className="text-gray-500 text-lg font-semibold pb-4">Panel</h2>
            <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
            <div>Giris yapildi, panele hosgeldiniz.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
