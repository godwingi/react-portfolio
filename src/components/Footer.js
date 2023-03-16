import React from 'react'
import styled from 'styled-components'

const PageEnd = styled.footer `
  font-size: 1.25rem;
  text-align: center;
  color: #011936;
`;

const WrapperTwo = styled.div `
  padding: 1em;
  background: #c0dfa1;
`;

export default function Footer() {
  return (
    <>
    <br></br>
    <WrapperTwo>
    <PageEnd>
    Thank you for taking a look at my page!
    <br></br>© 2023 
    </PageEnd>
    </WrapperTwo>
   </>
  )
}
