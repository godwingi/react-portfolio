import React from 'react'
import styled from 'styled-components'
import helloBitmoji from "../../src/images/hello.png"
import githubIcon from "../../src/images/github.svg"
import linkedinIcon from "../../src/images/linkedin.svg"

const TitleOne = styled.h2 `
    font-size: 2.5em;
    text-align: center;
`;

const HelloImage = styled.img `
    display: flex;
    flex-wrap: wrap;
    margin-top: 2em;
    border-left: 20px solid black;
    width: 20em;
    height: 20em;
    float: left;
`;
const About = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin: 1em;
    padding: 1em;
    font-size: 1.25em;
    line-height: 1.25em;
    text-align: justify;
`;

const Icon = styled.img `
    display: inline-block;
    margin: 1.25em;
    align-content: center;
    width: 5em;
    height: 5em;
    margin-left: 5.5;
    border-radius: 10%;
    cursor: pointer;
    &:hover {
        background: #c0dfa1;
        border-radius: 4em;
    };
`;

export default function AboutMe() {
  return (
    <>
    <TitleOne>About Me <br></br>Welcome to my Porfolio!</TitleOne>
   <HelloImage src={helloBitmoji} alt="BitmojiMe" />
   <About>Hello! I'm Girdika, a teacher by day, and a coder by night,
        ... or whenever I get the chance! 
        
        I decided to take a Coding Bootcamp in order to learn
        more about the world of "code". It has always been an interest of mine
        and I wish I had decided to take a Computer Science Major in University.
        It is also relevant with the Curriculum changes that incorporate Coding
        skills and prequisites for students, in the sense that coding tends to make
        "more sense" in how I could possibly teach the necessary skills. 

        <br></br><br></br>Anyways, enough about WHY I'm coding, and more onto what I can code.

        If you peruse through my projects tab, you will see projects that I have
        coded through my Coding Bootcamp. This includes group projects, and some
        solo assignments that I completed myself.

        You'll most likely see a major change between when I first started to now, and
        hopefully to future changes as well, as I update my Projects in this portfolio.

        Please do not hesitate to contact me --currently disabled-- if you have any questions!

        Cheers! 
        </About>

       <center><a href="https://github.com/godwingi"><Icon src={githubIcon}alt="githubIcon" /></a>
        <a href="https://ca.linkedin.com/in/girdika-godwin-a810ab4b"><Icon src={linkedinIcon}alt="linkedinIcon" /></a>
        </center>
    </>
  )
}
