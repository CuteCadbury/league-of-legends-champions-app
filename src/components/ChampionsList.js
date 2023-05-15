import ChampionsCard from './ChampionsCard'

const ChampionsList = ({ champions, onFavoriteChampion }) => {
  
  const championsCard = champions.map((champion) => {
    return <ChampionsCard 
              key={champion.id} 
              champion={champion} 
              onFavoriteChampion={onFavoriteChampion}
              />})

  return (
    <div className="championContainer">
      <h1>All Champions</h1>
      {championsCard}
    </div>
  )
}

export default ChampionsList

