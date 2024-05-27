import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import EnglishTranslation from "./locale/en.json";
import ArabicTranslattion from "./locale/ar.json"

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: EnglishTranslation
      },
      ar:{
        translation: ArabicTranslattion
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <App />

    </BrowserRouter>
  </React.StrictMode>
);


