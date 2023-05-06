const ChampionsCard = ({ champion }) => {

  const { icon, name, title, tags, description } = champion

  return (
    <div className="card">
      <img src={icon} alt={"champion name"}/>
      <h3>{name}</h3>
      <p>"{title}"</p>
      <p>{tags}</p>
      <ul>Description: {description}</ul>
    </div>
  )
}

export default ChampionsCard
