import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogsDetails';
import NotFound from './Notfound';

function App() {

  return (
    
    <Router>
    <div className="App">
      <Navbar />
     <div className="content">
      <Switch>
        <Route exact path="/">
         <Home/>
        </Route>
        <Route path="/create">
         <Create/>
        </Route>
        <Route path="/blogs/:id">
         <BlogDetails/>
        </Route>
        <Route path="*">
         <NotFound />
        </Route>
      </Switch>
       
     </div>
    </div>
    </Router>
  );
}

export default App;
//so we can use this in other files
//in index.js we are using it
