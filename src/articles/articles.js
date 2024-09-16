import './articles.scss';
import {
    HOME_AR_TITLE1,HOME_AR_TITLE2
} from "../assets/strings/constantTitles";
import bulb from "../assets/img/bulb.png";

function Articles() {
        return (
            <>
                <div className='homeArts' role='link' tabIndex={0}>
                    <img src={bulb} alt=""/>
                    <div><p>{HOME_AR_TITLE1}</p></div>
                </div>

                <div className='homeArts' role='link' tabIndex={0}>
                    <img src={bulb} alt=""/>
                    <div><p>{HOME_AR_TITLE2}</p></div>
                </div>

                <div className='homeArts' role='link' tabIndex={0}>
                    <img src={bulb} alt=""/>
                    <div><p>kjhskdhskdhsk</p></div>
                </div>
            </>
        );
}

export default Articles;
