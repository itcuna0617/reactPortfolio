import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <nav className="bg-green-200 px-4">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <h1>
            <Link to="/" className="block h-full">
              LOGO
            </Link>
          </h1>
          <ul className="hidden md:flex gap-4">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/">INTRODUCE</Link>
            </li>
            <li>
              <Link to="/">TECH STACK</Link>
            </li>
            <li>
              <Link to="/">STUDY</Link>
            </li>
            <li>
              <Link to="/">PROJECT</Link>
            </li>
          </ul>
          <ul className="hidden md:flex gap-4">
            <li>GitHub</li>
            <li>Notion</li>
          </ul>
          <div className="flex md:hidden justify-center items-center w-8 hover:scale-110">
            <img src="src\assets\images\menuBtn.svg" alt="" />
          </div>
        </div>
      </nav>
      <div>{children}</div>
      <footer className=""></footer>
    </>
  );
}

export default Layout;
