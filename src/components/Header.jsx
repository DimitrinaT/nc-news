import { Link } from "react-router-dom"
      

const Header = () => {
    return( 
    <div className="header">
    <h1>NC NEWS</h1>
    <nav className="profile-link">
    <Link to={`/profile`}>My Profile</Link>
    </nav>
    </div>
    );
    }



export default Header;