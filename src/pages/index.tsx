import SearchBar from "@/components/SearchBar";
import React from "react";
import Header from "../components/Header";
import EmailInputForm from "../components/EmailInputForm";
import AboutTeam from "@/components/AboutTeam";

function Page() {
  return (
    <>
      <div className="h-2screen" style={{ background: "#FFC0B4" }}>
        <Header />
        <div className="h-screen relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover"
            style={{
              backgroundImage: `url("https://media.istockphoto.com/id/476098860/vector/wonderful-morning-in-the-blue-mountains.jpg?s=612x612&w=0&k=20&c=0nuLvsWKXPReu01RvbXTKIwlUYxOQvoXD_qVBrsapxc=")`,
            }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <h1 className="text-8xl font-bold mb-40 mt-20 text-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
              Welcome to Gusto, your gateway to food.
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <h1 className="text-8xl font-bold mb-40">Sign up here</h1>
            <EmailInputForm />
          </div>
        </div>
        <AboutTeam />
      </div>
    </>
  );
}

export default Page;
