import { useEffect } from 'react';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Page Not Found';
  }, []);

  return (
    <div>
      <p>404 Error. The page was not found.</p>
    </div>
  );
};

export default NotFoundPage;
