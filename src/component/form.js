import React from 'react';
import {Context} from "./Context";

export const Form = (props)  => {
  return (
      <form onSubmit={props.onSubmit}>
        <div className="form-horizontal">
          <div className="control-label col-md-2">
            <label htmlFor="city">Input City</label>
          </div>
          <Context.Consumer>
            {({city}) => (
            <div className="col-md-10">
              <input required className="form-control" onChange={props.inputCity} value={city} id="city" />
            </div>
            )}
          </Context.Consumer>
        </div>
        <div className="form-group">
          <div className="control-label col-md-2">
            <label htmlFor="country">Country</label>
          </div>
          <Context.Consumer>
            {({ country }) => (
              <div className="col-md-10">
                <input required className="form-control" onChange={props.inputCountry} value={country}
                  id="country" />
              </div>
            )}
          </Context.Consumer>
        </div>
        <button className="btn btn-outline-info btn-success">Search</button>
      </form>
  );
}