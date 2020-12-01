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


function App() {

  return (
    <div>

      {/* <HelloWorld name="User" /> */}
      <Router>
      <Header />
          <div className="p-3">
            <switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/about">
                  <AboutUs />
              </Route>
            </switch>
          </div>

      <Footer />
      </Router>

      {/* <MyCounter /> */}
    </div>
  );
}

export default App;
