import React, { Suspense, useEffect } from 'react'
import { lazy } from 'react';
import Slider from './mini-Compo/Slider';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SpecificCategory from './pages/SpecificCategory';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
const Navbar = lazy(()=>import('./components/Navbar'))
const Offer = lazy(()=>import('./mini-Compo/Offer'))
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
    <div onContextMenu={disableContextMenu} >
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
      </Routes>

      <Footer/> 
      </Suspense>
           
    </div>
  )
}

export default App
