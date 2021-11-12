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

const BinaryExponentiation = () => {
  return (
    <div className='algo'>
      <div className='header1 underline'>Binary Exponentiation</div>
      <br />
      <div className=''>
        <div className='header2'>Summary</div>
        <li>
          Only takes <SMF>{'O(log{n})'}</SMF> time to calculate{' '}
          <SMF>{'a^{n}'}</SMF>, instead of <SMF>{'O(n)'} </SMF> multiplications.
        </li>
      </div>
      <br />
      <div className='description'>
        <div className='header2'>Algorithm</div>
        <div className='assumption'>
          Assuming we are trying to calculate <SMF>{'a^{b}'}</SMF>
        </div>
        <ol className='order-decimal'>
          <li>Get the binary representation of "b" and store it as binary_b</li>
          <li>
            Calculate <SMF>{'a^{2^{k}}'}</SMF> for k in 1 to length of binary_b
            <ol className='order-lower-alpha'>
              <li>
                When calculating <SMF>{'a^{2^{k}}'}</SMF>, make sure to use the
                previous value you calculated
              </li>
              <li>
                i.e. To calculate <SMF>{'a^{4}'}</SMF> calculate it by{' '}
                <SMF>{'a^{2} \\times a^{2}'}</SMF>. Not{' '}
                <SMF>{'a \\times a \\times a \\times a'}</SMF>
              </li>
            </ol>
          </li>
          <li>
            Represent the b as the sum of power of 2's
            <ol className='order-lower-alpha'>
              <li>Represent b as sum of 1, 2, 4, 8, 16 ...</li>
              <li>
                This can be done fast using the binary representation of b
              </li>
              <li>Example with 10</li>
              <table border='1' className='table-fixed'>
                <tr>
                  <th>Index</th>
                  <th>0</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                </tr>
                <tr>
                  <th>Power of 2</th>
                  <th>1</th>
                  <th>2</th>
                  <th>4</th>
                  <th>8</th>
                </tr>
                <tr>
                  <th>Binary</th>
                  <th>0</th>
                  <th>1</th>
                  <th>0</th>
                  <th>1</th>
                </tr>
              </table>
              It shows that 10 is 2 + 8
            </ol>
          </li>
          <li>
            Multiply together to find <SMF>{'a^{b}'}</SMF>
            <ol className='order-lower-alpha'>
              <li>
                For b = 10, it would be <SMF>{'a^{2} \\times a^{8}'}</SMF>
              </li>
            </ol>
          </li>
        </ol>
      </div>
      <div className='example'>
        <div className='header2'>
          Calculating <SMF>{`a ^ { b }`}</SMF>
        </div>
        <div className='header3 underline'>Example 1</div>
        {Code({
          code: `a = 2
b = 10
binary_b = bin(b)[2:][::-1]
pow_a = [a]
for _ in range(len(binary_b)):
\tpow_a.append(pow_a[-1] * pow_a[-1])
answer = 1
for i in range(len(binary_b)):
\tif binary_b[i] == "1":
\t\tanswer *= pow_a[i]
print(answer)`,
          language: 'python',
        })}
        <div className='header3 underline'>Example 2</div>
        {Code({
          code: `a = 2
b = 10
pow_a = a
answer = 1
while b > 0:
\tif b&1:
\t\tanswer *= pow_a
\tpow_a *= pow_a
\tb >>= 1
print(answer)`,
          language: 'python',
        })}
      </div>
      <br />
      <div className='implement'>
        <div className='header2'>Solving a Problem</div>
        Solving a problem{' '}
        <a
          href='https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=3671'
          target='_blank'
          rel='noopener noreferrer'
        >
          MODEX
        </a>{' '}
        from UVA <br />
        This question is asking for <SMF>{'x^{y}'}</SMF> mod n.
        {Code({
          code: `c = int(input())
for _ in range(c):
\tx,y,n = [int(i) for i in input().split()]
\tans = 1
\twhile y > 0:
\t\tif y&1:
\t\t\tans *= x
\t\t\tans %= n
\t\tx *= x
\t\tx %= n
\t\ty >>= 1
\tprint(ans)
`,
        })}
      </div>
    </div>
  );
};

export default BinaryExponentiation;
