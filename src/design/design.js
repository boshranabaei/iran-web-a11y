import './design.scss';
import { useState, useEffect } from "react";
import Back from '../back/back';
import DesignItem from './designItem';
import {Item} from '../hooks/item';

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

    return (
      <>
          {Back()}
          <h1 className='fade-in'>{strings.DESIGN_TITLE}</h1>
          <p className="design-p1">{strings.DESIGN_P1}</p>
          {items.length > 0 && items.map((item)=> DesignItem(item, designList))}
      </>
    );
}

export default Design;