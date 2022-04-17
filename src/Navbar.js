import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="logo">
                aesthetic-blog
            </div>
            <div className="navlinks">
                <Link to="/">View Blogs</Link>
                <Link to="/create">About Us</Link>
            </div>
        </header>
      );
}
 
export default Navbar;