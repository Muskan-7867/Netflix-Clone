import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utills/firebaseConfig.jsx";
import { onAuthStateChanged } from "firebase/auth";

import { addUser, removeuser } from "../../utills/userSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../../utills/constants";
import { togglegptsearchview } from "../../utills/Gptslice.jsx";
import { changelanguage } from "../../utills/configslice.jsx";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const showgptsearch = useSelector((store) => store.gpt.showgptsearch)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, photoURL, displayName } = user;
        dispatch(addUser({ uid, email, photoURL: photoURL, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeuser());
        navigate("/");
      }
    });
  }, [dispatch, navigate]);

  const handlegptserachclick = () =>{
    dispatch(togglegptsearchview())
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handlelanguage=(e) => {
     dispatch(changelanguage(e.target.value))
  
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b flex justify-between flex-col md:flex-row   from-black z-10">
      <img className="w-44  mx-auto  md:mx-0 h-32" src={LOGO} alt="Netflix Logo" />

      {user && (
        <div className="flex p-8 justify-between">
{  showgptsearch &&(
          <select  onChange={handlelanguage} className="rounded-lg p-4 text-white bg-gray-900">
            <option value="en">English</option>
            <option value="hindi">Hindi</option>
            <option value="spanish">Spanish</option>
          </select> )}
         
          
           <button
          onClick={handlegptserachclick}
          className="bg-red-600  mr-2 ml-4 p-4 font-bold text-white rounded-lg">
          {showgptsearch? 'HomePage':  'GPT Seatch' }
            </button>
          <button
            onClick={handleSignOut}
            className="bg-red-600  mr-2 ml-4 p-4 font-bold text-white rounded-lg"
          >
            Sign Out
          </button>

          <img className="h-14 w-14 rounded-full" src={user.photoURL ||`https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName)}&color=red`
             }
            alt="Profile"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
