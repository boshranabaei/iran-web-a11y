import './programming.scss';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ProgramItem({item, programList}) {
  if (!item) {
    return null;
  }

    return (
      <>
        <h2>{item.title}</h2>
        <div className='design-item'>
          <p>{item.content.DETAIL}</p>

          <h3>{item.content.T1}</h3>
          
          <p>{item.content.P1}</p>

          <SyntaxHighlighter language="javascript" style={dark}>
            {item.content.CODE1}
          </SyntaxHighlighter>

          <p>{item.content.P2}</p>

          <SyntaxHighlighter language="javascript" style={dark}>
            {item.content.CODE2}
          </SyntaxHighlighter>

          <p>{item.content.IMG_REF}</p>

          <figure>
            <img className="single" src={`${item.contentImage.IMG}`} alt={item.contentImage.IMG_ALT}></img>
            <figcaption>{item.contentImage.IMG_CPT}</figcaption>
          </figure>
          <div className='link'><i className="fa-solid fa-link"></i>{programList.USEFUL_LINKS}
            {item.links?.map((link, index) => (
              <a key={index} href={link.URL}>{link.TITLE}</a>
              ))}
          </div>
          {item.right.CONTENT &&
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