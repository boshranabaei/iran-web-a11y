import './articles.scss';
import { useState, useEffect } from "react";

function Articles() {
    const [strings, setStrings] = useState({});

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/assets/strings/constantTitles.json`)
        .then((response) => response.json())
        .then((data) => {
            setStrings(data);
        })
        .catch((error) => console.error('Error fetching the string JSON:', error));
    }, []);

    const HOME_AR_TITLE1 = strings.HOME_AR_TITLE1;
    const HOME_AR_TITLE2 = strings.HOME_AR_TITLE2;

    return (
        <>
            <div className='homeArts' role='link' tabIndex={0}>
                <img src={`${process.env.REACT_APP_ASSET_BASE_URL}/assets/img/bulb.png`} alt=""/>
                <div><p>{HOME_AR_TITLE1}</p></div>
            </div>

            <div className='homeArts' role='link' tabIndex={0}>
                <img src={`${process.env.REACT_APP_ASSET_BASE_URL}/assets/img/bulb.png`} alt=""/>
                <div><p>{HOME_AR_TITLE2}</p></div>
            </div>

            <div className='homeArts' role='link' tabIndex={0}>
                <img src={`${process.env.REACT_APP_ASSET_BASE_URL}/assets/img/bulb.png`} alt=""/>
                <div><p>kjhskdhskdhsk</p></div>
            </div>
        </>
    );
}

export default Articles;
