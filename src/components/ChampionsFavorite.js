import React from 'react'
import ChampionsCard from './ChampionsCard'

const ChampionsFavorite = ({ champions, onFavoriteChampion }) => {

    const favoriteChampions = champions.filter((champion) => (champion.favorite))


    const favoriteChampionsCard = favoriteChampions.map((champion) => (
        <ChampionsCard 
            key={champion.id} 
            champion={champion} 
            onFavoriteChampion={onFavoriteChampion}/>
    ))


  return (
    <div>
        <h1>My Favorite Champions</h1>
        {favoriteChampionsCard}
    </div>
  )
}

export default ChampionsFavorite