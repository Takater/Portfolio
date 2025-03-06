import './styles.css';
import Header from './components/Header';
import MainPage from './pages/MainPage'
import Contact from './components/Contact'
import Personal from './pages/Personal';
import Budget from './pages/Budget';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import LanguageSelector from './components/LanguageSelector';
import Work from './pages/Work';

function App() {

  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  // Hook for chosen language
  const [chosenLanguage, setChosenLanguage] = useState('pt');

  // Handle language choosing
  function handleLanguageChange() {
    const language = document.getElementById("languageSelector").value;
    setChosenLanguage(language);
    localStorage.setItem('guimoret-portfolio-chosenLanguage', language);
  }

  // Update cookie if language changes
  useEffect(() => {
    const language = localStorage.getItem('guimoret-portfolio-chosenLanguage') || 'pt'
    setChosenLanguage(language);
  }, []);

  // Determine current page
  const page = window.location.pathname

  return (
    <div>
      <div className="row align-items-start">

        { /* Include header component if not mobile and only language selector otherwise */
        isMobile ? <LanguageSelector languageChangeHandler={handleLanguageChange} /> :
          <div className="col-3">
            <Header lang={chosenLanguage} languageChangeHandler={handleLanguageChange} />
          </div>
        }

        {/* Use col-9 class if not mobile */}
        <div className={isMobile ? "" : "col-9"}>
          {page === "/" && <MainPage lang={chosenLanguage}/> }
          {page === "/projects-done" && <Personal lang={chosenLanguage}/>}
          {page === "/request-budget" && <Budget lang={chosenLanguage}/>}
          {page === "/experience" && <Work lang={chosenLanguage} />}
        </div>
      </div>
      
      {/* CONTACT ME BAR */}
      <hr />
      <Contact lang={chosenLanguage}/>
      <div className="bottom-container">
          <p><em>2025 © Guilherme Moret</em></p>
      </div>
      
    </div>
  );
}

export default App;
