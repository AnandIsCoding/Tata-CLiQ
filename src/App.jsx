import React, { useEffect } from 'react'
import { lazy } from 'react';
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
      <Navbar/>
      <Offer/>
      
    </div>
  )
}

export default App
