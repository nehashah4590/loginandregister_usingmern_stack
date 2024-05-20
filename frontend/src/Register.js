import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import signupimage from "./assets/images/signup.png";

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName:'',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
   
    try {
      const response = await axios.post('http://localhost:8000/api/create_users', formData);
      console.log(response.data);
    
    } catch (error) {
      console.error('Error:', error);
    
    }
  };

  return (
    <div className='flex bg-white'>
      <div className='w-[25vw] hidden md:block'>
        <img src={signupimage} alt='signup_background_image' className='h-[100vh]'/>
      </div>
      <div className="p-8 max-w-md">
        <h2 className="text-4xl font-bold mt-[8vh] text-center text-green-600">Create your account</h2>
        <p className='my-10 font-bold text-[18px]'>Have an account? <Link to="../login" className='text-blue-500'>Log in now</Link></p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

