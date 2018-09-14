import React from "react";
import styled, {css} from "styled-components";
const separate = css``;

const ImageWeather = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  height: 50%;
`;

const Consequence = styled.div`
  text-align: left;
  margin-top: 10%;
`;

const Position = styled.div`
  padding-top: 20px;
  ${separate};
`;
const Temperature = styled.div``;
const Humidity = styled.div``;
const Condition = styled.div``;
const Description = styled.div``;


const Error = styled.div`

`;

export const Result = (props) => {
  let imgWeather = '';
  if (props.condition !== '') {
    if (props.condition.toLowerCase() === 'clouds') {
      imgWeather = 'http://gifimage.net/wp-content/uploads/2018/06/weather-gif-9.gif';
    }
    if (props.condition.toLowerCase() === 'rain') {
      imgWeather = 'https://i.makeagif.com/media/10-22-2015/3cIhGK.gif';
    }
    if (props.condition.toLowerCase() === 'clear') {
      imgWeather = 'https://cdn.dribbble.com/users/261567/screenshots/1099769/googleweather.gif';
    }
    if (props.condition.toLowerCase() === 'thunderstorm') {
      imgWeather = 'https://media.giphy.com/media/bMhMvm2wmkluE/giphy.gif';
    }
  }
  if (props.err === '') {
    return (
      <div style={{overflow: "hidden"}}>
        <Consequence className="col-md-5">
          <Position>
            <p>City:     <strong>{props.city}</strong></p>
            <p>Country:    <strong>{props.country}</strong></p>
          </Position>
          <Temperature>
            <p>Temperature:    <strong>{props.temperature}</strong></p>
          </Temperature>
          <Humidity>
            <p>Humidity:    <strong>{props.humidity}</strong></p>
          </Humidity>
          <Condition>
            <p>Condition:    <strong>{props.condition}</strong></p>
          </Condition>
          <Description>
            <p>Description:    <strong>{props.description}</strong></p>
          </Description>
        </Consequence>
        {(props.condition !== '') ? (
          <ImageWeather className="col-md-7">
            <img className="img-responsive img-thumbnail" src={imgWeather} alt="weather" />
          </ImageWeather>
        ):("")}
      </div>
    );
  } else if(props.err !== '') {
    return (
      <div>
        <h1>Error Appear</h1>
        <Error>{props.err}</Error>
      </div>
    )
  }
}