import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const Header: React.FC = ({}) => {
  const [state, setState] = useState<number>(0);

  return (
    <div
      className="border-gray w-screen rounded-b-md flex"
      style={{ background: "#FBFCF8" }}
    >
      <div className="">
        <Link href="/" passHref>
          <img src="/logo.png" alt="" className="object-contain h-20 w-40" />
        </Link>
      </div>
      <nav className="flex justify-center">
        <div className="flex justify-between items-center h-20 mx-auto px-4">
          <div className="flex space-x-4">
            <Link href="/" passHref>
              <button
                onClick={() => {
                  setState(1);
                }}
                className={`hover:text-black ${
                  state == 1 ? "text-blue-500" : "text-gray-500"
                } font-bold rounded-full px-4 py-2 transition-colors duration-300 ease-in-out`}
              >
                About
              </button>
            </Link>
            <Link href="/projects" passHref>
              <button
                onClick={() => {
                  setState(2);
                }}
                className={`hover:text-black ${
                  state == 2 ? "text-blue-500" : "text-gray-500"
                } font-bold rounded-full px-4 py-2 transition-colors duration-300 ease-in-out`}
              >
                Sign up
              </button>
            </Link>
            <Link href="/create-new-project" passHref>
              <button
                onClick={() => {
                  setState(3);
                }}
                className={`hover:text-black ${
                  state == 3 ? "text-blue-500" : "text-gray-500"
                } font-bold rounded-full px-4 py-2 transition-colors duration-300 ease-in-out`}
              >
                View Product
              </button>
            </Link>
            <Link href="/get-worker-nft" passHref>
              <button
                onClick={() => {
                  setState(4);
                }}
                className={`hover:text-black ${
                  state == 4 ? "text-blue-500" : "text-gray-500"
                } font-bold rounded-full px-4 py-2 transition-colors duration-300 ease-in-out`}
              >
                The Team
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="flex items-center ml-auto pr-8"></div>
    </div>
  );
};

export default Header;
