import React from 'react';

export const Context = React.createContext({
  city: '',
  country: '',
  outCountry: '',
  outCity: '',
  temperature: 0,
  humidity: 0,
  condition: '',
  description: '',
  err: '',
  longitude: '',
  latitude: '',
  loading: false
});