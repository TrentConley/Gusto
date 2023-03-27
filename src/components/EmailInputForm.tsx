import React, { useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApEajLuAkesYcIy3Belo5ytUyDc5QCzUk",
  authDomain: "gusto-91e98.firebaseapp.com",
  projectId: "gusto-91e98",
  storageBucket: "gusto-91e98.appspot.com",
  messagingSenderId: "1052838274443",
  appId: "1:1052838274443:web:f7f511a1bb27144477fb8e",
  measurementId: "G-C14V7X9RZ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const EmailInputForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Submitting email: ${email}`);
    // You can add code here to send the email to a server or perform other actions
    setEmail(""); // Clear the email input field
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center"
    >
      <label htmlFor="email" className="text-lg mb-2">
        Enter your email address:
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={handleChange}
        className="border border-gray-400 rounded-lg px-4 py-2 w-64 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
      <button
        type="submit"
        className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        Submit
      </button>
    </form>
  );
};

export default EmailInputForm;
