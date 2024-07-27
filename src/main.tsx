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
import CardDetail from './components/CardDetail/CardDetail.tsx';
// import { StarWarsGetShip } from './api/StarWarsService.ts';

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
        element: <CardDetail />,
        // loader: StarWarsGetShip,
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
