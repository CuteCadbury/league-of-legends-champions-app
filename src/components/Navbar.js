import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/champions">
        All Champions
      </NavLink>
      <NavLink exact to="/favorites">
        My Favorite Champions
      </NavLink>
      <NavLink exact to="/add-new">
        Add A New Champion
      </NavLink>
    </div>
  )
}

export default Navbar

