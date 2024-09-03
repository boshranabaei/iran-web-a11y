import './App.scss';
import homeTitleLogo from '../assets/img/home-title-tr.png';
import siteLogo from '../assets/img/logo-tr.png'

function App() {
  return (
      <>
          <header>
              <img id="titleImg" alt="ss" src={homeTitleLogo}/>
              <img id="logoImg" alt="ss" src={siteLogo}/>
          </header>
      </>
  );
}

export default App;
