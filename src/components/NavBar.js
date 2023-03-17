import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navigate = styled.nav `
  padding: 1em;
  background: #465362;
`

export const NavLink = styled(Link) `
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
  &:active {
    color: #82a3a1;
  }
`

export default function NavBar() {
  
  return (
    <>
      <Navigate>
        <nav>
        <NavLink to="/">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact-me">Contact Me</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        </nav>
      </Navigate>
     </>
  );
}
