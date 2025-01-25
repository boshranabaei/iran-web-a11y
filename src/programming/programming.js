import './programming.scss';
import { useState, useEffect } from "react";
import ProgramItem from "./programItem"
import { Item } from '../hooks/item';

function Programming() {
  const [strings, setStrings] = useState({});
  const [programList, setProgramList] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`/assets/strings/constantTitles.json`)
    .then((response) => response.json())
    .then((data) => {
        setStrings(data);
    })
    .catch((error) => console.error('Error fetching the string JSON:', error));

    fetch(`/assets/strings/programList.json`)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.PROGRAM_LIST) {
        const newItems = data.PROGRAM_LIST.map(item => Item(item));
        setItems(newItems);
        setProgramList(data);
    }
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
        <h1 className='fade-in'>{strings.PROGRAM_TITLE}</h1>
          <p className="design-p1">{strings.PROGRAM_P1}</p>
          {items.length > 0 && items.map((item, index)=>  <ProgramItem key={index} item={item} programList={programList} />)}
        
        <div id="download">
          {strings.DOWNLOAD_ALL}<br></br>
          <a
            href="../assets/files/dq-designers-checklist.pdf"
            download="dq-designers-checklist.pdf"
          >
            <i class="fa-solid fa-download"></i> {strings.DOWNLOAD} <br></br>
          </a>
          <span>{strings.DOWNLOAD_ALL_PERM}</span>
        </div>

        <div className="cnstr">
          <p>Check the design section for now</p>
          <p>{strings.CONSTRUCTION}</p>
          <img src="../assets/img/website-construction.png" alt={strings.CONSTRUCTION}></img>
        </div>
      </>
    );
}

export default Programming;

