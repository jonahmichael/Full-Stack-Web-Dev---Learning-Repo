import Navbar from './Navbar';
import Home from './Home';
function App() {
   const title = "Jonah's Blog";
  return (
    <div className="App">
      <Navbar />
      <Home />
      <h1>{ title }</h1>
      
    </div>
  );
}

export default App;
