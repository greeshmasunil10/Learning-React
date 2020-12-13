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
  // const url = ""
  // const url = "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm21-background-tong-058.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=710a6fed5b1923da8d5f95191839ef8a"
  const url = "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg?auto=format&q=60&w=1815&h=1020.9375&fit=crop&crop=faces"
  return (
    <div className="relative pb-10 min-h-screen text-gray-600 bg-gray-50" >

      {/* <div class="bg-fixed bg-cover  w-full h-full"
      style= {{'backgroundImage' : `url(${url})` }}
                    className="w-full h-64 bg-blue bg-cover" > */}

      <Router>
      <Header />
          <div className="p-3">
      {/* <div class="bg-fixed bg-cover  w-full h-full"
      style= {{'backgroundImage' : `url(${url})` }}
                    className="w-full h-64 bg-blue bg-cover" ></div> */}
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
      </div>
      // {/* <MyCounter /> */}
    // </div>
  );
}
export default App;
