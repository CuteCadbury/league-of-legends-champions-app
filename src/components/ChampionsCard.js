import { useState } from "react" 

const Front = ({ icon, name }) => {
  return (
    <div>
      <img className="card-front-img" src={icon} alt={"champion name"}/>
      <h3>{name}</h3>
    </div>
  )
}

const Back = ({ champion }) => {
  return (
    <div>
      <img className="card-back-img" src={champion.icon} alt={"champion name"}/>
      <h3>{champion.name}</h3>
      <p>"{champion.title}"</p>
      <p>{champion.tags}</p>
      <p>Description: {champion.description}</p>
    </div>
  )
}

const ChampionsCard = ({ champion }) => {

  const [ showInfo, setShowInfo ] = useState(true)
  const [ isLiked, setIsLiked ] = useState(false)

  const toggleCard = () => {
    setShowInfo(showInfo => !showInfo)
  }

  const toggleLike = () => {
    setIsLiked(isLiked => !isLiked)
  }

  const handleDelete = ((id) => {
    if(window.confirm("Do you want to delete?")){
      fetch("http://localhost:3000/champions/"+id, {
        method: "DELETE"})
        .then(() => {
          window.location.reload()
        })
        .catch((error) => {
          console.log(error.message)
        })
    }
  })

  return (
    <div className='card'>
      <div  onClick={toggleLike} className='emoji-button'>
        {isLiked ? (
           <button className="emoji-button like">★</button>
        ) : (
          <button className="emoji-button unlike">☆</button>
         )}
      </div>
      <button onClick={() => {handleDelete(champion.id)}} className="emoji-button delete">🗑</button>
      <div onClick={toggleCard}>
        {showInfo ? <Front icon={champion.icon} name={champion.name} /> : 
                    <Back champion={champion} />} 
      </div>
    </div>
  )
}

export default ChampionsCard