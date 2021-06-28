import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/Wishlist/Wishlist';
import Footer from './Components/Footer/Footer';
import Content from './Components/Content/Content';
import Men from './Components/Content/Men';
import Women from './Components/Content/Women';
import Kids from './Components/Content/Kids';
import Mobile from './Components/Content/Mobile';
import Shoes from './Components/Content/Shoes';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Switch>
               <Route exact path="/" component={Content} />
               <Route exact path="/cart" component={Cart} />
               <Route exact path="/wishlist" component={Wishlist} />
               <Route exact path="/men" component={Men} />
               <Route exact path="/women" component={Women} />
               <Route exact path="/kids" component={Kids} />
               <Route exact path="/mobile" component={Mobile} />
               <Route exact path="/shoes" component={Shoes} />
          </Switch>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
