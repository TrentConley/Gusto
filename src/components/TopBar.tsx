import React from "react";
import Link from "next/link";

const TopBar = () => {
  return (
    <nav className="bg-gray-200 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex space-x-4 text-xl font-bold font-sans font-light">
          <Link href="https://twitter.com/TrentJConley">
            <h1>Twitter</h1>
          </Link>
          <Link href="https://github.com/TrentConley">
            <h1>Github</h1>
          </Link>
          <Link href="https://www.linkedin.com/in/trent-conley/">
            <h1>LinkedIn</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
