"use client";

import React, { useState } from "react";
import "./OffCanvas.css";
import { ButtonFont } from "../styles/font";
import Link from "next/link";

const OffCanvas = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="absolute block w-full h-[650px] ml-11 overflow-hidden text-clip">
      <input
        type="checkbox"
        id="toggle"
        checked={toggle}
        onChange={handleToggle}
        className="hidden"
      />
      <label htmlFor="toggle" className="inline-block py-[20px]">
        Nav
      </label>

      <label htmlFor="toggle" className="closer"></label>

      <div className="offcanvas">
        <h1 className="offcanvas-title">NAVIGATION</h1>
        <ul className="offcanvas-list">
          <li className="offcanvas-item">
            <Link href="/todolist" className="text-white">
              TodoList
            </Link>
          </li>
          <li className="offcanvas-item">
            <Link href="/infinite" className="text-white">
              Infinite
            </Link>
          </li>
          <li className="offcanvas-item">
            <Link href="/table" className="text-white">
              Table
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OffCanvas;
