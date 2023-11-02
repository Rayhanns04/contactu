import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import './styles/no_match_page.scss';

function NoMatchPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = '404 - Page Not Found';
  }, []);

  return (
    <div className="NoMatch_cntr">
      <div className="NoMatch_content">
        <h1>404</h1>
        <h1>Oops! Looks like you got lost.</h1>
        <p>
          The page you are looking for was not found. We suggest you go to home
          page while we fix the problem.
        </p>

        <Button
          onClick={() =>
            navigate('/', { replace: true, preventScrollReset: true })
          }
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}

export default NoMatchPage;
