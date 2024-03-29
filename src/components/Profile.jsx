
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Profile=()=>{

    const {loggedInUser} = useContext(UserContext)
    return(
    <div className="user">
        <img  src={loggedInUser.avatar_url}  alt="avatar"></img>
        <p>{loggedInUser.username}</p>
        <p>{loggedInUser.name}</p>
        <nav className="home-page-link">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
            </nav>
    </div>
    )
}

export default Profile;