import { useState } from 'react'

const Front = ({ logo }) => {
    return (
      <div>
        <img src={logo.backpng} alt={"logo back"} className='logoCard-back-img'/>
        <h2>{logo.playerName}</h2>
      </div>
    )
  }
  
  const Back = ({ logo }) => {
    return (
      <div>
        <h1><b>{logo.playerName}</b></h1>
        <h3>{logo.lane}</h3>
        <img src={logo.frontpng} alt={"logo front"} className='logoCard-front-img'/>
        <h3>{logo.backname}</h3>
      </div>
    )
  }

const DWCard = ({ logo }) => {

  const [showInfoLogo, setShowInfoLogo] = useState(true)

  const toggleCardLogo = () => {
    setShowInfoLogo(showInfoLogo => !showInfoLogo)
  }

return (
    <div onClick={toggleCardLogo} className='logo-card'>
      {showInfoLogo ? <Front logo={logo}/> : <Back logo={logo}/>}
    </div>
  )
}

export default DWCard
