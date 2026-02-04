import signupimg from "../assets/signup-img.png";

const SignUp: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center px-6 py-10 font-sans">
      <section>
        <img src={signupimg} alt="signup page" className="max-w-lg w-full" />
      </section>
      <section className="w-80 max-w-md bg-white p-6 rounded-2xl shadow-lg shadow-gray-400 ">
          <h2 className="text-2xl font-bold text-center mb-6">
            Create an account
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F3D56]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F3D56]"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F3D56]"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F3D56]"
            />

            <button
              type="submit"
              className="w-full bg-[#181C14] text-white px-6 py-2 rounded-full hover:text-lg "
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?
            <span className="text-[#3F3D56] cursor-pointer"> Sign In</span>
          </p>
      </section>
      {/* <section className="w-72 max-w-md bg-white p-6 rounded-2xl shadow-lg shadow-gray-400">
          <h2 className="text-2xl font-bold text-center mb-6">
            Login to your account
          </h2>
          <form className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F3D56]"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F3D56]"
            />
            <button
              type="submit"
              className="w-full bg-[#181C14] text-white px-6 py-2 rounded-full hover:text-lg "
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?
            <span className="text-[#3F3D56] cursor-pointer"> Sign Up</span>
          </p>
      </section> */}
    </div>
  );
};

export default SignUp;
