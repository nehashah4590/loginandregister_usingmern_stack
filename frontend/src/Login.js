import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className='flex bg-white'>
      <div className="p-8 max-w-md">
        <h2 className="text-3xl font-bold mt-[8vh] text-center text-green-600 ">Log in to your account</h2>
        <p className='my-10 font-bold text-[18px]'>Don't have an account? <Link to="../register" className='text-blue-500'>Sign Up</Link></p>
        <form onSubmit={handleSubmit} className="space-y-6">
          
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
            Login
          </button>
        </form>
      </div>
      <div className='w-calc-custom hidden md:block'>
        <img src={`${process.env.PUBLIC_URL}/Images/signin.png`} alt='signup' className='h-[100vh]'/>
      </div>
    </div>
  );
}

export default Login;

