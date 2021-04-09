import React from "react";
import { ReactComponent as LogoIcon } from "../icons/icon.svg";

export default function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "#011627",
      }}
    >
      <nav
        className="container"
        style={{
          height: "6rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <a
          href="https://doions.com"
          style={{
            height: "80%",
          }}
        >
          <LogoIcon height="100%" />
        </a>
      </nav>
    </div>
  );
}
