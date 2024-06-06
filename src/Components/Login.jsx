import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../../utills/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../utills/firebaseConfig';



export const Login = () => {

  const [isSigninform, setisSigninform] = useState(true);
  const [error, setError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const togglesignform = () => {
    setisSigninform(!isSigninform);
  }

  const handlesubmit = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const message = checkValidData(emailValue, passwordValue);
    setError(message);
    if (message) return;

    if (!isSigninform) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)   //sign up 
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: `https://ui-avatars.com/api/?name=${encodeURIComponent(name.current.value)}&color=fff`
          }).then(() => {
           
          }).catch((error) => {
            console.error(error);
          });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)     // sign in logic
        .then((userCredential) => {
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " - " + errorMessage);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className='absolute w-full'>
        <img className='h-screen w-full object-cover' src='src/assets/netflix.jpg' alt="Netflix" /> {/* Use the imported image */}
      </div>

      <form onSubmit={(e) => { e.preventDefault(); handlesubmit(); }} className='absolute right-0 left-0 top-1/2 bg-black bg-opacity-80 rounded-lg transform -translate-y-1/2 mx-auto p-12 w-3/12'>
        <h1 className='text-white text-3xl font-bold mb-6'>
          {isSigninform ? "Sign-In" : "Sign-Up"}
        </h1>
        {!isSigninform && (
          <input
            ref={name}
            type='text'
            placeholder='Full-Name'
            className='py-4 px-4 mt-4 mb-4 w-full bg-gray-800 text-white border border-gray-700 rounded'
            autoComplete="name"
          />
        )}

        <input
          ref={email}
          type='text'
          placeholder='Email-Address'
          className='py-4 px-4 mt-4 mb-4 w-full bg-gray-800 text-white border border-gray-700 rounded'
          autoComplete="email"
        />
        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='py-4 px-4 mt-6 mb-4 w-full bg-gray-800 text-white border border-gray-700 rounded'
          autoComplete={isSigninform ? "current-password" : "new-password"}
        />
        <button type="submit" className='py-2 px-4 bg-red-700 mt-6 text-white w-full rounded hover:bg-red-600'>
          {isSigninform ? "Sign-In" : "Sign-Up"}
        </button>
        <p onClick={togglesignform} className='text-white mt-5 cursor-pointer'>
          {isSigninform ? "New to Netflix? Sign Up Now" : "Already have an account? Sign in Now"}
        </p>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
