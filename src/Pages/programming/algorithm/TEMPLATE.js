import './algo.css';
import { addStyles, StaticMathField as SMF } from 'react-mathquill';
import { CodeBlock } from 'react-code-blocks';

addStyles();

var Code = ({
  code = '',
  language = 'python',
  showLineNumbers = true,
  startingLineNumber = 1,
}) => {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      startingLineNumber={startingLineNumber}
    />
  );
};

//Remember to add page names to "programming" and "algorithm" page!
const TEMP = () => {
  return (
    <div className='algo'>
      <div className='header1 underline'>TITLE</div>
      <div>
        <div className='header2'>Constraints :</div>
        <li></li>
      </div>
      <div className='description'></div>
      <div className='example'></div>
    </div>
  );
};

export default TEMP;
