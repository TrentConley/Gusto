import React from "react";
import TopBar from "../components/TopBar";

function Page() {
  return (
    <>
      <TopBar />
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="flex justify-between w-full px-10 mb-40">
          <div className="text-black text-8xl font-bold">Inventor</div>
          <div className="text-black text-8xl font-bold">Engineer</div>
        </div>
      </div>
    </>
  );
}

export default Page;
