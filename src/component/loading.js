import React from "react";
import styled, { keyframes } from "styled-components"

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Load = styled.div`
  position: absolute;
  left: 45%;
  top: 100%;
  transform: translate(-50%, -50%);
  margin-top: 100px;
  border: 7px solid #f3f3f3;
  border-radius: 50%;
  border-top: 7px solid blue;
  border-right: 7px solid green;
  border-bottom: 7px solid red;
  width: 50px;
  height: 50px;
  animation: ${rotate360} 2s linear infinite;
`;


export const Loading = () => {
  return (
    <Load></Load>
  );
}