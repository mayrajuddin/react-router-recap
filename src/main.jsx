import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root.jsx';
import Home from './Home.jsx';
import About from './components/About.jsx';
import Users from './components/Users.jsx';
import UserInfo from './components/Users/UserInfo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {index: true, Component: Home},
      {path: '/about', Component: About},
      {path: '/users', loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),Component: Users},
      {path: '/users/:userId', Component: UserInfo, loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)}
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
