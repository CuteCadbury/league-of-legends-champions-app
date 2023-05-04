
import { useState } from "react"

const Front = ({ icon, name }) => {
  return (
    <div>
      <img src={icon} alt={"champion name"}/>
      <h3>{name}</h3>
    </div>
  )
}

const Back = ({ champion }) => {
  return (
    <div>
      <img src={champion.icon} alt={"champion name"}/>
      <h3>{champion.name}</h3>
      <p>"{champion.title}"</p>
      <p>{champion.tags}</p>
      <ul>Description: {champion.description}</ul>
      {/* <ul>Stats: {champion.stats}</ul> */}
    </div>
  )
}

const ChampionsCard = ({ champion }) => {
  
  // const {icon, name, title, tags, description} = champion


  const [ showInfo, setShowInfo ] = useState(true)

  const toggleCard = () => {
    setShowInfo(showInfo => !showInfo)
  }

  const tagsList = champion.tags.map(tag => <ul key={tag}>{tag}</ul>)
  
  return (
    <div className='card' onClick={toggleCard}>
        {showInfo ? <Front icon={champion.icon} name={champion.name} /> : 
                      <Back champion={champion} tags={tagsList} />} 
    </div>
  )

}

export default ChampionsCard
