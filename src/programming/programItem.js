import './programming.scss';
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ProgramItem({item, programList}) {
  
  const [maxHeight, setMaxHeight] = useState(0);
  
  const handleToggle = () => {
    setMaxHeight(maxHeight === 0? '5500px': 0);
  };

  if (!item) {
    return null;
  }

    return (
      <>
        <h2>
          <div>{item.title}</div>
          <span className="accordion" aria-expanded="false" role="button">
            <i
              className={maxHeight !== 0  ? "fa-solid fa-minus" : "fa-solid fa-plus"} 
              onClick={handleToggle}></i>
            &nbsp;&nbsp;
          </span>
        </h2>


        <div className='design-item' style={{ maxHeight: maxHeight === 0 ? 0 : "5500px"}}>
          <p>{item.content.DETAIL}</p>

          {item.content.T1 && <h3>{item.content.T1}</h3>}
          
          {item.content.P1 && <p>{item.content.P1}</p>}

          {item.content.CODE1 && 
            <SyntaxHighlighter language="javascript" style={dark}>
              {item.content.CODE1}
            </SyntaxHighlighter>}

          {item.content.P2 && <p>{item.content.P2}</p>}

          {item.content.CODE2 &&
            <SyntaxHighlighter language="javascript" style={dark}>
              {item.content.CODE2}
            </SyntaxHighlighter>
          }

          {item.content.IMG_REF && 
            <>
            <p>{item.content.IMG_REF}</p>
            <figure>
              <img className="single" src={`${item.contentImage.IMG}`} alt={item.contentImage.IMG_ALT}></img>
              <figcaption>{item.contentImage.IMG_CPT}</figcaption>
            </figure>
            </>
          }
          <div className='link'><i className="fa-solid fa-link"></i>{programList.USEFUL_LINKS}
            {item.links?.map((link, index) => (
              <a key={index} href={link.URL}>{link.TITLE}</a>
              ))}
          </div>
          {item.right &&
            <>
            <div className='flexContent'>
              <div className="wrongExp">
                <div><i className="fa-regular fa-circle-xmark"></i>{programList.CHECKLIST_WRONG}</div>
                <hr/>
                <p>{item.wrong.CONTENT}</p>
                <SyntaxHighlighter language="javascript" style={dark}>
                  {item.wrong.CODE}
                </SyntaxHighlighter>
              </div>
              <div className="rightExp">
                <div><i className="fa-regular fa-circle-check"></i>{programList.CHECKLIST_RIGHT}</div>
                <hr/>
                <p>{item.right.CONTENT}</p>
                <SyntaxHighlighter language="javascript" style={dark}>
                  {item.right.CODE}
                </SyntaxHighlighter>
              </div>
            </div>
            </>
          }
        </div>
      </>
    );
}

export default ProgramItem;