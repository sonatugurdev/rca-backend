import { useEffect, useState } from "react";
import { ScrollIntoView } from "./components/ScrollIntoView";
import { GetStartedModal } from "./components/GetStartedModal";
import { SecondaryMenu } from "./components/SecondaryMenu";
import "./App.css";
import "./fonts/GeorgiaRegularFont.ttf";
import "./fonts/PoppinsRegular.ttf";
import { makeStyles } from "@material-ui/core/styles";
import { FrequencyTypes } from "./helpers/utils";
import { HamburgerMenuIcon } from "./svgs/HamburgerMenuIcon";
import { TeamWorkSection } from "./components/TeamWorkSection";
import { TeamMembersSection } from "./components/TeamMembersSection";
import { Footer } from "./components/Footer";
import { FAQ } from "./components/FAQ";
import { WhatItIsSection } from "./components/WhatItIsSection";
import { Reviews } from "./components/Reviews";
import { ChooseFrequencySection } from "./components/ChooseFrequencySection";
import { Header } from "./components/Header";
import Button from "@material-ui/core/Button";

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

const handleWindowSize = () => {
  const size = window.innerWidth;
  if (size < 481) {
    return 'mobile';
  } else if (size > 480 && size <= 768) {
    return 'tablet';
  } else if (size > 768) {
    return 'desktop';
  }
}

function App() {
  const classes = useStyles();
  const [scrollToSecondSection, setScrollToSecondSection] = useState(false);
  const [scrollToThirdSection, setScrollToThirdSection] = useState(false);
  const [scrollToReviewSection, setScrollToReviewSection] = useState(false);
  const [scrollToTeamWorkSection, setScrollToTeamWorkSection] = useState(false);
  const [scrollToOurTeamSection, setScrollToOurTeamSection] = useState(false);
  const [scrollToBottomSection, setScrollToBottomSection] = useState(false);
  const [frequencyType, setFrequencyType] = useState(FrequencyTypes.aficionado);
  const [scrollToTop, setScrollToTop] = useState(false);
  const [shouldOpenSecondaryMenu, setShouldOpenSecondaryMenu] = useState(false);
  const [shouldGetStartedModalOpen, setShouldGetStartedModalOpen] =
    useState(false);
  const [windowType, setWindowType] = useState('');

  useEffect(() => {
    setWindowType(handleWindowSize())
  }, []);

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
      }, 1000);
    } else if (id === 2) {
      setScrollToThirdSection(true);
      setTimeout(() => {
        setScrollToThirdSection(false);
      }, 1000);
    } else if (id === 3) {
      setScrollToReviewSection(true);
      setTimeout(() => {
        setScrollToReviewSection(false);
      }, 1000);
    } else if (id === 4) {
      setScrollToTeamWorkSection(true);
      setTimeout(() => {
        setScrollToTeamWorkSection(false);
      }, 1000);
    } else if (id === 5) {
      setScrollToOurTeamSection(true);
      setTimeout(() => {
        setScrollToOurTeamSection(false);
      }, 1000);
    } else if (id === 6) {
      setScrollToBottomSection(true);
      setTimeout(() => {
        setScrollToBottomSection(false);
      }, 1000);
    }
    return setShouldOpenSecondaryMenu(false);
  };

  const handleClickAficionado = () => {
    setFrequencyType(FrequencyTypes.aficionado);
    setTimeout(() => {
      handleGetStarted();
    }, 300);
  };

  const handleClickApprentice = () => {
    setFrequencyType(FrequencyTypes.apprentice);
    setTimeout(() => {
      handleGetStarted();
    }, 300);
  };

  const handleClickAssociate = () => {
    setFrequencyType(FrequencyTypes.associate);
    setTimeout(() => {
      handleGetStarted();
    }, 300);
  };

  return (
    <div className="App">
      {windowType === 'mobile' && <ScrollIntoView shouldScroll={scrollToTop}>
        <header className="App-header">
          <span onClick={handleSecondaryMenuOpen}>
            <HamburgerMenuIcon />
          </span>
          <span></span>
        </header>
      </ScrollIntoView>}
    
      <Header handleGetStarted={handleGetStarted} classes={classes} windowType={windowType}/>
      {windowType !== 'mobile' && 
      <div className="navigation-bar">
        <div>WHAT IT IS</div>
        <div>FREQUENCY</div>
        <div>REVIEWS</div>
        <div>TEAMWORK</div>
        <div>FAQ</div>
        <Button
          className={classes.root}
          variant="contained"
          onClick={() => { handleGetStarted() }}
          style={{margin: '20px'}}
        >
          Get Started
        </Button>
      </div>}

      <ScrollIntoView shouldScroll={scrollToSecondSection} windowType={windowType}>
        <WhatItIsSection />
      </ScrollIntoView>

      <ScrollIntoView shouldScroll={scrollToThirdSection}>
        <ChooseFrequencySection
          handleClickAficionado={handleClickAficionado}
          handleClickApprentice={handleClickApprentice}
          handleClickAssociate={handleClickAssociate}
          handleGetStarted={handleGetStarted}
          frequencyType={frequencyType}
          classes={classes}
        />
      </ScrollIntoView>

      <ScrollIntoView shouldScroll={scrollToReviewSection}>
        <Reviews />
      </ScrollIntoView>

      <ScrollIntoView shouldScroll={scrollToTeamWorkSection}>
        <TeamWorkSection />
      </ScrollIntoView>

      <ScrollIntoView shouldScroll={scrollToOurTeamSection}>
        <TeamMembersSection />
      </ScrollIntoView>

      <ScrollIntoView shouldScroll={scrollToOurTeamSection}>
        <FAQ />
      </ScrollIntoView>

      <ScrollIntoView shouldScroll={scrollToBottomSection}>
        <Footer />
      </ScrollIntoView>

      <GetStartedModal
        shouldOpen={shouldGetStartedModalOpen}
        frequencyType={frequencyType}
      />
      <SecondaryMenu
        shouldOpen={shouldOpenSecondaryMenu}
        setBurgerIconToFalseAgain={(id) => handleSecondaryMenuScroll(id)}
      />
    </div>
  );
}

export default App;
