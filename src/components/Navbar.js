import { NavLink } from 'react-router-dom'
import fog from '../logos/fog.png'

const style = {
  background: `url(${fog})`,
  padding: "0.7em",
   margin: "10em 0 0 0",
  color: "rgb(240, 230, 210)",
  verticalAlign: "center",
  textDecoration: "none",
}

const activeStyle = {
  fontWeight: "bolder",
  color: "rgb(205, 250, 250)",
  border: "2px solid rgb( 3, 151, 171)",
}

const Navbar = () => {
  return (
    <div className='Navbar'>
      <NavLink 
      to="/"
      exact
      style={style} 
      activeStyle={activeStyle}
      >
        Home
      </NavLink>
      <NavLink
      to="/damwon-skins"
      exact
      style={style} 
      activeStyle={activeStyle}
      >
        DWG Skins
      </NavLink>
      <NavLink
      to="/champions"
      exact
      style={style} 
      activeStyle={activeStyle}
      >
        All Champions
      </NavLink>
      <NavLink
      to="/favorites"
      exact
      style={style} 
      activeStyle={activeStyle}
      >
        My Favorite Champions
      </NavLink>
      <NavLink
      to="/add-new"
      exact
      style={style} 
      activeStyle={activeStyle}
      >
        Add A New Champion
      </NavLink>
    </div>
  )
}

export default Navbar
 

