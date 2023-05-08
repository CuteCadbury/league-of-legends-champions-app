import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ChampionsList from './components/ChampionsList'
import ChampionsFilter from './components/ChampionsFilter'
import ChampionsFavorite from './components/ChampionsFavorite'
import NewChampions from './components/NewChampion'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './components/Home'
import { useEffect, useState } from 'react';

function App() {

  const [champions, setChampions] = useState([])
  const [searchFiltered, setSearchFiltered] = useState(champions)

  const fetchData = async() => {
    try {
      const resp = await fetch('http://localhost:3000/champions')
      const champions = await resp.json()
      setChampions(champions)
      setSearchFiltered(champions)
    } catch (error) {
        alert('ERROR!')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleSearch = (searchValue) => {
    const searchFiltered = champions.filter(champion => 
      champion.name.toLowerCase().includes(searchValue.toLowerCase()))
      setSearchFiltered(searchFiltered)
  }

  const submitNewChampion = (newChampObj) => {
    setChampions([...champions, newChampObj])
  }

  const handleFavoriteChampion = (updatedChampion) =>{
    const updatedChampionArray = champions.map((champion) => {
      if(champion.id === updatedChampion.id){
        return updatedChampion
      } else {
        return champion
      }
    })
    setChampions(updatedChampionArray)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Header slogan="League of Legends" storeName="Welcome to Summoner's Rift"/>
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/champions">
                <ChampionsFilter 
                  handleSearch={handleSearch}/>
                <ChampionsList 
                  champions={searchFiltered}/>
              </Route>
              <Route exact path="/favorites">
              <ChampionsFavorite 
                champions={champions}
                onFavoriteChampion={handleFavoriteChampion}
              /> 
              </Route>
              <Route exact path="/add-new">
                <NewChampions 
                  submitNewChampion={submitNewChampion}/>
              </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;