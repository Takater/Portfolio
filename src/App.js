import './styles.css';
import Header from './components/Header';
import MainPage from './pages/MainPage'
import Contact from './components/Contact'
import Personal from './pages/Personal';
import Budget from './pages/Budget';
import { useEffect, useState } from 'react';

// Country flag emojis
const brazilFlag = '🇧🇷';
const usaFlag = '🇺🇸';
const italyFlag = '🇮🇹';

function App() {

  // Hook for chosen language
  const [chosenLanguage, setChosenLanguage] = useState('pt');

  // Handle language choosing
  function handleLanguageChange() {
    const language = document.getElementById("languageSelector").value;
    setChosenLanguage(language);
    console.log(language);
    
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
      <Header lang={chosenLanguage} languageChangeHandler={handleLanguageChange} />
      {page === "/" && <MainPage lang={chosenLanguage}/> }
      {page === "/projects-done" && <Personal lang={chosenLanguage}/>}
      {page === "/request-budget" && <Budget lang={chosenLanguage}/>}

      
    </div>
  );
}

export default App;
