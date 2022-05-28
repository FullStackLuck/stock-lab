import { Link } from "react-router-dom";


const Nav = (props)=>{
    return(

        <div className="nav">
        <Link to="/">Home Page</Link>
        <Link to="/About">About</Link>
        <Link to="/Stock">Dashboard</Link>
        </div>
    )
}

export default Nav;
