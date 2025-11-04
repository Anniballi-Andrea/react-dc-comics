
import facebook from "../assets/img/footer-facebook.png"
import twitter from "../assets/img/footer-twitter.png"
import youtube from "../assets/img/footer-youtube.png"
import pinterest from "../assets/img/footer-pinterest.png"
import periscope from "../assets/img/footer-periscope.png"
export default function Footer() {



    return (
        <footer>
            <div className="footer_bg_img">
                <div className="container d-flex justify-content-between">
                    <div className="d-flex">
                        <div className="link">
                            <ul>
                                <li><h4>DC COMICS</h4></li>
                                <li><a href="">Characters</a></li>
                                <li><a href="">Comics</a></li>
                                <li><a href="">Movies</a></li>
                                <li><a href="">TV</a></li>
                                <li><a href="">Games</a></li>
                                <li><a href="">Videos</a></li>
                                <li><a href="">Nevs</a></li>
                                <li><h4>SHOP</h4></li>
                                <li><a href="">Shop DC</a></li>
                                <li><a href="">Shop DC Collectibles</a></li>
                            </ul>
                        </div>
                        <div className="link">
                            <ul>
                                <li><h4>DC</h4></li>
                                <li><a href="">Terms of us</a></li>
                                <li><a href="">Privacy policy (New)</a></li>
                                <li><a href="">Ad Choices</a></li>
                                <li><a href="">Advertising</a></li>
                                <li><a href="">Jobs</a></li>
                                <li><a href="">Subscriptions</a></li>
                                <li><a href="">Talent Workshops</a></li>
                                <li><a href="">CPSC Certificaties</a></li>
                                <li><a href="">Ratings</a></li>
                                <li><a href="">Shop Help</a></li>
                                <li><a href="">Contact UsS</a></li>
                            </ul>
                        </div>
                        <div className="link">
                            <ul>
                                <li><h4>SITES</h4></li>
                                <li><a href="">DC</a></li>
                                <li><a href="">MAD Magazine</a></li>
                                <li><a href="">DC Kids</a></li>
                                <li><a href="">DC Universe</a></li>
                                <li><a href="">DC Power Visa</a></li>
                            </ul>
                        </div>


                    </div>
                    <div className="dc_bg">

                    </div>

                </div>

            </div>
            <div className="footer_bg">
                <div className="container d-flex justify-content-between follow">
                    <button>SING-UP NOW!</button>
                    <div className="social d-flex align-items-center ">
                        <p><strong>FOLLOW US</strong></p>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={youtube} alt="" />
                        <img src={pinterest} alt="" />
                        <img src={periscope} alt="" />


                    </div>
                </div>
            </div>

        </footer>
    )
}