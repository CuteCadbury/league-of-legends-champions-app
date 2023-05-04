import ChampionsCard from './ChampionsCard'

const ChampionsList = ({ champions }) => {

    const championsCard = champions.map((champion) => {
      return <ChampionsCard 
                key={champion.id} 
                champion={champion} 
                // icon={champion.icon}
                // name={champion.name}
                // title={champion.title}
                // tags={champion.tags}
                // description={champion.description}
                //stats={champion.stats}
                />})
    

    return (
      <div className="container">
        <h2>All Champions</h2>
        {championsCard}
      </div>
    )
  }
  
  export default ChampionsList
