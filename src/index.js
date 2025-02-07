// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import ShopcontextProvider from "./context/Shopcontext"; // Fix typo here

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ShopcontextProvider> {/* Fix typo here */}
//     <App />
//   </ShopcontextProvider>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import ShopcontextProvider from "./context/Shopcontext.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopcontextProvider>
    <App />
  </ShopcontextProvider>
);





