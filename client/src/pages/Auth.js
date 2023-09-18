import React from "react";

function Auth() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-white p-6">
        <h1>deneme</h1>
        <button onClick={handleLogout}>Cikis Yap</button>
      </nav>
    </div>
  );
}

export default Auth;
