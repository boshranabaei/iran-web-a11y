import './home.scss';
import { useState, useEffect } from "react";

function Home() {
  const [strings, setStrings] = useState({});

  useEffect(() => {
      fetch(`${process.env.PUBLIC_URL}/assets/strings/constantTitles.json`)
      .then((response) => response.json())
      .then((data) => {
          setStrings(data);
      })
      .catch((error) => console.error('Error fetching the string JSON:', error));
  }, []);

  useEffect(() => {
    if(strings){
      document.title = strings.TITLE_HOME;
    }
 }, [strings]);

    return (
      <>
        <div id="main_background" className="fade-in">
          <p className="fade-in">{strings.HOME_P1_1}</p>
          <p className="supreme fade-in">{strings.HOME_P1_2}</p>
        </div>

        <p className="main_p">{strings.HOME_P2_1}</p>
        <p className="main_p">{strings.HOME_P2_2}</p>

        <div className="flex-container">
          <div className="home-summary">
            <img src={`/assets/img/home-sum-1.jpg`} alt={strings.HOME_S1}/>
            <div>{strings.HOME_S1}</div>
          </div>

          <div className="home-summary">
            <img src={`/assets/img/home-sum-2.png`} alt={strings.HOME_S2}/>
            <div>{strings.HOME_S2}</div>
          </div>

          <div className="home-summary">
            <img src={`/assets/img/home-sum-3.png`} alt={strings.HOME_S3}/>
            <div>{strings.HOME_S3}</div>
          </div>

          <div className="home-summary">
            <img src={`/assets/img/home-sum-4.png`} alt={strings.HOME_S4}/>
            <div>{strings.HOME_S4}</div>
          </div>
        </div>

        <div className="flex-container">
          <a href="/design" className="checklist"><i className="fa-solid fa-list-check"></i>{strings.CHECKLIST_DESIGN}</a>
          <a href="/programming" className="checklist"><i className="fa-solid fa-list-check"></i>{strings.CHECKLIST_PROGRAMMING}</a>
        </div>

        <p className="main_p">{strings.HOME_V1_1}</p>

        <video controls autoPlay muted loop>
          <source src={'/assets/video/tab-nav-movie.mp4'} type="video/mp4"/>
          {strings.VIDEO_NO_SUPPORT}
        </video>
      </>
    );
}

export default Home;
