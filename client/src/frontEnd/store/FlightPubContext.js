import { createContext } from 'react';

const FlightPubContext = createContext({
    authenticated:false,
    searched:false,
    bookingsSelected:false,
    user: '',
    userDetails: {
        firstName:'',
        lastName:'',
        dob:'',
        email:'',
        password:'',
    },
    ip:'',
    lat:'',
    long:'',
    weatherData:'',

    setAuthenticated: (auth) => {},
    setSearched: (search) => {},
    setBookingsSelected: (selected) => {},
    setUser: (user) => {},
    setUserDetails: (details) => {},
    setIP: (_ip) => {},
    setLat: (latitude) =>{},
    setLong: (longitude) => {},
    setWeatherData: (weather) => {}

});

export default FlightPubContext;