import React from "react";
import styled from "styled-components";
import computerImage from "../../src/images/code-optimization.svg"
import githubIcon from "../../src/images/github.svg"

const ProjectDisplay = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    flex-direction: row-reverse;

`
const TitleTwo = styled.h3 `
    font-size: 1.5em;
    text-align: center;
`;

const Icon = styled.img `
    display: inline-block;
    align-content: center;
    margin: 0.5em;
    width: 2.5em;
    height: 2.5em;
    border-radius: 10%;
    cursor: pointer;
    &:hover {
        background: #c0dfa1;
        border-radius: 4em;
    };
`;

const LandingPages = styled.img `
    border: 0.25em solid black;
    border-radius: 2em;
    width: 20em;
    height: 20em;
    float: left;
`

const SampleProjects = styled.div `
    margin: 1em;
    padding: 1em;
    font-size: 1.25em;
    line-height: 1.25em;
    text-align: justify;
`
export default function Projects(props) {
    const {
        name,
        image,
        alt,
        description,
        deployedLink,
        githubRepoLink,
    } = props
  return (
    <>
<ProjectDisplay>
  <div>
  <LandingPages src={image}alt={alt} />
  </div>
  <SampleProjects>
  <TitleTwo>
    {name}
  </TitleTwo>
  {description}
  <div>
  <center><a href={deployedLink}><Icon src = {computerImage} alt="Link to Deployed Application"/></a>
  <a href={githubRepoLink}><Icon src ={githubIcon} alt="Repository Link"/></a>
  </center> </div>
  </SampleProjects>
  </ProjectDisplay>
  <br></br>
  </>
  )
}

