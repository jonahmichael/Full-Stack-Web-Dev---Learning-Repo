import './App.css';

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
        <a href ={`https://www.google.com/search?q=${person.name}+age`}>Search {person.name}'s age</a>
      </div>
    </div>
  );
}

export default App;
