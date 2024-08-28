import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import MainHome from './MainHome.jsx'
import { store } from './redux/store.js';
import Messages from './Messages.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='/' element={<MainHome/>}/>
      <Route path='/admin/messages' element={<Messages/>}/>
           
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>
);

