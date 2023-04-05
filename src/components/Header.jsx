import { Link } from "react-router-dom"
      

      const Header = () => {
        return (
          <div className="header">
            <h1 className="header-title">NC NEWS</h1>
            <nav className="topics-link">
              <Link className="topic-link" to={`/coding`}>Coding</Link>
              <Link className="topic-link" to={`/cooking`}>Cooking</Link>
              <Link className="topic-link" to={`/football`}>Football</Link>
            </nav>
            <nav className="profile-link">
              <Link className="profile" to={`/profile`}>My Profile</Link>
            </nav>
          </div>
        );
      };
      




export default Header;