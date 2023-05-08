import ChampionsCard from './ChampionsCard'

const ChampionsList = ({ champions, onFavoriteChampion }) => {
  
  const championsCard = champions.map((champion) => {
    return <ChampionsCard 
              key={champion.id} 
              champion={champion} 
              onFavoriteChampion={onFavoriteChampion}
              />})

  return (
    <div className="container">
      <h2>All Champions</h2>
      {championsCard}
    </div>
  )
}

export default ChampionsList

