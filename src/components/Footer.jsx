import React from "react";
import { ReactComponent as FacebookIcon } from "../icons/facebook-square-brands.svg";
import { ReactComponent as InstagramIcon } from "../icons/instagram-brands.svg";

export default function Footer() {
  return (
    <div
      style={{
        width: "100%",
        bottom: 0,
        marginTop: "2rem",
        backgroundColor: "#011627",
        color: "white",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingTop: "1rem",
          paddingBottom: "3rem",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Contact Details
          </div>
          <a
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.5rem",
            }}
            href="https://doions.com"
          >
            www.doions.com
          </a>
        </div>
        <div>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Address
          </div>
          <div
            style={{
              fontSize: "1.5rem",
              maxWidth: "320px",
            }}
          >
            <div>1st Floor, Raina Tower, </div>
            <div>South Civil Lines, Jabalpur, </div>
            <div>Madhya Pradesh 482001</div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "flex-end",
          }}
        >
          <a
            style={{
              margin: "0.5rem",
              color: "white",
            }}
            href="/#"
          >
            <FacebookIcon width="2.5rem" height="2.5rem" fill="white" />
          </a>
          <a
            style={{
              margin: "0.5rem",
              color: "white",
            }}
            href="/#"
          >
            <InstagramIcon width="2.5rem" height="2.5rem" fill="white" />
          </a>
        </div>
      </div>
    </div>
  );
}
