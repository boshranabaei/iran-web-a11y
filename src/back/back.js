import './back.scss';
import { useState, useEffect } from "react";

function Back() {
  const [strings, setStrings] = useState({});

  useEffect(() => {
      fetch(`${process.env.PUBLIC_URL}/assets/strings/constantTitles.json`)
      .then((response) => response.json())
      .then((data) => {
          setStrings(data);
      })
      .catch((error) => console.error('Error fetching the string JSON:', error));
  }, []);

  const BACK = strings.BACK;

  return (
    <>
        <a href="/" id="return">{BACK}</a>
    </>
  );
}

export default Back;

