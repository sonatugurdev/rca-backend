import React from "react";
import { AppLogo } from "../svgs/AppLogo";
import Button from "@material-ui/core/Button";

export function Header(props) {
  const { windowType } = props;
  return (
    <section className="App-section1">
      <div className="App-logo">
        <AppLogo />
      </div>
      {windowType !== 'mobile' && <div>
        <img className="packing-mockup1" src={require("../pngs/BlueMockUp2.png")} />
        <img className="packing-mockup2" src={require("../pngs/BlueMockUp2.png")} />

      </div>}

      <div className="">
        <p className="header-title-1">
          Wipes for traveling abroad and in your abode
        </p>
        <p className="header-title-2">
          You're one click away from having the cleanest bum in town. If you
          think this might be for you... it definitely is.
        </p>
        <Button
          className={props.classes.root}
          variant="contained"
          onClick={() => { props.handleGetStarted() }}
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}
