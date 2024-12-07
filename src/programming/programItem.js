import './programming.scss';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
          
          <p>{item.content[2]}</p>

          <SyntaxHighlighter language="javascript" style={dark}>
            {item.content[3]}
          </SyntaxHighlighter>

          <p>{item.content[4]}</p>

          <SyntaxHighlighter language="javascript" style={dark}>
            {item.content[5]}
          </SyntaxHighlighter>

          <p>{item.content[6]}</p>

          <figure>
            <img src={`${item.contentImage.IMG}`} alt={item.contentImage.IMG_ALT}></img>
            <figcaption>{item.contentImage.IMG_CPT}</figcaption>
          </figure>
        </div>
      </>
    );
}

export default ProgramItem;