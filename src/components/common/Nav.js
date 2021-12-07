import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/characters" className="navbar-item">
            Character Index
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav