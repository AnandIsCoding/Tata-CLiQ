import React, { Suspense, useEffect } from 'react'
import { lazy } from 'react';
import Slider from './mini-Compo/Slider';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import ScrollToTop from './components/ScrollToTop';

// Lazy imports
const Home = lazy(() => import('./pages/Home'));
const SpecificCategory = lazy(() => import('./pages/SpecificCategory'));
const Footer = lazy(() => import('./components/Footer'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const Navbar = lazy(()=>import('./components/Navbar'))
const Offer = lazy(()=>import('./mini-Compo/Offer'))
const Cart = lazy(()=>import('./pages/Cart'))
const Wishlist = lazy(()=>import('./pages/Wishlist'))
const Orders = lazy(()=>import('./pages/Orders'))
const CliqCare = lazy(()=>import('./pages/CliqCare'))
function App() {
  const disableContextMenu = (event) => {
    event.preventDefault();  // Disable the right-click menu
  };

  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
  //       event.preventDefault();
  //     }
  //   };
  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);
 

  return (
    <div className='select-none' onContextMenu={disableContextMenu} >
    <ScrollToTop/> 
     <Suspense
      // Fallback loader while components are loading
        fallback={
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-white flex justify-center items-center duration-[4s]">
            <img src='/Fidget-spinner.gif' alt="loader" className="w-24 h-24" />
          </div>
        }
      >

<Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:category' element={<SpecificCategory/>} />
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/orders' element={ <Orders/> } />
        <Route path='/cliq-care' element={ <CliqCare/> } />
      </Routes>

      <Footer/> 
      </Suspense>
           
    </div>
  )
}

export default App
