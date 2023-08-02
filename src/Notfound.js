import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notFound">
        <h1>Sorry</h1>
        <p>That Page can not be found</p>
        <Link to="/" >Back to HomePage....</Link>
        </div>
     );
}
 
export default NotFound;