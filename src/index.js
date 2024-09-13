import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { UserProvider } from './context/userContext';

import { CatagoriesProvider } from './context/catagoriesContext';
import { CartProvider } from './context/cartContext';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <CatagoriesProvider>
        <CartProvider>
           <App />
         </CartProvider>
      </CatagoriesProvider>
    </UserProvider>
    
  </React.StrictMode>
);


