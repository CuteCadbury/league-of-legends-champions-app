const ChampionsFilter = ({ handleSearch }) => {

  return (
    <div>
      <input 
        type="text" placeholder="Type the champion name..." 
        onChange={(e) => handleSearch(e.target.value)} />
    </div>
  )
}

export default ChampionsFilter