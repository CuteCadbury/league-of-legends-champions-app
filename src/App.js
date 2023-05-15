import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Home from './components/Home'
import Skins from './components/DamwonSkins'
import ChampionsList from './components/ChampionsList'
import ChampionsFilter from './components/ChampionsFilter'
import ChampionsFavorite from './components/ChampionsFavorite'
import NewChampions from './components/NewChampion'
import Navbar from './components/Navbar'
import Header from './components/Header'
import slogan from './logos/slogan.png'

function App() {

  const url = 'http://localhost:3000/champions'
  const [champions, setChampions] = useState([])
  const [searchFiltered, setSearchFiltered] = useState(champions)

  const fetchData = async() => {
    try {
      const resp = await fetch(url)
      const champions = await resp.json()
      setChampions(champions)
      setSearchFiltered(champions)
    } catch (error) {
        alert(error.message)
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

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Switch>
              <Route exact path="/">
                <Header/>
                <Home />
              </Route>
              <Route exact path="/champions">
                <Header slogan={slogan}/>
                <ChampionsFilter 
                  handleSearch={handleSearch}/>
                <ChampionsList 
                  champions={searchFiltered}/>
              </Route>
              <Route exact path="/favorites">
                <Header slogan={slogan}/>
                <ChampionsFavorite 
                  champions={champions}
                  setChampions={setChampions}/> 
              </Route>
              <Route exact path="/add-new">
                <Header slogan={slogan}/>
                <NewChampions 
                  submitNewChampion={submitNewChampion}/>
              </Route>
              <Route>
                <Header slogan={slogan}/>
                <Skins />
              </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

