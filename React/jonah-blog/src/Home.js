const Home = () => {
  const hanfleClick = () => {
    console.log('Hello, Jonah');
  }

  return ( 
    <div className="home"> 
    <h2>Home Page</h2>
    <p>Welcome to Jonah's Blog. This is the home page where you can find the latest posts and updates.</p> 
    <button onClick={hanfleClick}>Read More</button>
    </div>

   );
}
 
export default Home;