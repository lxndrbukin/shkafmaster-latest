import { Fragment } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from '../components/App';
import { Banners } from '../components/Banners/Banners';
import { Offers } from '../components/Offers/Offers';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <Fragment>
            <Banners />
            <Offers />
          </Fragment>
        ),
      },
    ],
  },
]);
