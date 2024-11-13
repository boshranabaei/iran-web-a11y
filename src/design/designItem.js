import './design.scss';
import { CHECKLIST_RIGHT, CHECKLIST_WRONG}
   from '../assets/strings/constantTitles';
import { LIMIT, USEFUL_LINKS } from '../assets/strings/designList';

function DesignItem(item) {
    return (
      <>
        <h2>{item.title}</h2>
        <div className='design-item'>
          <p>{item.content}</p>

          <div id="limit"><i className="fa-brands fa-accessible-icon"></i>{LIMIT}{item.usage}</div>
          
          <div className='flexContent'>
            <div className="wrongExp">
              <div><i className="fa-regular fa-circle-xmark"></i>{CHECKLIST_WRONG}</div>
              <hr/>
              <p>{item.wrong}</p>
            </div>
            <div className="rightExp">
              <div><i className="fa-regular fa-circle-check"></i>{CHECKLIST_RIGHT}</div>
              <hr/>
              <p>{item.right}</p>
            </div>
          </div>
          <div className='link'><i className="fa-solid fa-link"></i>{USEFUL_LINKS}
            {item.links?.map((link, index) => (
              <a key={index} href={link.url}>{link.title}</a>
              ))}
          </div>
        </div>
      </>
    );
}

export default DesignItem;