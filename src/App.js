import React, { Component } from 'react';
import './App.css';
import { Title } from "./component/title";
import { Context } from "./component/Context";
import { Home } from "./component/home";
import { Form } from "./component/form";
import { Result } from "./component/result";
import { NavLink, Switch, Route } from "react-router-dom";
import { MyWeather } from "./component/myWeather";
import { Loading } from "./component/loading";
import { About } from "./component/about";


const API_key = '380284a52f078643ef455fdbe7299a3c';
const TIME_GET_API = 1000;

class App extends Component {
  state = {
    city: '',
    country: '',
    outCity: '',
    outCountry: '',
    temperature: null,
    humidity: null,
    condition: '',
    description: '',
    err: null,
    latitude: '',
    longitude: '',
    loading: false
  }

  getAPIWeather = async (latitude, longitude) => {
    const data =
      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}&units=metric`)
      .then( result => { const data = result.json(); return data; })
      .then( data => { return data; })
      .catch(err => console.log(err));
    if (data.message !== undefined) {
      this.setState({
        err: data.message,
        city: '',
        country: '',
        loading: true
      });
    } else if (data.message === undefined) {
      this.setState({
        outCity: data.name,
        outCountry: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        condition: data.weather[0].main,
        description: data.weather[0].description,
        city: '',
        country: '',
        err: '',
        loading: true
      });
    }
  }
  
  getMyWeather = async () => {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        this.setState({
          latitude: latitude,
          longitude: longitude
        });
        setTimeout(() => {
          this.getAPIWeather(latitude, longitude);
        }, TIME_GET_API);
      });
    }
    
  }

  getAPI = async (e) => {
    e.preventDefault();
    const data =
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},
        ${this.state.country}&appid=${API_key}&units=metric`)
      .then(result => { const data = result.json(); return data; })
      .then(data => { return data; })
      .catch(err => console.log(err));
    setTimeout(() => {
      if (data.message !== undefined) {
        this.setState({
          err: data.message,
          city: '',
          country: '',
          loading: true
        });
      } else if (data.message === undefined) {
        this.setState({
          outCity: data.name,
          outCountry: data.sys.country,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          condition: data.weather[0].main,
          description: data.weather[0].description,
          city: '',
          country: '',
          err: '',
          loading: true
        });
      }
      console.log(this.state.err);
    }, TIME_GET_API);
  }
  inputCity = (event) => {
    console.log('input City');
    this.setState({
      city: event.target.value
    })
  }
  inputCountry = (event) => {
    console.log('input Country');
    this.setState({
      country: event.target.value
    })
  }
  reset = () => {
    this.setState({
      city: '',
      country: '',
      outCity: '',
      outCountry: '',
      temperature: null,
      humidity: null,
      condition: '',
      description: '',
      err: null,
      latitude: '',
      longitude: '',
      loading: false
    })
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-5 introduction">
              <Title />
            </div>
            <div className="col-md-7 text-center">
              <NavLink exact to="/">
                <button className="btn btn-md btn-success">Home</button>
              </NavLink>
              <NavLink to="/manual" exact>
                <button onClick={this.reset} className="btn btn-md btn-success">
                  Input
                </button>
              </NavLink>
              <NavLink to="/auto" exact>
                <button onClick={this.reset} className="btn btn-md btn-success">
                  My Position
                </button>
              </NavLink>
              <NavLink exact to="/about">
                <button className="btn btn-md btn-success">About</button>
              </NavLink>

              <Switch>
                <Route exact path="/" render={() => (<Home />)} />
                <Route path="/manual" render={() => (
                  <div>
                    <Form inputCity={this.inputCity}
                      inputCountry={this.inputCountry}
                      onSubmit={this.getAPI}
                    />
                    {
                      (this.state.loading !== false) ?
                      (
                        <Result
                          city={this.state.outCity}
                          country={this.state.outCountry}
                          temperature={this.state.temperature}
                          humidity={this.state.humidity}
                          condition={this.state.condition}
                          description={this.state.description}
                          err={this.state.err}
                        />
                      ) :
                      (<Loading/>)
                    }
                  </div>
                )}/>
                <Route path="/auto" render={() => (
                  <div>
                    <MyWeather getMyWeather={this.getMyWeather} />
                    {
                      (this.state.latitude !== '') ? (
                        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=500x100&sensor=false&key=AIzaSyBzxcdgnG0FNgcEfhVCsOb8fRR4t7llqpk`} alt="ok" />
                      ): (<h2>Click Above</h2>)
                    }
                    {
                      (this.state.condition !== '') ?
                        (
                          <Result
                            city={this.state.outCity}
                            country={this.state.outCountry}
                            temperature={this.state.temperature}
                            humidity={this.state.humidity}
                            condition={this.state.condition}
                            description={this.state.description}
                            err={this.state.err}
                          />
                        ) :
                        ((this.state.loading===false)?(""):(< Loading />))
                    }
                  </div>
                )} />
                <Route path="/about" component={About}/>
              </Switch>
            </div>
          </div>
        </div>
      </Context.Provider>
    );
  }
}

export default App;