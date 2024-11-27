import './programing.scss';
import Back from '../back/back';
import { useState, useEffect } from "react";

function Programing() {
  const [strings, setStrings] = useState({});
  useEffect(() => {
    fetch(`/assets/strings/constantTitles.json`)
    .then((response) => response.json())
    .then((data) => {
        setStrings(data);
    })
    .catch((error) => console.error('Error fetching the string JSON:', error));
  }, []);

  useEffect(() => {
    if(strings){
      document.title = strings.TITLE_PROGRAMMING;
    }
 }, [strings]);

    return (
      <>
        {Back()}
        <div className="cnstr">
          <p>Check the design section for now</p>
          <p>{strings.CONSTRUCTION}</p>
          <img src="../assets/img/website-construction.png" alt={strings.CONSTRUCTION}></img>
        </div>
      </>
    );
}

export default Programing;

