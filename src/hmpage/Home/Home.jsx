import React from "react";
import battery from "./battery.png";
import chevronDown from "./chevron-down.svg";
import favourite2 from "./favourite-2.svg";
import favourite from "./favourite.svg";
import filter from "./filter.svg";
import homeFill from "./home-fill.svg";
import house from "./house.svg";
import image from "./image.png";
import image1 from "./image.svg";
import leftSide from "./left-side.png";
import locationFill from "./location-fill.svg";
import maskGroup2 from "./mask-group-2.png";
import maskGroup from "./mask-group.png";
import message from "./message.svg";
import mobileSignal from "./mobile-signal.svg";
import nearbyYourLocation from "./nearby-your-location.png";
import notificationsOnFill from "./notifications-on-fill.svg";
import profile from "./profile.svg";
import search from "./search.svg";
import "./style.css";
import vector2 from "./vector-2.svg";
import vector from "./vector.svg";
import wifi from "./wifi.svg";

export const Home = () => {
  return (
    <div className="home">
      <div className="div">
        <div className="overlap">
          <img
            className="nearby-your-location"
            alt="Nearby your location"
            src={nearbyYourLocation}
          />

          <div className="rectangle" />

          <div className="nav">
            <img className="profile" alt="Profile" src={profile} />

            <img className="home-fill" alt="Home fill" src={homeFill} />

            <img
              className="heart-favourite"
              alt="Heart favourite"
              src={favourite2}
            />

            <img
              className="comment-message"
              alt="Comment message"
              src={message}
            />

            <img className="search" alt="Search" src={search} />
          </div>
        </div>

        <div className="iphone-x-top-navbar">
          <div className="right-side">
            <img className="battery" alt="Battery" src={battery} />

            <img className="wifi" alt="Wifi" src={wifi} />

            <img
              className="mobile-signal"
              alt="Mobile signal"
              src={mobileSignal}
            />
          </div>

          <img className="left-side" alt="Left side" src={leftSide} />
        </div>

        <div className="location">
          <div className="text-wrapper">Location</div>

          <img className="chevron-down" alt="Chevron down" src={chevronDown} />
        </div>

        <img
          className="notifications-on"
          alt="Notifications on"
          src={notificationsOnFill}
        />

        <img className="location-fill" alt="Location fill" src={locationFill} />

        <div className="text-wrapper-2">California, US</div>

        <div className="text-wrapper-3">Popular</div>

        <div className="text-wrapper-4">Nearby your location</div>

        <div className="text-wrapper-5">seel all</div>

        <div className="text-wrapper-6">seel all</div>

        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <input className="input" placeholder="Search" type="text" />

            <img className="vector" alt="Vector" src={vector2} />
          </div>
        </div>

        <img className="filter" alt="Filter" src={filter} />

        <div className="house">
          <div className="overlap-2">
            <img className="img" alt="House" src={house} />

            <div className="text-wrapper-7">House</div>
          </div>
        </div>

        <div className="apartment">
          <div className="overlap-2">
            <img className="vector-2" alt="Vector" src={vector} />

            <div className="text-wrapper-8">Apartment</div>
          </div>
        </div>

        <div className="land">
          <div className="overlap-2">
            <img className="vector-3" alt="Vector" src={image1} />

            <div className="text-wrapper-9">Land</div>
          </div>
        </div>

        <div className="garage">
          <div className="overlap-2">
            <div className="text-wrapper-9">Garage</div>

            <img className="mask-group" alt="Mask group" src={image} />
          </div>
        </div>

        <div className="home-indicator-light">
          <div className="home-indicator" />
        </div>

        <div className="overlap-wrapper">
          <div className="overlap-3">
            <div className="group">
              <img className="mask-group-2" alt="Mask group" src={maskGroup} />

              <div className="overlap-4">
                <div className="text-wrapper-10">3 Bed Modern House</div>

                <div className="text-wrapper-11">$1,500</div>

                <div className="text-wrapper-12">Henshaw Road California</div>

                <div className="text-wrapper-13">/month</div>

                <div className="div-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-14">House</div>
                  </div>
                </div>

                <img
                  className="location-fill-2"
                  alt="Location fill"
                  src={locationFill}
                />
              </div>
            </div>

            <div className="favourite">
              <img
                className="heart-favourite-2"
                alt="Heart favourite"
                src={favourite}
              />
            </div>
          </div>
        </div>

        <div className="house-2">
          <div className="overlap-5">
            <img className="mask-group-3" alt="Mask group" src={maskGroup2} />

            <div className="group-2">
              <div className="overlap-group-3">
                <div className="rectangle-2" />

                <div className="text-wrapper-15">Apartment</div>

                <div className="rectangle-3" />

                <div className="text-wrapper-16">1 Bed Apartment</div>

                <div className="text-wrapper-17">$720</div>

                <div className="text-wrapper-18">US Metro Area</div>

                <div className="text-wrapper-19">/month</div>

                <img
                  className="location-fill-3"
                  alt="Location fill"
                  src={locationFill}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
