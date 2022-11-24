import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { IoIosArrowDropdown } from "react-icons/io";
import { ScrollIntoView } from "./components/ScrollIntoView";
import { GetStartedModal } from "./components/GetStartedModal";
import { SecondaryMenu } from "./components/SecondaryMenu";
import { FrequencyCard } from './components/FrequencyCard';
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { FrequencyTypes } from "./helpers/utils"

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "none",
    background: "black",
    color: "white",
    height: "54px",
    width: "185px",
    marginBottom: "35px",
  },
}));

function App() {
  const classes = useStyles();
  const [scrollToSecondSection, setScrollToSecondSection] = useState(false);
  const [scrollToThirdSection, setScrollToThirdSection] = useState(false);
  const [scrollToBottomSection, setScrollToBottomSection] = useState(false);
  const [frequencyType, setFrequencyType] = useState(FrequencyTypes.aficionado);
  const [scrollToTop, setScrollToTop] = useState(false);
  const [shouldOpenSecondaryMenu, setShouldOpenSecondaryMenu] = useState(false);
  const [shouldGetStartedModalOpen, setShouldGetStartedModalOpen] =
    useState(false);

  const handleClickArrowDownButton = () => {
    // setScrollToSecondSection(true);
    // setTimeout(() => {
    //   setScrollToSecondSection(false);
    // }, 300);

    setScrollToTop(true);
    setTimeout(() => {
      setScrollToTop(false);
    }, 300);
  };

  const handleGetStarted = () => {
    setShouldGetStartedModalOpen(true);
    setTimeout(() => {
      setShouldGetStartedModalOpen(false);
    }, 300);
  };

  const handleSecondaryMenuOpen = () => {
    setShouldOpenSecondaryMenu(true);
  };

  const handleSecondaryMenuScroll = (id) => {
    if (id === 1) {
      setScrollToSecondSection(true);
      setTimeout(() => {
        setScrollToSecondSection(false);
      }, 300);
    } else if (id === 2) {
      setScrollToThirdSection(true);
      setTimeout(() => {
        setScrollToThirdSection(false);
      }, 300);
    } else if (id === 3) {
    } else if (id === 4) {
    } else if (id === 5) {
      setScrollToBottomSection(true);
      setTimeout(() => {
        setScrollToBottomSection(false);
      }, 300);
    }
    return setShouldOpenSecondaryMenu(false);
  };
  
  const handleClickAficionado = () => {
    setFrequencyType(FrequencyTypes.aficionado);
  }

  const handleClickApprentice = () => {
    setFrequencyType(FrequencyTypes.apprentice);
  }

  const handleClickAssociate = () => {
    setFrequencyType(FrequencyTypes.associate);
  }

  return (
    <div className="App">
      <ScrollIntoView shouldScroll={scrollToTop}>
        <header className="App-header">
          <img
            src={process.env.PUBLIC_URL + "/assets/hamburger.png"}
            className=""
            onClick={handleSecondaryMenuOpen}
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/searchIcon.png"}
            className=""
          />
        </header>
      </ScrollIntoView>

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
            You're one click away from having the cleanest bum in town. If you
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
        <div className="App-section2">
          <img
            src={process.env.PUBLIC_URL + "/assets/astronaut-mobile.png"}
            className="astronaut-pic"
            alt="logo"
          />
          <p className="section2-title">This too shall pass!</p>
          <p className="section2-body1">
            Sign up to the Real Clean Ass-entials subscription box and receive
            flushable wipes for when you’re in the Abode or Abroad. Each box
            contains 144 wipes divided between 2 packs of 42 wipes for the home
            and 60 individually packaged wipes for when you’re out and about,
            and a little bathroom surprise just for you! All this for just{" "}
            <b>$24.99</b> per box.
          </p>
          <p className="section2-body2">
            All you need to do is let us know how often you go to the loo, don’t
            be shy, we all do!
          </p>
        </div>
      </ScrollIntoView>

      <ScrollIntoView shouldScroll={scrollToThirdSection}>
        <div className="App-section3">
          <div className="section-divider" />
          <p className="section3-title">Choose your frequency</p>
          <p className="section3-body1">
            Select from the following subscription choices:
          </p>
          <div onClick={handleClickAficionado}>
          <FrequencyCard frequencyType={FrequencyTypes.aficionado} selected={frequencyType === FrequencyTypes.aficionado}/> 
          </div>
          <div onClick={handleClickApprentice}>
          <FrequencyCard frequencyType={FrequencyTypes.apprentice} selected={frequencyType === FrequencyTypes.apprentice} /> 
          </div>
          <div onClick={handleClickAssociate}>
          <FrequencyCard frequencyType={FrequencyTypes.associate} selected={frequencyType === FrequencyTypes.associate} />   
          </div>

          <div className="Section3-packaging-mock">Packaging Mock</div>
          <Button
            className={classes.root}
            variant="contained"
            onClick={handleGetStarted}
          >
            Subscribe
          </Button>
        </div>
      </ScrollIntoView>

      <ScrollIntoView shouldScroll={scrollToBottomSection}>
        <div className="App-footer">
          <p className="contact-us">
            Contact us at: <span className="underlined">hello@rca.com</span>
          </p>
          <div className="divider" />
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
          <div className="rights-reserved">
            © 2022 Real Clean Associations. All rights reserved.
          </div>
        </div>
      </ScrollIntoView>

      <GetStartedModal shouldOpen={shouldGetStartedModalOpen} frequencyType={frequencyType} />
      <SecondaryMenu
        shouldOpen={shouldOpenSecondaryMenu}
        setBurgerIconToFalseAgain={(id) => handleSecondaryMenuScroll(id)}
      />
    </div>
  );
}

export default App;
