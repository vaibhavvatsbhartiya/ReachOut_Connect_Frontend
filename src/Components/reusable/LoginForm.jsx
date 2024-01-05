import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users/login', loginData);
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      alert(response.data.message);
      navigate("/");
      window.location.reload(); 
      // Handle success, maybe set authentication tokens or redirect to a dashboard
    } catch (error) {
      console.log(error.response.data);
      // Handle error, show an error message
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-10">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={loginData.email}
        onChange={handleChange}
        className="border rounded-md px-3 py-2 mb-3 w-full"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={loginData.password}
        onChange={handleChange}
        className="border rounded-md px-3 py-2 mb-3 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
      <p className="mt-2">
        Don't have an account?{' '}
        <Link to="/signup" className="text-blue-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
