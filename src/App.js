import './styles.css';
import Header from './components/Header'
import Skills from './components/Skills'
import Education from './components/Education'
import Work from './components/Work'
import Personal from './components/Personal'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Header />
      <hr />
      <Skills />
      <hr />
      <Education />
      <hr />
      <Work />
      <hr />
      <Personal />
      <hr />
      <Contact />
      <div className="bottom-container">
        <p><em>2022 © Guilherme Moret</em></p>
      </div>
    </div>
  );
}

export default App;
