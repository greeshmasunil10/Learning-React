import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HelloWorld from './Components/HelloWorld';
import MyCounter from './Components/MyCounter';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutUs from './View/AboutUs';
import Home from './View/Home';
import Product from './View/Product';


function App() {

  return (
    <div>
      {/* <HelloWorld name="User" /> */}
      <Router>
      <Header />
          <div className="p-3">
            <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/about">
                  <AboutUs />
              </Route>
              <Route path="/products/:id">
                  <Product />
              </Route>
            </Switch>
          </div>

      <Footer />
      </Router>

      {/* <MyCounter /> */}
    </div>
  );
}

export default App;
