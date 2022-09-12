import React from "react";
import {  Services,Header ,Subscribe , Footer,Destinations ,Testimonials ,BookTrip } from "./containers";
import { Logos ,Navbar } from './components';

import "./App.css";

const App = () => {
  return (
    <div className="App">
       <div className='decore__bg'>
          <Navbar /> 
          <Header />
    </div> 
      <Services/>
      <Destinations />
      <BookTrip/>
      <Testimonials/>
      <Logos />
      <Subscribe/>
      <Footer />
    </div>
  );
};

export default App;
