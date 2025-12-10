import './App.css';
import Navbar from './Navbar';
import Home from './Home';
function App() {
   const title = "Jonah's Blog";
   const likes= 50;
   const person = { name: 'Jonah', age: 19 };
  return (
    <div className="App">
      <div>
        <h1>Welcome to {title}</h1>
        <p>This blog has {likes} likes</p>
        {/* <p>{person.name} is {person.age} years old</p> */}
        <Home />
        <Navbar />
      </div>
    </div>
  );
}

export default App;
