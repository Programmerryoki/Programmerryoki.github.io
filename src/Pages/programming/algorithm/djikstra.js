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

const Djikstra = () => {
  return (
    <div className='algo'>
      <div className='header1 underline'>Djikstra's Algorithm</div>
      <br />
      <div className=''>
        <div className='header2'>Summary</div>
        <li></li>
      </div>
      <br />
      <div className='description'>
        <div className='header2'>Algorithm</div>
        <div className='assumption'></div>
        <ol className='order-decimal'></ol>
      </div>
      <div className='example'></div>
      <br />
      <div className='implement'>
        <div className='header2'>Solving a Problem</div>
      </div>
    </div>
  );
};

export default Djikstra;
