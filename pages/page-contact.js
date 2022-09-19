import Layout from "../components/layout/Layout";


function Contact() {
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-breadcrums">
                        <div className="container text-center">
                            <h1 className="text-heading-2 color-gray-1000 mb-20">Contact Us</h1>
                            <p className="text-body-text color-gray-500">We understand the challenges 
                                    that you may face on a daily basis, and are dedicated to providing the service<br className="d-lg-block d-none" />
                                     you need to live a fulfilling life. We offer a range of disability services tailored 
                                     to suit your individual needs. <br className="d-lg-block d-none" /> Whether you're living with autism or wheelchair bound,
                                      we have a range of support services for you.</p>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mb-20 mt-140">
                        <div className="bdrd-58 box-gray-100 icon-wave">
                            <div className="row">
                                <div className="col-lg-12 mb-60"><span className="text-body-capitalized text-uppercase">Contact us</span>
                                    <h2 className="text-heading-3 color-gray-900 mt-10">Disability support <br className="d-lg-block d-none" />
                                We are here for you.</h2>
                                    <p className="text-body-text color-gray-600 mt-20">Ending your search for NDIS care
                                    <br className="d-lg-block d-none" />Enabling Independence.</p>
                                </div>
                                <div className="col-lg-4 mb-40">
                                    <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">ZAER Support Services</h4>
                                    <p className="text-body-text color-gray-600">Tarneit<br />Victoria</p>
                                    <p className="text-body-text color-gray-600">support@zaer.com</p>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control"  placeholder="Enter your name" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control"  placeholder="Comapy (optioanl)" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control"  placeholder="Your email" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control"  placeholder="Phone number" /></div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group"><textarea className="form-control" placeholder="How can we help you"  /></div>
                                        </div>
                                        <div className="col-lg-12 mt-15"><button className="btn btn-black  mr-40 mb-20" type="submit">Send Message</button><br className="d-lg-none d-block" /><span className="text-body-text-md color-gray-500 mb-20">By clicking contact us button, you agree our terms and policy,</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-10 col-12 text-center mt-40">
                                <h2 className="text-heading-1 color-gray-900 mb-20">Our Location</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">Zaer Support Services is a disability support services provider  <br className="d-lg-block d-none" />based in Tarneit, Victoria..</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Ofice</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">205 North Michigan Avenue, Suite 810<br />Chicago, 60601, USA<br />Phone: (123) 456-7890<br />Email: contact@Evara.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Studio</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">205 North Michigan Avenue, Suite 810<br />Chicago, 60601, USA<br />Phone: (123) 456-7890<br />Email: contact@Evara.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Factory</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">205 North Michigan Avenue, Suite 810<br />Chicago, 60601, USA<br />Phone: (123) 456-7890<br />Email: contact@Evara.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>

        </>
    )
}

export default Contact;