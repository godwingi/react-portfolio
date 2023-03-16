import React from "react";
import computerImage from "../../src/images/code-optimization.svg"
import githubIcon from "../../src/images/github.svg"

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
  <div>
    {name}
  </div>
  <div>
  <img src={image}alt={alt} />
  </div>
  <div>
  {description}
  </div>
  <div>
  <a href={deployedLink}><img src = {computerImage} alt="Link to Deployed Application"/></a>
  <a href={githubRepoLink}><img src ={githubIcon} alt="Repository Link"/></a>
  </div>
  </>
  )
}

