import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const handleFormChange = () => {
    setIsSignInForm(!isSignInForm);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current ? name.current.value : null,
    );
    setErrorMsg(message);
    // console.log(message);

    if (message) return;

    // sign in / sign up logic
    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    }
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/backgrounds/small/appDownload_vlv.jpg"
          alt="bg"
          className="w-full h-screen object-cover"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-1/4 p-12 my-24 mx-auto right-0 left-0 bg-black m-auto rounded-lg opacity-80"
      >
        <h1 className="text-white p-4 my-4 text-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-4 my-4  text-white w-full rounded-lg bg-gray-700"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4  text-white w-full rounded-lg bg-gray-700"
          type="text"
          placeholder="email"
        />
        <input
          ref={password}
          className="p-4 my-4  text-white w-full rounded-lg bg-gray-700"
          type="password"
          placeholder="password"
        />
        <p className="text-red-500 text-xl p-4">{errorMsg}</p>
        <button
          onClick={handleButtonClick}
          className="p-4 my-6 w-full bg-red-700 text-white rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white">
          {isSignInForm ? (
            <>
              New to Netflix?{" "}
              <span
                className="cursor-pointer hover:underline"
                onClick={handleFormChange}
              >
                Sign up now
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="cursor-pointer hover:underline"
                onClick={handleFormChange}
              >
                Sign In
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
