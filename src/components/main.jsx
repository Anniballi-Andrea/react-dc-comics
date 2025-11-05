

import buyComix from "../assets/img/buy-comics-digital-comics.png"
import merc from "../assets/img/buy-comics-merchandise.png"
import subscription from "../assets/img/buy-comics-subscriptions.png"
import locator from "../assets/img/buy-comics-shop-locator.png"
import powerVisa from "../assets/img/buy-dc-power-visa.svg"
import Comics from "./Comics"

export default function Main() {



    return (
        <main>
            <div className="container_main bg_jumbo">
                <div className="container ">
                    <span className="current_series bg-primary">
                        <h2><strong>CURRENT SERIES</strong></h2>
                    </span>

                </div>
            </div>
            <div className="container_main bg_black">
                <div className="container">
                    <div className="row">
                        <Comics />
                        <div className="col-12 d-flex justify-content-center"><button>LOAD MORE</button></div>
                    </div>
                </div>

            </div>

            <div className="container-fluid bg_blue">
                <div className="container d-flex justify-content-between align-items-center">
                    <a href="">
                        <img src={buyComix} alt="" /> DIGITAL COMICS
                    </a>
                    <a href="">
                        <img src={merc} alt="" /> DC MERCHANDISE
                    </a>
                    <a href="">
                        <img src={subscription} alt="" /> SUBSCRIPTION
                    </a>
                    <a href="">
                        <img className="locator" src={locator} alt="" /> COMIC SHOP LOCATOR
                    </a>
                    <a href="">
                        <img className="visa" src={powerVisa} alt="" /> DC POWER VISA
                    </a>

                </div>
            </div>
        </main>
    )
}


