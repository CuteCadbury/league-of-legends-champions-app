import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
<div className='Navbar'>
      <NavLink 
      to="/"
      exact>
        Home
      </NavLink>
      <NavLink
      to="/champions"
      exact>
        All Champions
      </NavLink>
      <NavLink
      to="/favorites"
      exact>
        My Favorite Champions
      </NavLink>
      <NavLink
      to="/add-new"
      exact>
        Add A New Champion
      </NavLink>
    </div>
  )
}

export default Navbar


