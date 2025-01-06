import { useState } from "react";
import './design.scss';

function DesignItem({item, designList}) {

  const [maxHeight, setMaxHeight] = useState(0);

  if (!item) {
    return null;
  }

  const handleToggle = () => {
    setMaxHeight(maxHeight === 0? '1500px': 0);
  };

    return (
      <>
        <h2>
          <div>{item.title}</div>
          <span className="accordion" aria-expanded="false" role="button">
            <i
              className={maxHeight !== 0 ? "fa-solid fa-minus" : "fa-solid fa-plus"} 
              onClick={handleToggle}></i>

          </span>
        </h2>
        <div className='design-item' style={{ maxHeight: maxHeight === 0 ? 0 : "1500px"}}>
          <p>{item.content}</p>

          <div id="limit"><i className="fa-brands fa-accessible-icon"></i>{designList.LIMIT}{item.usage}</div>
          
          <div className='flexContent'>
          {item.right.CONTENT &&
            <>
            <div className="wrongExp">
              <div><i className="fa-regular fa-circle-xmark"></i>{designList.CHECKLIST_WRONG}</div>
              <hr/>
              <p className="des">{item.wrong.CONTENT}</p>
            </div>
            <div className="rightExp">
              <div><i className="fa-regular fa-circle-check"></i>{designList.CHECKLIST_RIGHT}</div>
              <hr/>
              <p className="des">{item.right.CONTENT}</p>
            </div>
            </>
          }
            {item.right.IMG &&
            <>
              <div className="wrongExp">
                <div><i className="fa-regular fa-circle-xmark"></i>{designList.CHECKLIST_WRONG}</div>
                <hr/>
                <figure>
                  <img src={`${item.wrong.IMG}`} alt={item.wrong.IMG_ALT}></img>
                  <figcaption>{item.wrong.IMG_CPT}</figcaption>
                </figure>
              </div>
              <div className="rightExp">
                <div><i className="fa-regular fa-circle-check"></i>{designList.CHECKLIST_RIGHT}</div>
                <hr/>
                <figure>
                  <img src={`${item.right.IMG}`} alt={item.right.IMG_ALT}></img>
                  <figcaption>{item.right.IMG_CPT}</figcaption>
                </figure>
              </div>
              </>
            }
          </div>
          <div className='link'><i className="fa-solid fa-link"></i>{designList.USEFUL_LINKS}
            {item.links?.map((link, index) => (
              <a key={index} href={link.URL}>{link.TITLE}</a>
              ))}
          </div>
        </div>
      </>
    );
}

export default DesignItem;