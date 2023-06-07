import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import InputCallbackPage from './pages/InputCallback.tsx';
import MultipleElements from './pages/MultipleElements.tsx';
import UserPage from './pages/UserPage.tsx';

const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/home" /> },
  { path: '/home', index: true, element: <App /> },
  { path: '/multiple-elements', element: <MultipleElements /> },
  { path: '/user', element: <UserPage /> },
  { path: '/input-callback', element: <InputCallbackPage /> }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
