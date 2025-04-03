import { useState } from "react";
function Login(props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  function handleRegister() {
    const response = fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fullName,
        email: email,
        password: password,
      }),
    });
    response
      .then((data) => {
        if (data.ok) {
          return data.json();
        } else {
          throw new Error(data.statusText);
        }
      })
      .then((data) => {
        console.log("registered");
      })
      .catch((error) => {
        if (error.message === "Forbidden") {
          console.error("Registration failed: Forbidden");
        } else {
          console.error(error);
        }
      });
  }

  function handleLogin() {
    const response = fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const result = response.then((data) => data.json());
    result.then((data) => {
      alert("Login Succesfully");
    });
  }

  return (
    <div
      className={`fixed flex top-0 left-0 right-0 z-50 w-full p-4
  bg-white border border-gray-200
  
   `}
    >
      <div className="relative w-full max-w-md max-h-full h-screen">
        <div className=" relative bg-white rounded-lg shadow ">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-amber-300"
            data-modal-hide="authentication-modal"
            data-test-id="login-modal"
            onClick={props.onClose}
          >
            <svg
              className=" w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 0 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 6L7 10L1 6"
              ></path>
            </svg>
            <span className="sr-only ">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Sign in to Our Platform
            </h3>
            <form className="space-y-6" action="#">
              {!isSignUp && (
                <div>
                  <label
                    htmlFor="fullName"
                    className="block mb-2 text-sm font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={fullName}
                    className="bg-gray-50 border border-gray-300"
                    placeholder="Enter your Name"
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              )}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark: text-white"
                >
                  Your email
                </label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  id="email"
                  className="bg-gray-50 border border-gray-300"
                  placeholder="namee@company.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark: text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  id="password"
                  className="bg-gray-50 border border-gray-300"
                  placeholder="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="remember"
                      value=""
                      className="w-4 h-4 border-gray-300"
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm font-medium text-gray-900 "
                  >
                    {" "}
                    Remember
                  </label>
                </div>

                <a href="#" className="text-sm text-blue-700 hover:underline">
                  Lost Password ?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:underline"
                onClick={
                  !isSignUp ? (e) => handleRegister(e) : (e) => handleLogin(e)
                }
              >
                {!isSignUp ? "Register" : "Login "}
              </button>
              <div className=" text-sm font-medium text-gray-900">
                Not Registered?{" "}
                <a
                  href="#"
                  className="text-sm text-blue-700 hover:underline"
                  onClick={() => setIsSignUp(false)}
                >
                  Create Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
