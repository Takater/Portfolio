import './styles.css';
import Header from './components/Header'
import Contact from './components/Contact'
import Personal from './components/Personal';
import Budget from './components/Budget';

function App() {

  const page = window.location.pathname;

  return (
    <div>
      <header id="headerTag">
        {page === "/" && <Header /> }
        {page === "/projects-done" && <Personal />}
        {page === "/project-budget" && <Budget />}
      </header>
      <hr />
      <Contact />
      <div className="bottom-container">
        <p><em>2023 © Guilherme Moret</em></p>
      </div>
    </div>
  );
}

export default App;
