import './home.scss';
import articles from "../articles/articles";
import dis1 from '../assets/img/dis-1.jpg';
import dis2 from '../assets/img/dis-2.jpg';
import dis3 from '../assets/img/dis-3.jpg';
import dis4 from '../assets/img/dis-4.jpg';
import dis5 from '../assets/img/dis-5.jpg';
import {
    HOME_P1_1, HOME_P1_2, VIDEO_NO_SUPPORT,
} from '../assets/strings/constantTitles';
import tabVideo from '../assets/video/tab-navigation.mp4';

function Home() {
    return (
      <>
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
              <div id="home__articles">
                {articles()}
              </div>
              <video controls autoPlay muted loop>
                  <source src={tabVideo} type="video/mp4"/>
                  {VIDEO_NO_SUPPORT}
              </video>
          </main>
      </>
    );
}

export default Home;
