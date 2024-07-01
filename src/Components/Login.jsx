import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../../utills/validate.jsx';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../utills/firebaseConfig.jsx';

export const Login = () => {
  const [isSigninform, setisSigninform] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(''); // new state variable for success message
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const togglesignform = () => {
    setisSigninform(!isSigninform);
  };

  const handlesubmit = async () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const message = checkValidData(emailValue, passwordValue);
    setError(message);
    if (message) return;

    if (!isSigninform) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
        const user = userCredential.user;
        await updateProfile(auth.currentUser, {
          displayName: name.current.value,
          photoURL: `https://ui-avatars.com/api/?name=${encodeURIComponent(name.current.value)}&color=fff`
        });
        setSuccess('Account created successfully!'); // set success message
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode + " - " + errorMessage);
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, emailValue, passwordValue);
        const user = userCredential.user;
        setSuccess('Signed in successfully!'); // set success message
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode + " - " + errorMessage);
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full h-full">
        <img className="h-full w-full object-cover" src='src/assets/netflix.jpg' alt="Netflix" />
      </div>

      <form onSubmit={(e) => { e.preventDefault(); handlesubmit(); }} className='absolute right-0 left-0 top-1/2 bg-black bg-opacity-80 rounded-lg transform -translate-y-1/2 mx-auto p-8 sm:p-12 w-full md:w-3/12'>
        <h1 className='text-white text-2xl sm:text-3xl font-bold mb-4 sm:mb-6'>
          {isSigninform ? "Sign-In" : "Sign-Up"}
        </h1>
        {!isSigninform && (
          <input
            ref={name}
            type='text'
            placeholder='Full-Name'
            className='py-3 sm:py-4 px-4 mt-4 mb-4 w-full bg-gray-800 text-white border border-gray-700 rounded'
            autoComplete="name"
          />
        )}

        <input
          ref={email}
          type='text'
          placeholder='Email-Address'
          className='py-3 sm:py-4 px-4 mt-4 mb-4 w-full bg-gray-800 text-white border border-gray-700 rounded'
          autoComplete="email"
        />
        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='py-3 sm:py-4 px-4 mt-4 sm:mt-6 mb-4 w-full bg-gray-800 text-white border border-gray-700 rounded'
          autoComplete={isSigninform ? "current-password" : "new-password"}
        />
        <button type="submit" className='py-2 sm:py-3 px-4 bg-red-700 mt-4 sm:mt-6 text-white w-full rounded hover:bg-red-600'>
          {isSigninform ? "Sign-In" : "Sign-Up"}
        </button>
        <p onClick={togglesignform} className='text-white mt-5 cursor-pointer'>
          {isSigninform ? "New to Netflix? Sign Up Now" : "Already have an account? Sign in Now"}
        </p>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && (
          <div className="bg-blue-900 p-4 rounded mb-4">
            <p className="text-white">{success}</p>
          </div>
        )}
      </form>

      </div>

      )}

      export default Login;