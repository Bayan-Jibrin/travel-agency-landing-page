import React from "react";
import "./booktrip.css";
import Value from "../../components/value/Value";
import {
  icon1,
  watersport,
  TaxiCar,
  image2,
  leaf,
  map1,
  send,
  image1,
  building,
  heart,
} from "./imports";


const BookTrip = () => {
  const Text =
    "Lorem ipsum dolor sit amet ,consectetur adipiscing elit. Urna, tortor tempus.";
  return (
    <div className="travel__booktrip" id="bookings">
      <div className="travel__booktrip-steps">
        <div className="travel__booktrip-steps_heading">
          <p>Easy and Fast</p>
          <h1>
            Book Your Next Trip
            <br />
            In 3 Easy Steps
          </h1>
        </div>
        <div className="travel__booktrip-steps_Values">
          <Value icon={icon1} title="Choose Destination" text={Text} background="#F0BB1F" _width="46.8%" _height="45.83%" _top="27.083%" _left="26.59%" />
          <Value icon={watersport} title="Make Payment" text={Text} background="#F15A2B" _width="46.9%" _height="37.2%" _top="29.31%" _left="27.45%" />
          <Value
            icon={TaxiCar}
            title="Reach Airport on Selected Date"
            text={Text}
            background="#006380" _width="47.87%" _height="39.06%" _top="32.54%" _left="27.02%"
          />
        </div>
      </div>
      <div className="travel__booktrip-image">
         <div className='travel__booktrip-image_ellipse'><div></div></div> 
        <div className="travel__booktrip-image_groubA">
          <img src={image2} alt="image2" />
          <h2>Trip To Greece</h2>
          <div className="travel__booktrip-image_groubA-text">
            <p>
              14-29 june by<span></span>Robbin joseph
            </p>
          </div>
          <div className="travel__booktrip-image_groubA-options">
            <div>
              <img src={leaf} alt="leaf" />
            </div>
            <div>
              <img src={map1} alt="map1" />
            </div>
            <div>
              <img src={send} alt="send" />
            </div>
          </div>
          <div className="travel__booktrip-image_groubA-line">
            <img src={building} alt="building" />
            <p>24 people going</p>
          </div>
          <img src={heart} alt="heart" />
          <div className="travel__booktrip-image_groubA-groubB">
            <div className="travel__booktrip-image_groubA-groubB-image">
              <img src={image1} alt="image1" />
            </div>
            <div className="travel__booktrip-image_groubA-groubB-text">
              <p>Ongoing</p>
              <h2>Trip To rome</h2>
              <p>
                <span>40%</span>completed
              </p>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTrip;
