//this is a stateless functional component
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" >New blog</a>

            </div>
        </nav>
     );
}
 
export default Navbar;