import React from 'react'
import styled from 'styled-components';

const Navigate = styled.nav `
  padding: 1em;
  background: #465362;
`

const NavButtons = styled.a `
  display: inline-block;
  padding: 0.5em;
  background: #465362;
  color: white;
  text-decoration-line: none;
  font-size: 1.25em;
  cursor: pointer;
  &:hover {
    color : #82a3a1;
  }
`

export default function NavBar() {
  return (
    <>
      <Navigate>
        <nav>
        <NavButtons as="a" href="./components/AboutMe">About Me</NavButtons>
        <NavButtons as="a" href="./components/ProjectList">Projects</NavButtons>
        <NavButtons as="a" href="#">Contact Me</NavButtons>
        <NavButtons as="a" href="#">Resume</NavButtons>
        </nav>
      </Navigate>
     </>
  );
}
