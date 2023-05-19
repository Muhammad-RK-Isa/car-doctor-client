import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthProvider from './Providers/Auth/AuthProvider.jsx';
import { Helmet } from 'react-helmet';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import Checkout from './Pages/Checkout/Checkout.jsx';

const routes = createBrowserRouter( [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/checkout/:_id',
        element: <Checkout />,
        loader: ( { params }) => fetch(`http://192.168.0.179:5000/service/${params._id}`)
      }
    ]
  }
] );


ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <AuthProvider>
    <Helmet>
      <title>Car Doctor</title>
    </Helmet>
    <RouterProvider router={ routes } />
  </AuthProvider>,
);
