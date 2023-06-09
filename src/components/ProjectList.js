import React from 'react'
import Projects from './Projects'


export default function ProjectList({ projects }) {
  return (
    <div>
        {projects.map((project) => {
          // console.log(project)
        return <Projects key={project.id} {...project} />
})}
    </div>
  )
}
