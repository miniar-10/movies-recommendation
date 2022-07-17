import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RecommendedProvider} from './RecommendedContext'
import {UpcomingProvider} from'./UpcomingContext'
import {TrendingProvider} from './trendingContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <RecommendedProvider>
    <UpcomingProvider>
    <TrendingProvider>
    <App />
    </TrendingProvider>
    </UpcomingProvider>
    </RecommendedProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
