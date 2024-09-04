import './App.scss';
import useWindowSize from '../hooks/useWindowsSize'
import navigation from "../navigation/navigation";
import homeTitleLogo from '../assets/img/home-title-tr.png';
import siteLogo from '../assets/img/logo-tr.png'
import dis1 from '../assets/img/dis-1.jpg';
import dis2 from '../assets/img/dis-2.jpg';
import dis3 from '../assets/img/dis-3.jpg';
import dis4 from '../assets/img/dis-4.jpg';
import dis5 from '../assets/img/dis-5.jpg';
import {
    HOME_P1_1, HOME_P1_2
} from '../assets/strings/constantTitles';

function App() {
    const windowSize = useWindowSize();
    return (
      <>
          <header>
              {windowSize.width < 450 ? navigation(windowSize.width) : null}
              <a href={'/'}>
                <img id="titleImg" alt="ss" src={homeTitleLogo} />
                <img id="logoImg" alt="ss" src={siteLogo}/>
              </a>
              <br/>
              {windowSize.width >= 450 ? navigation(windowSize.width) : null}
          </header>
          <main>
              <p>{HOME_P1_1}</p>
              <p className="supreme">{HOME_P1_2}</p>
              <div id="homeDisImgs" className="fade-in">
                  <img alt="ss" src={dis1}/>
                  <img alt="ss" src={dis2}/>
                  <img alt="ss" src={dis3}/>
                  <img alt="ss" src={dis4}/>
                  <img alt="ss" src={dis5}/>
              </div>
          </main>
      </>
    );
}

export default App;
