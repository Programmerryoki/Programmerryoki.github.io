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

const Binarysearch = () => {
  return (
    <div className='algo'>
      <div className='header1 underline'>Binary Search</div>
      <br />
      <div className=''>
        <div className='header2'>Summary</div>
        <li>
          Searches for a value or a element in an array in{' '}
          <SMF>{'O(log{n})'}</SMF> time.
        </li>
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

export default Binarysearch;
