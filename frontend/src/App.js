import { useState } from "react";
import Button from "@material-ui/core/Button";
import { IoIosArrowDropdown } from "react-icons/io";
import { ScrollIntoView } from "./components/ScrollIntoView";
import { GetStartedModal } from "./components/GetStartedModal";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { composeClasses } from "./helpers/composeClasses";

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "none",
    background: "black",
    color: "white",
    height: "54px",
    width: "185px",
    marginBottom: '35px'
  },
}));

function App() {
  const classes = useStyles();
  const [scrollToSecondSection, setScrollToSecondSection] = useState(false);
  const [shouldGetStartedModalOpen, setShouldGetStartedModalOpen] =
    useState(false);

  const handleClickArrowDownButton = () => {
    setScrollToSecondSection(true);
    setTimeout(() => {
      setScrollToSecondSection(false);
    }, 300);
  };

  const handleGetStarted = () => {
    setShouldGetStartedModalOpen(true);
    setTimeout(() => {
      setShouldGetStartedModalOpen(false);
    }, 300);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/assets/hamburger.png"}
          className=""
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/searchIcon.png"}
          className=""
        />
      </header>
      <section className="App-section1">
        <img
          src={process.env.PUBLIC_URL + "/assets/brand-logo.png"}
          className="App-logo"
          alt="logo"
        />
        <div className="">
          <p className="header-title-1">
            Wipes for traveling abroad and in your abode
          </p>
          <p className="header-title-2">
            You're one click away from having the cleanest bum in town.If you
            think this might be for you... it definitely is.
          </p>
          <Button
            className={classes.root}
            variant="contained"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
          <div className="ios-drop-down-arrow">
            <IoIosArrowDropdown onClick={handleClickArrowDownButton} />
          </div>
        </div>
      </section>
      <ScrollIntoView shouldScroll={scrollToSecondSection}>
        <div id="secondSection" className="second-section">
          <img
            src={process.env.PUBLIC_URL + "/assets/astronaut-mobile.png"}
            className="astronaut-pic"
            alt="logo"
          />
        </div>
      </ScrollIntoView>
      <section className="App-section2">
      <p className="section2-title">
            This too shall pass!
          </p>
          <p className="section2-body1">
          Sign up to the Real Clean Ass-entials subscription box and receive flushable wipes for when you’re in the Abode or Abroad. Each box contains 144 wipes divided between 2 packs of 42 wipes for the home and 60 individually packaged wipes for when you’re out and about, and a little bathroom surprise just for you! All this for just <b>$24.99</b> per box.
          </p>
          <p className="section2-body2">
          All you need to do is let us know how often you go to the loo, don’t be shy, we all do!
          </p>
          
      </section>
      <div className="App-footer">
        <p className="contact-us">Contact us at: <span className="underlined">hello@rca.com</span></p>
        <div  className="divider"/> 
        <div className="support-careers-privacy-terms">
          <span>Support</span>
          <span>Careers</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/assets/footerSocials.png"}
          className="footer-socials"
        />
        <div className="privacy-policy">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>
        <div className="rights-reserved">© 2022 Real Clean Associations. All rights reserved.</div>
      </div>
      <GetStartedModal shouldOpen={shouldGetStartedModalOpen} />
    </div>
  );
}

export default App;
