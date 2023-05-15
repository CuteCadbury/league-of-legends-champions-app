import React from 'react'
import logos from '../logos' 
import DWCard from './DWCard'

const DamwonSkins = () => {

    const logosCard = logos.map((logo) => {
        return <DWCard 
                key={logo.id}
                logo={logo}
                />
    })

  return (
        <div className='damwonWorld'>
            <hr/>
            <b><h1>Damwon Gaming 2020 Worlds Skins</h1></b>
            <hr/>
            <div>
                {logosCard}
            </div>
        </div>
  )
}

export default DamwonSkins
