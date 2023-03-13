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
        <div
          className="flex justify-center text-center h-screen"
          style={{ background: "linear-gradient(to bottom, #03FDFC, #FFC0B4)" }}
        >
          <div className="flex justify-center items-center w-full px-10 mb-40">
            <h1 className="text-8xl font-bold mb-40">
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
