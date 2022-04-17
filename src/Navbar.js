import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="logo">
                aesthetic-blog
            </div>
            <div className="navlinks">
                <Link to="/blogs">List Blogs</Link>
                <Link to="/create">Create Blog</Link>
            </div>
        </header>
      );
}
 
export default Navbar;