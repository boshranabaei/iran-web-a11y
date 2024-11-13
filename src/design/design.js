import './design.scss';
import Back from '../back/back';
import DesignItem from './designItem';
import {Item} from '../hooks/item';
import {
  DESIGN_TITLE, DESIGN_P1
} from '../assets/strings/constantTitles';
import {
  DESIGN_1_TITLE, DESIGN_1_CONTENT, DESIGN_1_USAGE, DESIGN_1_WRONG, DESIGN_1_RIGHT, DESIGN_1_LINKS
} from '../assets/strings/designList';

function Design() {
    let items = [Item(DESIGN_1_TITLE, DESIGN_1_CONTENT, DESIGN_1_USAGE, DESIGN_1_WRONG, DESIGN_1_RIGHT, DESIGN_1_LINKS), 
                Item('t2','c2','r2','w2')];
    return (
      <>
          {Back()}
          <h1 className='fade-in'>{DESIGN_TITLE}</h1>
          <p className="design-p1">{DESIGN_P1}</p>
          {items.map((item)=> DesignItem(item))}
      </>
    );
}

export default Design;