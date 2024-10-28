import './home.scss';
import {
    HOME_P1_1, HOME_P1_2, CHECKLIST_DESIGN, CHECKLIST_PROGRAMMING
} from '../assets/strings/constantTitles';

function Home() {
    return (
      <>
        <div id="main_background" className="fade-in">
          <p className="fade-in">{HOME_P1_1}</p>
          <p className="supreme fade-in">{HOME_P1_2}</p>
        </div>

        <div class="flex-container">
          <div className="checklist"><i className="fa-solid fa-list-check"></i>{CHECKLIST_DESIGN}</div>
          <div className="checklist"><i className="fa-solid fa-list-check"></i>{CHECKLIST_PROGRAMMING}</div>
        </div>
          {/* <video controls autoPlay muted loop>
              <source src={tabVideo} type="video/mp4"/>
              {VIDEO_NO_SUPPORT}
          </video> */}
      </>
    );
}

export default Home;
