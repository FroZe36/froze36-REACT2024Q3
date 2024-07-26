import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound.tsx';
import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/page/1" replace />,
    errorElement: <NotFound />,
  },
  {
    path: '/page/:id',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/page/:id/:name',
        // loader: getAnimal,
        // element: <CardDetail />,
        errorElement: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
