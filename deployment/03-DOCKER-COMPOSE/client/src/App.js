import React, {useEffect, useState} from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Layout, Add } from './routes';
import { Hats } from './components';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Hats />,
      },
      {
        path: "add",
        element: <Add />,
      },
    ]
  },
]);

function App() {
  const [hats, setHats] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/hats')
      .then(res => res.json())
      .then(data => setHats(data));
  }, []);

  return (
    <RouterProvider 
      router={createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <Hats hats={hats}/>,
            },
            {
              path: "add",
              element: <Add hats={hats} setHats={setHats}/>,
            },
          ]
        },
      ])}
    />
  );
}

export { App };