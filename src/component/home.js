import React from "react";
import styled from "styled-components";
import introduction from "../img/introduction.png"
const Introduction = styled.div`
  margin-top: 10%;
`;

export const Home = (props) => {
  return (
    <Introduction>
      <h2>The Weather</h2>
      <img
        className="img-responsive" src={introduction}
        alt="theWorld"
      />
      <h2>Everything in the world</h2>
    </Introduction>
  );
}

