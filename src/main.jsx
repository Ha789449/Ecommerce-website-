import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App.jsx';
import './index.css';
import Singleproduct from './pages/home/Singleproduct.jsx'; // Ensure correct import name
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop/:id",
        element: <Singleproduct />, // Ensure correct import name
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
