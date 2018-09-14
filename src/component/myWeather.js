import React from "react";
import styled from "styled-components";

const Coordinate = styled.div`
  padding-top: 10%;
`;

export const MyWeather = (props) => {
  return (
    <Coordinate>
      <button onClick={props.getMyWeather} className="btn btn-lg btn-success">
        <i className="fa fa-map-marker-alt"></i>
      </button>
    </Coordinate>
  )
}