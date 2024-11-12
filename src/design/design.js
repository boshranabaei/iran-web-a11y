import './design.scss';
import Back from '../back/back';
import DesignItem from './designItem';
import {Item} from '../hooks/item';
import {DESIGN_TITLE} from '../assets/strings/constantTitles'

function Design() {
    let items = [Item('t1','c2','r1','w1'), Item('t2','c2','r2','w2')];
    return (
      <>
          {Back()}
          <h1 className='fade-in'>{DESIGN_TITLE}</h1>
          {items.map((item)=> DesignItem(item))}
      </>
    );
}

export default Design;