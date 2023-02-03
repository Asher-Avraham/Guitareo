const LoginForm = ({ setForm }: any) => {
  return (
    <form>
      <h2 className="text-lg font-medium mb-4">Login</h2>
      <div className="mb-4">
        <label className="block font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg p-2"
          id="email"
          type="email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg p-2"
          id="password"
          type="password"
          required
        />
      </div>
      <button
        className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600"
        type="submit"
      >
        Login
      </button>
      <button
        className="mt-4 text-blue-500 hover:underline"
        type="button"
        onClick={() => setForm("signup")}
      >
        Sign Up
      </button>
      <button
        className="mt-4 text-blue-500 hover:underline"
        type="button"
        onClick={() => setForm("forgot")}
      >
        Forgot Password
      </button>
    </form>
  );
};

export default LoginForm;
