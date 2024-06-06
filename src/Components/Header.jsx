import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../../utills/firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";

import { addUser, removeuser } from '../../utills/userSlice';
import { useDispatch } from 'react-redux';
import { LOGO } from '../../utills/constants';


export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

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
        navigate('/browse');
      } else {
        dispatch(removeuser());
        navigate('/');
      }
    });
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      }).catch((error) => {
        navigate('/error');
      });
  };

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b flex justify-between from-black z-10'>
      <img className='w-44 h-32' src={LOGO} alt="Netflix Logo" />
      <div className='flex p-8'>
        {user ? (
          <>
            <img className='h-14 w-14 rounded-full' src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName)}&color=fff`} alt="Profile" />
            <button onClick={handleSignOut} className='bg-red-600 ml-4 p-4 font-bold text-white rounded-lg'>Sign Out</button>
          </>
        ) : (
          <button onClick={() => navigate('/login')} className='bg-red-600 ml-4 p-4 font-bold text-white rounded-lg'>Sign In</button>
        )}
      </div>
    </div>
  );
};

export default Header;
