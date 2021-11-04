import './csspage.css';

const CSSpage = () => {
  return (
    <div className='csspage'>
      <div className='csspage_body'>
        <h1>Hello, this is a page for CSS stuff!</h1>
        <div className='cssbody_selecting'>
          <p>There are 3 main ways of selecting!</p>
          <p>1st way is by the tag name. This includes p, img ...</p>
          <p>2nd way is by the id.</p>
          <p>3rd way is by the classname.</p>
        </div>
      </div>
    </div>
  );
};

export default CSSpage;
