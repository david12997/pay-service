import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store/index.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <GoogleOAuthProvider clientId='938285238-ibb4nua5adgj085912d5kihhjhjsfsgv.apps.googleusercontent.com'>
        <App />
      </GoogleOAuthProvider>
        
      </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
