import './programming.scss';

function ProgramItem(item, programList) {

  if (!item) {
    return null;
  }

    return (
      <>
        <h2>{item.title}</h2>
        <div className='design-item'>
          <p>{item.content[0]}</p>

          <h3>{item.content[1]}</h3>
          
          <div className='flexContent'>
          {item.right.CONTENT &&
            <>
            <div className="wrongExp">
              <div><i className="fa-regular fa-circle-xmark"></i>{programList.CHECKLIST_WRONG}</div>
              <hr/>
              <p>{item.wrong.CONTENT}</p>
            </div>
            <div className="rightExp">
              <div><i className="fa-regular fa-circle-check"></i>{programList.CHECKLIST_RIGHT}</div>
              <hr/>
              <p>{item.right.CONTENT}</p>
            </div>
            </>
          }
            {item.right.IMG &&
            <>
              <div className="wrongExp">
                <div><i className="fa-regular fa-circle-xmark"></i>{programList.CHECKLIST_WRONG}</div>
                <hr/>
                <figure>
                  <img src={`${item.wrong.IMG}`} alt={item.wrong.IMG_ALT}></img>
                  <figcaption>{item.wrong.IMG_CPT}</figcaption>
                </figure>
              </div>
              <div className="rightExp">
                <div><i className="fa-regular fa-circle-check"></i>{programList.CHECKLIST_RIGHT}</div>
                <hr/>
                <figure>
                  <img src={`${item.right.IMG}`} alt={item.right.IMG_ALT}></img>
                  <figcaption>{item.right.IMG_CPT}</figcaption>
                </figure>
              </div>
              </>
            }
          </div>
          <div className='link'><i className="fa-solid fa-link"></i>{programList.USEFUL_LINKS}
            {item.links?.map((link, index) => (
              <a key={index} href={link.URL}>{link.TITLE}</a>
              ))}
          </div>
        </div>
        
      </>
    );
}

export default ProgramItem;