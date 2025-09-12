const Signup = () => {
  return (
    <div className="flex items-center justify-center bg-transparent">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input type="text" id="name" placeholder="Your Name" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input type="email" id="email" placeholder="Enter Your Email" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input type="password" id="password" placeholder="********" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">Sign Up</button>
        </form>
        Already have an account? Login.
      </div>
    </div>
  );
}

export default Signup;
