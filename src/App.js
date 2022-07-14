import './styles.css';
import Header from './components/Header'
import Skills from './components/Skills'
import Education from './components/Education'
import Work from './components/Work'
import Personal from './components/Personal'
import Contact from './components/Contact'
import KDAUIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function App() {

  function goToTop () {
    window.location.hash = "#headerTag"
  }

  function buttonTop () {
    return (
      <button id="back2Top" onClick={goToTop}>
        <KDAUIcon 
          fontSize="large"
        />
      </button>
    );
  }

  return (
    <div>
      <Header />
      <hr />
      <Skills />
      {buttonTop()}
      <hr />
      <Education />
      {buttonTop()}
      <hr />
      <Work />
      {buttonTop()}
      <hr />
      <Personal />
      {buttonTop()}
      <hr />
      <Contact />
      <div className="bottom-container">
        <p><em>2022 © Guilherme Moret</em></p>
      </div>
    </div>
  );
}

export default App;
