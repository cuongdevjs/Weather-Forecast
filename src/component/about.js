import React from "react";
import styled from "styled-components";

const Author = styled.div`
  margin-top: 50px;
`;

export const About = () => {
  return (
    <Author className="text-center ">
      <p>Author:</p>
      <p>Nguyen Manh Cuong</p>
      <img src="https://media1.tenor.com/images/fe9bfc854d5beb97e8591fc3e066b896/tenor.gif?itemid=9856642"
        alt="ok" />
    </Author>
  )
}