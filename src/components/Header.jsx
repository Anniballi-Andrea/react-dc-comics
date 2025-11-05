import logo from "../assets/img/dc-logo.png"
import NavBar from "./NavBar"

export default function Header() {



    return (
        <header>
            <nav className="navbar navbar-expand-lg p-0">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a>


                    <div className="d-flex " role="search">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <NavBar />

                        </ul>
                    </div>
                </div>

            </nav>

        </header>
    )
}