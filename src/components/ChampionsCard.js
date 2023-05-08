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

const ChampionsCard = ({ champion, onFavoriteChampion }) => {

  const {id, favorite} = champion
  const [ showInfo, setShowInfo ] = useState(true)
  const [ isFavorite, setIsFavorite ] = useState(favorite)

  const toggleCard = () => {
    setShowInfo(showInfo => !showInfo)
  }

  const handleDelete = (() => {
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

  const handleFavoriteChange = () => {
    setIsFavorite(isFavorite => !isFavorite)

    fetch('http://localhost:3000/champions/'+id, {
      method:"PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({favorite: !favorite})
    })
      .then(window.location.reload())
      // .then(updatedFavorite => onFavoriteChampion(updatedFavorite))
      // .then(data => console.log(data))
      .then(onFavoriteChampion)
      .catch((error) => {
        console.log(error.message)
      })

  }

  return (
    <div className='card'>
      <div onClick={handleFavoriteChange} className='emoji-button'>
        {isFavorite ? (
           <button className="emoji-button like">⭐️</button>
        ) : (
          <button className="emoji-button unlike">⭐️</button>
         )}
      </div>
      <button onClick={() => {handleDelete(id)}} className="emoji-button delete">🗑</button>
      <div onClick={toggleCard}>
        {showInfo ? <Front icon={champion.icon} name={champion.name} /> : 
                    <Back champion={champion} />} 
      </div>
    </div>
  )
}

export default ChampionsCard