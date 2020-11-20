import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import GlobalStyle from './styles/globals';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={window.location.pathname || ''}>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
