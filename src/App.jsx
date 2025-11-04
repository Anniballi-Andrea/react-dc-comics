import logo from "./assets/img/dc-logo.png"
function App() {


  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>


            <div className="d-flex " role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <div className="border_hover">
                    <a className="nav-link active" aria-current="page" href="#">CHARACTERS</a>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="border_hover">
                    <a className="nav-link" href="#">COMICS</a>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="border_hover">
                    <a className="nav-link active" aria-current="page" href="#">MOVIES</a>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="border_hover">
                    <a className="nav-link" href="#">TV</a>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="border_hover">
                    <a className="nav-link active" aria-current="page" href="#">GAMES</a>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="border_hover">
                    <a className="nav-link" href="#">COLLECTIBLES</a>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="border_hover">
                    <a className="nav-link active" aria-current="page" href="#">VIDEOS</a>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="border_hover">
                    <a className="nav-link" href="#">FANS</a>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="border_hover">
                    <a className="nav-link active" aria-current="page" href="#">NEWS</a>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="border_hover">
                    <a className="nav-link" href="#">SHOP</a>
                  </div>
                </li>

              </ul>
            </div>
          </div>

        </nav>

      </header>
      <main>

      </main>
      <footer>

      </footer>

    </>
  )
}

export default App
