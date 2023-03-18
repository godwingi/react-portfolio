import React from "react";
import styled from "styled-components";

const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleThree = styled.h2`
  font-size: 2.5em;
  text-align: center;
`;

const ContactFont = styled.label`
  margin: 1em;
  padding: 1em;
  font-size: 1.25em;
  line-height: 1.25em;
`;

const Message = styled.label`
  margin: 1em;
  padding: 1em;
  font-size: 1.25em;
  line-height: 1.25em;
`;

const Input = styled.input`
  font-size: 1.25em;
  line-height: 1.25em;
  border-radius: 0.5em;
  width: 20em;
  padding: 0.25em;
  margin-left: 2em;
  margin-bottom: 1em;
`;
const TextArea = styled.textarea`
  font-size: 1.25em;
  line-height: 1.25em;
  border-radius: 0.5em;
  padding: 6em;
  margin-left: 2em;
`;

const Button = styled.button`
  background: #465362;
  color: white;
  line-height: 1.25;
  font-family: inherit;
  font-size: 1.25em;
  margin: 2em;
  padding: 0.5em 1em;
  border-radius: 2em;
  cursor: pointer;
  &:hover {
    color: black;
    background: #9fc490;
  }
`;
export default function Contact() {
  return (
    <ContactPage>
      <TitleThree>Contact Me!</TitleThree>
      <div>
        <ContactFont htmlFor="name">Name:</ContactFont> <br />
        <Input type="text" name="name" id="name" />
      </div>
      <div>
        <ContactFont htmlFor="email">E-mail Address:</ContactFont>
        <br />
        <Input type="text" name="email" id="email" />
      </div>
      <div>
        <Message htmlFor="message">Message: </Message>
        <br />
        <TextArea name="message" id="message" />
      </div>
      <div>
        <Button>Submit</Button>
      </div>
    </ContactPage>
  );
}
