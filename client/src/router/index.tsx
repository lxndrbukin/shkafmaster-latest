import { createBrowserRouter } from 'react-router-dom';
import { App } from '../components/App';
import { Banners } from '../components/Banners/Banners';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Banners />,
      },
    ],
  },
]);
