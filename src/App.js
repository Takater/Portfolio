import './styles.css';
import Header from './components/Header'
import Contact from './components/Contact'
import Personal from './components/Personal';
import Budget from './components/Budget';
import { useState } from 'react';

function App() {

  const [chosenLanguage, setChosenLanguage] = useState('en');

  const brazil = '🇧🇷';
  const usa = '🇺🇸';

  function SetLanguage() {
    return(
    <div className='country-flags'>
      <span role='img' aria-label='brazil' onClick={() => setChosenLanguage('pt')}>{brazil}</span>
      <span role='img' aria-label='usa' onClick={() => setChosenLanguage('en')}>{usa}</span>
    </div>
    );
  }

  const page = window.location.pathname;

  return (
    <div>
      <header id="headerTag">
        <SetLanguage />
        {page === "/" && <Header lang={chosenLanguage}/> }
        {page === "/projects-done" && <Personal lang={chosenLanguage}/>}
        {page === "/require-budget" && <Budget lang={chosenLanguage}/>}
      </header>
      <hr />
      <Contact lang={chosenLanguage}/>
      <div className="bottom-container">
        <p><em>2023 © Guilherme Moret</em></p>
      </div>
    </div>
  );
}

export default App;
