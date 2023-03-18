import React from 'react'
import styled from 'styled-components'

const ResumePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleFour = styled.h2`
  font-size: 2.5em;
  text-align: center;
`;

const TitleFive = styled.h3`
  font-size: 2em;
  text-align: left;
`;

const ResumeFont = styled.div`
  font-size: 1.25em;
  line-height: 1.25em;
`;

const TechnologiesFont = styled.ul`
  font-size: 1.25em;
  line-height: 1.25em;
`;

const TechLi = styled.li`
  margin: 0;
`;

export default function Resume() {
  return (
    <ResumePage>
      <div><TitleFour>Resume and Technologies</TitleFour>
      <ResumeFont>Resume available upon request.</ResumeFont>
      </div>
      <div><TitleFive>Front End Technologies Learned</TitleFive>
      <TechnologiesFont>
        <TechLi>HTML</TechLi>
        <li>CSS</li>
        <li>React</li>
        <li>NPM</li>
        <li>GraphQL</li>
      </TechnologiesFont>
      </div>
      <div>
      <TitleFive>Back End Technologies Learned</TitleFive>
      <TechnologiesFont>
        <li>JavaScript</li>
        <li>NodeJS</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>Apollo</li>
      </TechnologiesFont>
      </div>
    </ResumePage>
  )
}
