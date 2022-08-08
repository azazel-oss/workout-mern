import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  function handleClick() {
    logout();
  }
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout buddy</h1>
        </Link>
        <nav>
          <div>
            <button onClick={handleClick}>Log out</button>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
