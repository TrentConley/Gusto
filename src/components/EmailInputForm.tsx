import React, { useState } from "react";

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
