/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const Footer = () => {
    return (
        <>
            <footer className="footer mt-70">
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 text-center text-md-start">
                                <Link href="/">
                                    <a>
                                        <img alt="Zaer Logo" src="/assets/imgs/template/logo2.png" />
                                    </a>
                                </Link>
                                
                            <div className="color-gray-900 text-heading-6 mr-30 text-mb-sm-20 text-md-center" >
                            <p>
                                  Enabling Independence</p></div>
                            </div>
                            <div className="col-md-8 col-sm-6 text-center text-md-end">
                            
                            
                                <span className="color-gray-900 text-heading-6 mr-30 text-mb-sm-20">Ready to get started?</span>
                                
                                    <a className="btn btn-square" href="tel:0420535983">Call Us Now </a>
                                
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Contact</h4>
                            <div className="mt-20 text-body-text color-gray-600 mb-20">4517 Washington Ave. Manchester, Kentucky 39495</div>
                            <div className="mt-20 text-body-text color-gray-600">(239) 555-0108</div>
                            <div className="text-body-text color-gray-600">contact@agon.com</div>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">About Us</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/#">
                                        <a>Mission &amp; Vision</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Our Team</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-career">
                                        <a>Careers</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Press &amp; Media</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Advertising</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Testimonials</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Discover</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/blog-2">
                                        <a>Our Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-pricing-1">
                                        <a>Plans &amp; Pricing</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Knowledge Base</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Cookie Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Office Center</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-1">
                                        <a>News &amp; Events</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Support</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/page-faqs-1">
                                        <a>FAQs</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Editor Help</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Community</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Live Chatting</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-contact">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Support Center</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-16">
                            <h4 className="text-heading-5">Useful links</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/#">
                                        <a>Request an offer</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>How it works</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-pricing-2">
                                        <a>Pricing</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Reviews</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Stories</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="footer-bottom mt-20">
                        <div className="row">
                            <div className="col-md-6">
                                <span className="color-gray-400 text-body-lead">© ZAER Support Services 2022</span>
                                {/* <div className="site-copyright color-gray-400">
                                Copyright 2022 © Zaer - Support Services.<br />Designed
                                by
                                <Link href="http://codeteki.au"><a target="_blank" >&nbsp; Codeteki Digital Services</a></Link>
                            </div> */}
                                <Link href="/privacy">
                                    <a className="text-body-text color-gray-400 ml-50">Privacy policy</a>
                                </Link>
                                
                            
                            
                                <Link href="/terms-services">
                                    <a className="text-body-text color-gray-400 ml-50">Terms of service</a>
                                </Link>
                                <div className="col-md-6 ">
                                <Link  href="https://www.codeteki.au"><a target="_blank"  className="text-body-lead color-green-900">&nbsp; Design by Codeteki - www.codeteki.au</a></Link>
                                </div>
                            </div>
                                
                            <div className="col-md-6 text-center text-lg-end text-md-end">
                           
                                <div className="footer-social">
                                
                                    <Link href="https://facebook.com">
                                        <a className="icon-socials icon-facebook" target="_blank"></a>
                                    </Link>
                                    <Link href="https://twitter.com">
                                        <a className="icon-socials icon-twitter"target="_blank"></a>
                                    </Link>
                                    <Link href="https://www.instagram.com/codeteki.com.au/">
                                        <a className="icon-socials icon-instagram" target="_blank"></a>
                                    </Link>
                                    <Link href="https://www.linkedin.com">
                                        <a className="icon-socials icon-linkedin" target="_blank"></a>
                                    </Link>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
               
            </footer>
        </>
    );
};

export default Footer;