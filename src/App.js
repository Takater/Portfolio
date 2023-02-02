import './styles.css';
import Header from './components/Header'
import Contact from './components/Contact'
import Personal from './components/Personal';
import Budget from './components/Budget';
import { useEffect, useState } from 'react';

// Country flag emojis
const brazilFlag = '🇧🇷';
const usaFlag = '🇺🇸';

function App() {

  // Hook for chosen language
  const [chosenLanguage, setChosenLanguage] = useState('');

  // Handle language choosing
  function handleLanguageChange(language) {
    setChosenLanguage(language);
    localStorage.setItem('chosenLanguage', language);
  }

  // Update cookie if language changes
  useEffect(() => {
    const language = localStorage.getItem('chosenLanguage') || ''
    setChosenLanguage(language);
  }, []);

  // Determine current page
  const page = window.location.pathname


  // Flags component
  function SetLanguage() {
    return(
    <div className='country-flags'>
      <span role='img' aria-label='brazilFlag' onClick={() => handleLanguageChange('pt')}>{brazilFlag}</span>
      <span role='img' aria-label='usaFlag' onClick={() => handleLanguageChange('en')}>{usaFlag}</span>
    </div>
    );
  }

  return (
    <div>
      <header id="headerTag">
        <SetLanguage />
        {/* 
            
            CONDITIONAL RENDERING OF PAGES PASSING LANGUAGE HOOK,
            BASED ON PATHNAME
        
        */}
        {page === "/" && <Header lang={chosenLanguage}/> }
        {page === "/projects-done" && <Personal lang={chosenLanguage}/>}
        {page === "/request-budget" && <Budget lang={chosenLanguage}/>}
      </header>

      {/* CONTACT ME BAR */}
      <hr />
      <Contact lang={chosenLanguage}/>
      <div className="bottom-container">
        <p><em>2023 © Guilherme Moret</em></p>
      </div>
    </div>
  );
}

export default App;
