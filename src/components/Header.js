import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img
        src={require("../images/troll-face.jpeg")}
        alt=""
        className="header--image"
      />
      <h2 className="header--title">Header component</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}
