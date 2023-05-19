import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <div className='max-w-screen-xl mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </div >
  );
};

export default App;