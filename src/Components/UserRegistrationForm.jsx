import { useState } from "react";
import Lady from '../Images/10.png';

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  // console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Save to an array or perform other actions with the data
  };

  return (
    <div className=" m-3 sm:flex sm:flex-col md:flex-row">
      <div className="md:w-1/2 hidden md:block p-6 ">
        <img
          src={Lady}
          alt="Login/Signup Image"
          className="w-full h-auto xl:h-customheight"
        />
      </div>
      <div className="max-w-md mx-auto p-6 bg-white sm:w-full rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">User Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Vaibhav vats"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1"  >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="abc@gmail.com"
              value={formData.email}
              onChange={handleChange}
              pattern=".+@gmail\.com"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="9999999999"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]*"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="address" className="block mb-1">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistrationForm;
