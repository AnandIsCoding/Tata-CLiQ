import React from 'react'
import Offer from '../mini-Compo/Offer'
import Slider from '../mini-Compo/Slider'
import CategoryStrip from '../components/CategoryStrip'
import BankOffersStrip from '../mini-Compo/BankOffersStrip'
import Banner from '../mini-Compo/Banner'

function Home() {
  return (
    <div>

        <Offer/>
        <Slider/>
        <CategoryStrip/>
        <BankOffersStrip />
        <h1 className='text-center text-4xl font-thin mt-10 '>Indianwear Reimagined</h1>
        <Banner imageUrl={`https://assets.tatacliq.com/medias/sys_master/images/63588842831902.png`} redirect={`women's clothing`} />
        {/* <Banner imageUrl={`https://assets.tatacliq.com/medias/sys_master/images/64829260726302.jpg`} /> */}
        <h1 className='text-center text-4xl font-thin '>Hot Boy Fits</h1>
        <Banner imageUrl={`https://assets.tatacliq.com/medias/sys_master/images/63588844339230.png`} redirect={`men's clothing`} />
        <Banner imageUrl={`https://assets.tatacliq.com/medias/sys_master/images/49733188190238.jpg`} redirect={`/`}/>
      
      
    </div>
  )
}

export default Home
