import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-between  absolute w-screen z-50 bg-gradient-to-b from-black to-transparent">
      <div className="p-4 m-4 ">
        <img
          className="text-white"
          src="https://search.brave.com/images?q=netflix%20log%20png&source=imageCluster"
          alt="NETFLIX"
        />
      </div>
      <div>
        <button
          className="border-2 border-black px-4 py-2 m-4 text-white"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
        {/* <button className="border-2 border-black px-4 py-2 m-4">Sign Up</button> */}
      </div>
    </div>
  );
};

export default Header;
