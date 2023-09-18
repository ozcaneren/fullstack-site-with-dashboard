import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/users/register";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError(error.response.data);
      }
    }
  };

  return (
    <div>
      <div></div>
      <div>
        <form>
          <h1>Kayit Ol</h1>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={data.email}
            required
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            required
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Kayit Ol
          </button>
          {error && <p>{error}</p>}
          <p>
            Zaten bir hesabiniz var mi? <Link to="/login">Giris Yap</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
