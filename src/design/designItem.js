import './design.scss';
// import DesignContrastWrong from '../assets/img/design-contrast-wrong.png';
// import DesignContrastRight from '../assets/img/design-contrast-right.png';

function DesignItem(item, designList) {

  if (!item) {
    return null;
  }
  console.log(item.right.IMG_CPT);

    return (
      <>
        <h2>{item.title}</h2>
        <div className='design-item'>
          <p>{item.content}</p>

          <div id="limit"><i className="fa-brands fa-accessible-icon"></i>{designList.LIMIT}{item.usage}</div>
          
          <div className='flexContent'>
          {item.right.CONTENT &&
            <>
            <div className="wrongExp">
              <div><i className="fa-regular fa-circle-xmark"></i>{designList.CHECKLIST_WRONG}</div>
              <hr/>
              <p>{item.wrong.CONTENT}</p>
            </div>
            <div className="rightExp">
              <div><i className="fa-regular fa-circle-check"></i>{designList.CHECKLIST_RIGHT}</div>
              <hr/>
              <p>{item.right.CONTENT}</p>
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