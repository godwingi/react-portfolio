import React from "react";

export default function TopPage() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="header">
      <h1>Coding with Girdika Godwin</h1>
      <ul className="navbar">
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact Me</li>
        <li>Resume</li>
      </ul>
    </div>
  );
}
