import './home.scss';
import {
    HOME_P1_1, HOME_P1_2, CHECKLIST_DESIGN, CHECKLIST_PROGRAMMING,
    HOME_S1, HOME_S2, HOME_S3, HOME_S4, HOME_P2_1, HOME_P2_2
} from '../assets/strings/constantTitles';
import homeSum1 from "../assets/img/home-sum-1.jpg";
import homeSum2 from "../assets/img/home-sum-2.png";
import homeSum3 from "../assets/img/home-sum-3.png";
import homeSum4 from "../assets/img/home-sum-4.png";

function Home() {
    return (
      <>
        <div id="main_background" className="fade-in">
          <p className="fade-in">{HOME_P1_1}</p>
          <p className="supreme fade-in">{HOME_P1_2}</p>
        </div>

        <p className="main_p">{HOME_P2_1}</p>
        <p className="main_p">{HOME_P2_2}</p>

        <div className="flex-container">
          <div className="home-summary">
            <img src={homeSum1} alt="sss"/>
            <div>{HOME_S1}</div>
          </div>

          <div className="home-summary">
            <img src={homeSum2} alt="sss"/>
            <div>{HOME_S2}</div>
          </div>

          <div className="home-summary">
            <img src={homeSum3} alt="sss"/>
            <div>{HOME_S3}</div>
          </div>

          <div className="home-summary">
            <img src={homeSum4} alt="sss"/>
            <div>{HOME_S4}</div>
          </div>
        </div>

        <div className="flex-container">
          <a href="/" className="checklist"><i className="fa-solid fa-list-check"></i>{CHECKLIST_DESIGN}</a>
          <a href="/" className="checklist"><i className="fa-solid fa-list-check"></i>{CHECKLIST_PROGRAMMING}</a>
        </div>
          {/* <video controls autoPlay muted loop>
              <source src={tabVideo} type="video/mp4"/>
              {VIDEO_NO_SUPPORT}
          </video> */}
      </>
    );
}

export default Home;
