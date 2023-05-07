import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ChampionsFilter from './components/ChampionsFilter'
import ChampionsList from './components/ChampionsList'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './components/Home'
import NewChampions from './components/NewChampion'

function App() {

  const [champions, setChampions] = useState([])
  const [searchFiltered, setSearchFiltered] = useState(champions)

  const fetchData = async() => {
    try {
      const resp = await fetch('http://localhost:3000/champions')
      const championsData = await resp.json()
      setChampions(championsData)
      searchFiltered(championsData)
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
              </Route>
              <Route exact path="/add-new">
                <NewChampions />
              </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;