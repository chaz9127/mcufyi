import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages/Home/Home.component';
import { Nav } from './components/Nav/Nav.component';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MediaInfo } from './pages/MediaInfo/MediaInfo.component';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    // create error page
  },
  {
    path: "/media/:title",
    element: <MediaInfo />,
    // create error page
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Nav />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
