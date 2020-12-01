import HelloWorld from './Components/HelloWorld';
import MyCounter from './Components/MyCounter';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {

  return (
    <div>
        {/* <h1 className="font-b">Welcome to my App</h1> */}
      
      <Header />
      <HelloWorld name="Greeshma" />
      <Footer />
      {/* <MyCounter /> */}
    </div>
  );
}

export default App;
