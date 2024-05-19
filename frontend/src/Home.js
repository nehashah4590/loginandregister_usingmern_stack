import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className='flex justify-end pr-20 font-bold'>
      <Link to='../login' className="p-4 text-blue-500 hover:underline">Login In</Link>
      <Link to='../register' className="p-4 text-blue-500 hover:underline">Sign Up</Link>
    </div>
    <div className='flex  text-8xl font-bold justify-center items-center h-[80vh] '>
      <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-red-500'>Welcome to the Website</h1>
    </div>
    </>
  )
}

export default Home
