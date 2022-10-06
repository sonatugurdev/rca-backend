import {useState} from 'react';
import Button from '@material-ui/core/Button';
import { IoIosArrowDropdown } from 'react-icons/io';
import { ScrollIntoView } from './components/ScrollIntoView';
import { GetStartedModal } from './components/GetStartedModal';
import './App.css';

function App() {
  const [scrollToSecondSection, setScrollToSecondSection] = useState(false);
  const [shouldGetStartedModalOpen, setShouldGetStartedModalOpen] = useState(false);

  const handleClickArrowDownButton = () => {
    setScrollToSecondSection(true);
    setTimeout(() => {
      setScrollToSecondSection(false);
    },300)
  }

  const handleGetStarted = () => {
    setShouldGetStartedModalOpen(true);
    setTimeout(() => {
      setShouldGetStartedModalOpen(false);
    },300)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/assets/brand-logo.png'} className="App-logo" alt="logo"/>
        <div>
          <p className="header-title-1">Wipes for traveling abode and abroad</p>
          <p className="header-title-2">You're one click away from having the cleanest bum in town.</p>
          <p className="header-title-3">If you think this might be for you... it definitely is.</p>
          <Button variant="contained" onClick={handleGetStarted}>Get Started</Button>
          <div className="ios-drop-down-arrow">
            <IoIosArrowDropdown onClick={handleClickArrowDownButton}/>
          </div>
        </div>
      </header>
      <ScrollIntoView shouldScroll={scrollToSecondSection}>
        <div id="secondSection" className="second-section">
          Second section
          <img src={process.env.PUBLIC_URL + '/assets/astronaut.png'} className="astronaut-pic" alt="logo"/>
        </div>
      </ScrollIntoView>
      <GetStartedModal shouldOpen={shouldGetStartedModalOpen}/>
    </div>
  );
}

export default App;