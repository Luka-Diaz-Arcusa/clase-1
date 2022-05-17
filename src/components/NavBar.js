const  NavBar = () => {
    return (
      <div className="NavBar">
        <header>
        <h1> Luka tienda </h1>
        {/* puse links a twitter para que react no me salte waring porque los <a> están vacíos */}
        <a href="https://twitter.com/home">Categoria 1</a>
        <a href="https://twitter.com/home">Categoria 2</a>
        <a href="https://twitter.com/home">Categoria 3</a>
        <a href="https://twitter.com/home">Register</a>
        <a href="https://twitter.com/home">Login</a>
        </header>
      </div>
    );
  }
  
export default NavBar;