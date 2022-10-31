import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LandingPage, About, Login, Protected, FileProcessing } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Protected>
            <LandingPage/>
          </Protected>
        }
      />
      <Route
        path="/about"
        element={
          <Protected>
            <About/>
          </Protected>
        }
      />
      <Route
        path="/file"
        element={
          <Protected>
            <FileProcessing/>
          </Protected>
        }
      />
      <Route path='/Login' element={<Login/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();