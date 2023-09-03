
import './Footer.css'
const Footer = () => {
    return (
        <>
            <footer className='mt-5'>
                <div className="container">
                    <div className="box">
                        <h3>About us</h3>
                        <p className='text-left'>Experience the magic of Pizzeria Cafe, where we turn ordinary moments into extraordinary memories. Our artisanal pizzas, accompanied by a range of specialty coffees, promise a symphony of flavors that will leave you craving for more</p>

                    </div>
                    <div className="box">
                        <h3>Quik Links</h3>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Menu</a>
                            </li>

                            <li>
                                <a href="#">Gallery</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>

                        </ul>
                    </div>
                    <div className="box">
                        <h3>Follow Us</h3>
                        <div>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/codersgyan">
                                        <img src="./icons/facebook.svg" alt="" />
                                        <span>Facebook</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/CoderGyan">
                                        <img src="./icons/twitter.svg" alt="" />
                                        <span>Twitter</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="./icons/google.svg" alt="" />
                                        <span>Google +</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/codersgyan/">
                                        <img src="./icons/instagram.svg" alt="" />
                                        <span>Instagram</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </footer>
            <footer className="copyright">
                <div>
                    Designed and Developed by <a href="/" target='_blank' >Jahid Hasan</a>
                </div>
            </footer>
        </>
    );
};

export default Footer;
