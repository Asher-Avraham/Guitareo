import { Link } from "react-router-dom";

export default function LoginModal() {
  return (
    <div className="modal-box">
      <form action="">
        <h2 className="font-bold text-lg pb-4">Login to your account</h2>
        <div className="mb-6">
          <input
            type="email"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Email address"
            autoFocus
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Password"
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="checkbox"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="checkbox"
            >
              Remember me
            </label>
          </div>
          <a href="#!" className="text-gray-800 link-hover">
            Forgot password?
          </a>
        </div>

        <div className="text-center lg:text-left">
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="btn w-full inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login
            </label>
          </div>
          <p className="text-sm font-semibold mt-2 pt-1 mb-0">
            Don't have an account?{" "}
            <a
              href="#!"
              className="link-hover text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
            >
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
