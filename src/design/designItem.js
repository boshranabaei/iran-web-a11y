import './design.scss';
import { CHECKLIST_RIGHT, CHECKLIST_WRONG}
   from '../assets/strings/constantTitles';

function DesignItem(item) {
    return (
      <>
        <h2>{item.title}</h2>
        <div className='design-item'>
          <p>{item.content}</p>
          <div className='flexContent'>
            <div class="wrongExp">
              <div><i class="fa-regular fa-circle-check"></i>{CHECKLIST_RIGHT}</div>
              <p>{item.wrong}</p>
            </div>
            <div class="rightExp">
              <div><i class="fa-regular fa-circle-xmark"></i>{CHECKLIST_WRONG}</div>
              <p>{item.right}</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default DesignItem;