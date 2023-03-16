import React from "react";
import styled from "styled-components"

const Title = styled.h1 `
  font-size: 4rem;
  text-align: center;
  color: #011936;
`;

const Wrapper = styled.div `
  padding: 3em;
  background: #c0dfa1;
`;

export default function Header() {
  return (
    <Wrapper>
      <Title>Coding with Girdika Godwin</Title>
    </Wrapper>
  );
}
