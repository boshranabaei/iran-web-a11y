import './breadcrump.scss';
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Breadcrump() {
  const [strings, setStrings] = useState({});

  useEffect(() => {
      fetch(`${process.env.PUBLIC_URL}/assets/strings/constantTitles.json`)
      .then((response) => response.json())
      .then((data) => {
          setStrings(data);
      })
      .catch((error) => console.error('Error fetching the string JSON:', error));
  }, []);
  const nextTitle = useLocation().pathname === '/design'? strings.CHECKLIST_DESIGN: strings.CHECKLIST_PROGRAMMING;
  return (
    <>
      <div id="breadcrump">
        <Link to='/'>{strings.HOME}</Link>{strings.ARROW}<Link to={useLocation().pathname}>{nextTitle}</Link>
      </div>
    </>
  );
}

export default Breadcrump;

