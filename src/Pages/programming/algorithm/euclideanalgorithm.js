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
const EuclideanAlgorithm = () => {
  return (
    <div className='algo'>
      <div className='header1 underline'>Euclidean Algorithm</div>
      <br />
      <div className=''>
        <div className='header2'>Summary</div>
        <li>Helps calculate the greatest common divisor (GCD) of 2 numbers</li>
        <li>
          This algorithm runs in <SMF>{'O(N)'}</SMF> the worst case, and{' '}
          <SMF>{'O(log{\\min (a,b)})'}</SMF> in average{' '}
        </li>
      </div>
      <br />
      <div className='description'>
        <div className='header2'>Algorithm</div>
        <div className='assumption'>
          <div className='header3'>Assumptions</div>
          <li>
            <SMF>{'a \\leq b'}</SMF>
          </li>
        </div>
        <ol className='order-decimal'>
          <li>
            Start with <SMF>{'a_{old}'}</SMF>, <SMF>{'b_{old}'}</SMF>
          </li>
          <li>
            Find <SMF>{'b_{new} = a_{old} % b_{old}'}</SMF> and{' '}
            <SMF>{'a_{new} = b_{old}'}</SMF>
          </li>
          <li>
            Replace <SMF>{'a_{old} = a_{new}'}</SMF> and{' '}
            <SMF>{'b_{old} = b_{new}'}</SMF>
          </li>
          <li>
            Repeat steps 1 ~ 3 until <SMF>{'b_{old} = 0'}</SMF>
          </li>
          <li>
            Then the value <SMF>{'a_{old}'}</SMF> is the greatest common
            divisor.
          </li>
        </ol>
      </div>
      <div className='example'></div>
      <br />
      <div className='implement'>
        <div className='header2'>Solving a Problem</div>
      </div>
    </div>
  );
};

export default EuclideanAlgorithm;
