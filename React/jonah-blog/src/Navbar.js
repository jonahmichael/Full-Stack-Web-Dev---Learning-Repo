const Navbar = () => {
  return (  

    <nav className="navbar">
      <h1> This is Jonah's Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={{ color: '#f1356d' ,
        backgroundColor: '#fff', 
        borderRadius: '8px'
        }}>New Blog</a>
      </div>
    </nav>
  );
}
 
export default Navbar;