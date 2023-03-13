import SearchBar from "@/components/SearchBar";
import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";

function Page() {
  return (
    <>
      <Header />
      {/* <TopBar />
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="flex justify-between w-full px-10 mb-40">
          <div className="text-black text-8xl font-bold">Inventor</div>
          <div className="text-black text-8xl font-bold">Engineer</div>
        </div>
      </div> */}
      <SearchBar
        onSearch={function (query: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
}

export default Page;
