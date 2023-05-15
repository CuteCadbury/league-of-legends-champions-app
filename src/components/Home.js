import { useState } from 'react'
import logoDWPurple from '../logos/logoDWPurple.png'
import logoDWGold from '../logos/logoDWGold.png'
import DWplayers from '../logos/DWplayers.png'

const Home = () => {

  const [flipDWLogo, setFlipDWLofo] = useState(true)
  
  const handleDWLogo = () => {
    setFlipDWLofo(flipDWLogo => !flipDWLogo)
  }

  return (
        <div>
            <p onClick={handleDWLogo}>
              {flipDWLogo ? <img src={logoDWPurple} className='dwLogo' alt=''/> : <img src={logoDWGold} className='dwLogo' alt=''/>}
            </p>      
            <div className='backgroundText'>
              <h1 className='titleText'>2020 Season World Championship</h1>
              <h2 className='subTitle'>"Congratulations to DAMWON Gaming on qualifying for the 2020 World Championship!"</h2>
              <h5 className='subTitle'>#Worlds2020 #LCK</h5>
            </div>
            <img src={DWplayers} className='DWplayers' alt='' />
        </div>
  )
}

export default Home
