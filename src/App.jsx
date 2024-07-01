import React from 'react';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import appstore from '../utills/appstore';
import MovieDialog from './Components/MovieDialog';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

const App = () => {
  return (
    <Provider store={appstore}>
      <ErrorBoundary>
        <Body  />
        {/* Pass necessary props to MovieDialog if required */}
        <MovieDialog />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
