import React from "react";
import styled from "styled-components";
import computerImage from "../../src/images/code-optimization.svg"
import githubIcon from "../../src/images/github.svg"

const ProjectDisplay = styled.div `
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
`
const TitleTwo = styled.h3 `
    font-size: 1.25em;
    text-align: center;
`;

const Icon = styled.img `
    display: inline-flex;
    justify-content: center;
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
    display: flex;
    flex-wrap: wrap;
    border: 0.25em solid black;
    border-radius: 2em;
    width: 23em;
    height: 15em;
    float: left;
`

const SampleProjects = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin: 1em;
    padding: 1em;
    font-size: 1.20em;
    line-height: 1.25em;
    width: 20em;
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

    console.log(image, 'this is the image return')
  return (
    <>
<ProjectDisplay>
 
  <LandingPages src={image} alt={alt} />
 
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
  </>
  )
}
// const ProjectDisplay = styled.div `
//   display: grid;
//   height: 100vh;
//   color: white;
// `
// `

// return (
//     <>
// <ProjectDisplay>
//   <div>
//   <img src={image} alt={alt} />
//   </div>
//   <div>
//   <h2>
//     {name}
//   </h2>
//   {description}
//   <div>
//   <center><a href={deployedLink}><Icon src = {computerImage} alt="Link to Deployed Application"/></a>
//   <a href={githubRepoLink}><Icon src ={githubIcon} alt="Repository Link"/></a>
//   </center> </div>
//   </div>
//   </ProjectDisplay>
//   <br></br>
//   </>
//   )
// }