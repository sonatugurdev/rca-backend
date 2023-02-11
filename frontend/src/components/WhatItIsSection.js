import React from "react";

export function WhatItIsSection(props) {
  const { windowType } = props;
  const imageSource = windowType && windowType !== 'mobile' ? '../pngs/astronaut.png' : '../pngs/astronaut-mobile.png'
  return (
    <div className="App-section2">
      <img
        src={require('../pngs/astronaut-mobile.png')}
        className={"astronaut-pic-mobile"}
      />
      <div>
        <p className="section2-title">This too shall pass!</p>
        <p className="section2-body1">
          Sign up to the Real Clean Ass-entials subscription box and receive
          flushable wipes for when you’re in the Abode or Abroad. Each box
          contains 144 wipes divided between 2 packs of 42 wipes for the home and
          60 individually packaged wipes for when you’re out and about, and a
          little bathroom surprise just for you! All this for just <b>$24.99</b>{" "}
          per box.
        </p>
        <p className="section2-body2">
          All you need to do is let us know how often you go to the loo, don’t be
          shy, we all do!
        </p>
      </div>
    </div>
  );
}
