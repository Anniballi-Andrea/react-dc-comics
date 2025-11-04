

import buyComix from "../assets/img/buy-comics-digital-comics.png"
import merc from "../assets/img/buy-comics-merchandise.png"
import subscription from "../assets/img/buy-comics-subscriptions.png"
import locator from "../assets/img/buy-comics-shop-locator.png"
import powerVisa from "../assets/img/buy-dc-power-visa.svg"

export default function Main() {



    return (
        <main>
            <div className="container_main">
                <div className="container">
                    <h3> --<i className="bi bi-chevron-right"></i>Content goes here<i className="bi bi-chevron-left"></i>--</h3>
                </div>
            </div>
            <div className="container_main bg-primary">
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


