import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter as createRouter,  RouterProvider } from "react-router-dom";
import Root from './Root';
import Contact, { contactLoader } from './Contact';

const router = createRouter([
  {
    path: "/", 
    element: <Root />,
    errorElement: <div>404 - nemaaaa</div>,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader
      },
      {
        path: "test",
        element: <div>TEST</div>
      }
    ]
  },
  {
    path: "about",
    element: <div>"O nama podaci su ovdje"</div>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
