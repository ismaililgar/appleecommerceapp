import React, { Fragment, ReactFragment } from "react";
import Airpods from "./Airpods";
import Footer from "./Footer";
import Iphone from "./Iphone";
import Macbook from "./Macbook";
import Navbar from "./Navbar";
import Watch from "./Watch";

function Index() {
    return (
        <Fragment>
            <div className="container">
                <section className="section-1" id="section-1">
                    {/* navbar start */}
                    <Navbar />
                    {/* navbar end */}
                    {/* <!-- Logo --> */}
                    <a href="#" className="logo">
                        <i className="fab fa-apple"></i>
                    </a>
                    {/* <!--End of Logo --> */}

                    {/* <!-- Cube --> */}
                    <div className="cube-wrapper">
                        <div className="cube">
                            <div className="front-side">
                                <img src="ASSETS/images/iphone.png" />
                            </div>
                            <div className="back-side center">
                                <i className="fab fa-apple"></i>
                            </div>
                        </div>

                        {/* <!-- Controls --> */}
                        <div className="controls">
                            <a href="#" className="top-x-control">
                                <i className="fas fa-arrow-up "></i>
                            </a>
                            <a href="#" className="bottom-x-control">
                                <i className="fas fa-arrow-down "></i>
                            </a>
                            <a href="#" className="left-y-control">
                                <i className="fas fa-arrow-left "></i>
                            </a>
                            <a href="#" className="right-y-control">
                                <i className="fas fa-arrow-right "></i>
                            </a>
                            <a href="#" className="top-z-control">
                                <i className="fas fa-arrow-down "></i>
                            </a>
                            <a href="#" className="bottom-z-control">
                                <i className="fas fa-arrow-up "></i>
                            </a>
                        </div>
                        {/* <!-- End of Controls --> */}
                    </div>
                    {/* <!-- End of Cube --> */}

                    {/* <!-- Banner --> */}
                    <div className="section-1-banner center">
                        <h1>&#8592; Best Gift</h1>
                        <p>"Creativity is just connecting things."</p>
                        <span> - Steve Jobs</span>
                        <button type="button">Buy Now</button>
                    </div>
                    {/* <!-- End of Banner --> */}

                    {/* <!-- Slideshow --> */}
                    <div className="slideshow"></div>
                    {/* <!-- End of Slideshow --> */}
                </section>

                <section className="section-2" id="section-2">
                    {/* <!-- Iphone Section --> */}
                    <h1 className="section-2-heading">iPhone 12</h1>
                    {/* <!-- End of Iphone Section Heading --> */}

                    {/* <!--Iphone Section Images --> */}
                    <div className="iphones">
                        <img src="ASSETS/images/iPhones/iphones-1-img.png" className="iphone-img-1" />
                        <img src="ASSETS/images/iPhones/iphones-2-img.png" className="iphone-img-2" />
                    </div>
                    {/* <!-- End of Iphone Section  Images --> */}

                    {/* <!-- Iphone Section Buttons --> */}
                    <div className="iphone-btns">
                        <a href="#" className="iphone-btn center"><span>Learn More</span></a>
                        <a href="#" className="iphone-btn center"><span>Shop</span></a>
                    </div>
                    {/* <!-- End of Iphone Section Buttons --> */}
                </section>
                <section className="section-3 center" id="section-3">

                    <h1 className="section-3-heading">MacBook Air</h1>

                    <div className="section-3-content center">

                        <img src="ASSETS/images/MacBook/macbook-screen.png" className="macbook-img-1" />
                        <img src="ASSETS/images/MacBook/macbook-keyboard.png" className="macbook-img-2" />

                        {/* <!-- Loading --> */}
                        <div className="loading-wrapper">
                            <div className="loading center">
                                <i className="fab fa-apple"></i>
                                <div className="progress-bar"></div>
                            </div>
                        </div>
                        {/* <!-- End of Loading --> */}

                        <div className="macbook-info">
                            <h2 className="macbook-info-heading">Light. Speed.</h2>
                            <p className="macbook-price">Starting at $999</p>
                            <button className="macbook-btn">Buy Now</button>
                        </div>
                    </div>
                </section>
                <section className="section-4 center" id="section-4">
                    {/* <!-- Section 4 Watches --> */}
                    <div className="watches center">

                        {/* <!-- Watch Bands --> */}
                        <div className="watch-bands center">
                            <img src="ASSETS/images/watches/watch-band-1.jpg" className="watch-band-img" />
                            <img src="ASSETS/images/watches/watch-band-2.jpg" className="watch-band-img" />
                            <img src="ASSETS/images/watches/watch-band-3.jpg" className="watch-band-img" />
                            <img src="ASSETS/images/watches/watch-band-4.jpg" className="watch-band-img" />
                            <img src="ASSETS/images/watches/watch-band-5.jpg" className="watch-band-img" />
                            <img src="ASSETS/images/watches/watch-band-6.jpg" className="watch-band-img" />
                            <img src="ASSETS/images/watches/watch-band-7.jpg" className="watch-band-img" />
                            <img src="ASSETS/images/watches/watch-band-8.jpg" className="watch-band-img" />
                            <img src="ASSETS/images/watches/watch-band-9.jpg" className="watch-band-img" />
                        </div>
                        {/* <!-- End of Watch Bands --> */}

                        {/* <!-- Watch Cases --> */}
                        <div className="watch-cases center">
                            <img src="ASSETS/images/watches/watch-case-1.png" className="watch-case-img" />
                            <img src="ASSETS/images/watches/watch-case-2.png" className="watch-case-img" />
                            <img src="ASSETS/images/watches/watch-case-3.png" className="watch-case-img" />
                            <img src="ASSETS/images/watches/watch-case-4.png" className="watch-case-img" />
                            <img src="ASSETS/images/watches/watch-case-5.png" className="watch-case-img" />
                            <img src="ASSETS/images/watches/watch-case-6.png" className="watch-case-img" />
                            <img src="ASSETS/images/watches/watch-case-7.png" className="watch-case-img" />
                            <img src="ASSETS/images/watches/watch-case-8.png" className="watch-case-img" />
                            <img src="ASSETS/images/watches/watch-case-9.png" className="watch-case-img" />
                        </div>
                        {/* <!-- End of Watch Cases --> */}
                    </div>
                    {/* <!-- End of Section 4 Watches --> */}

                    {/* <!-- Watch Controls --> */}
                    <a href="#" className="watch-control watch-top-control center">
                        <i className="fas fa-angle-up"></i>
                    </a>
                    <a href="#" className="watch-control watch-right-control center">
                        <i className="fas fa-angle-right"></i>
                    </a>
                    <a href="#" className="watch-control watch-bottom-control center">
                        <i className="fas fa-angle-down"></i>
                    </a>
                    <a href="#" className="watch-control watch-left-control center">
                        <i className="fas fa-angle-left"></i>
                    </a>
                    {/* <!-- End of Watch Controls --> */}

                    {/* <!-- Watch Button --> */}
                    <button className="watch-btn">Buy Now</button>
                    {/* <!-- End of Watch Button --> */}
                </section>
                <section className="section-5 center" id="section-5">
                    {/* <!-- Section 5 Content --> */}
                    <div className="airpods">
                        {/* <!-- Section 5 Heading --> */}
                        <h1 className="section-5-heading">AirPods</h1>
                        {/* <!-- End of Section 5 Heading --> */}

                        {/* <!-- Section 5 Images --> */}
                        <img src="ASSETS/images/AirPods/airpods-1.png" className="airpods-img-1" />
                        <img src="ASSETS/images/AirPods/airpods-2.png" className="airpods-img-2" />
                        {/* <!-- End of Section 5 Images --> */}

                        {/* <!-- Section 5 Buttons --> */}
                        <div className="airpods-buttons">
                            <button className="airpods-btn">Learn More</button>
                            <button className="airpods-btn">Buy</button>
                        </div>
                        {/* <!-- End of Section 5 Buttons --> */}
                    </div>
                    {/* <!-- End of Section 5 Content --> */}
                </section>
            </div>
            <Footer></Footer>
        </Fragment>
    );
}

export default Index;