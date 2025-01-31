import './design.scss';
import { useState, useEffect } from "react";
import DesignItem from './designItem';
import { Item } from '../hooks/item';

function Design() {
    const [strings, setStrings] = useState({});
    const [designList, setDesignList] = useState({});
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`/assets/strings/constantTitles.json`)
        .then((response) => response.json())
        .then((data) => {
            setStrings(data);
        })
        .catch((error) => console.error('Error fetching the string JSON:', error));

        fetch(`/assets/strings/designList.json`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.DESIGN_LIST) {
            const newItems = data.DESIGN_LIST.map(item => Item(item));
            setItems(newItems);
            setDesignList(data);
        }
        })
        .catch((error) => console.error('Error fetching the string JSON:', error));
    }, []);

    useEffect(() => {
      if(strings){
        document.title = strings.TITLE_DESIGN;
      }
   }, [strings]);

    return (
      <>
          <h1 className='fade-in'>{strings.DESIGN_TITLE}</h1>
          <p className="design-p1">{strings.DESIGN_P1}</p>
          {items.length > 0 && items.map((item, index)=>  <DesignItem key={index} item={item} designList={designList} />)}

          <div id="download">
            {strings.DOWNLOAD_DESIGN}<br></br>
            <a
              href="../assets/files/dq-designers-checklist.pdf"
              download="dq-designers-checklist.pdf"
            >
              <i class="fa-solid fa-download"></i> {strings.DOWNLOAD} <br></br>
            </a>
            <span>{strings.DOWNLOAD_DESIGN_PERM}</span>
          </div>

          <div className="cnstr">
            <p>{strings.CONSTRUCTION}</p>
            <img src="../assets/img/website-construction.png" alt={strings.CONSTRUCTION}></img>
          </div>
      </>
    );
}

export default Design;