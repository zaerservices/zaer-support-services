import React from 'react'
import Layout from "../components/layout/Layout";
import NewCard from "../components/layout/NewCard";


function Services() {
    return (
        <>
            <Layout>
             {/* <section className="section-box">
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 mb-30"><span className="tag-1 bg-6 color-green-900">Built Exclusively For You</span>
                                <h3 className="text-heading-1 mt-30">Design that makes you stand out.</h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">We design beautiful, functional and innovative websites that speak to your target audience and make you stand up from the crowd. With a deep understanding of your business, we make sure to capture your personality, vision and values to create a website that is uniquely yours.We believe that a good graphic design is about creating an eye-catching visual, combined with a memorable user experience.</p>
                                <div className="line-bd-green mt-50" /> */}
                                {/* <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Designing for success</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">With a fully customised design process, our designers work with you from start to finish to create a website that meets your needs. </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Save with our expertise</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">We take care of everything - from design concept to website hosting and maintenance, giving you full freedom to focus on running your business.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Create without limitations</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">We have all the tools and resources at our disposal so we can create websites for all types of businesses. What are you waiting for?</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Pricing that makes sense</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">We offer competitive pricing for our web design services with no hidden costs or extra fees, so you can be sure that you're getting the best value for your money.</p>
                                    </div>
                                </div> */}
                            {/* </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <div className="inner-image"><img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage2/office.jpg" alt="Agon" />
                                    <div className="block-image-bottom"> */}
                                    {/* <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage2/img-built-2.png" alt="Agon" /> */}
                                    {/* </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                
                    <section className="section-box">
                        <div className="banner-hero banner-head-image" style={{ background: 'url(assets/imgs/template/disable.jpg)' }}>
                            <div className="container">
                                
                                    <h1 className="text-heading-1 text-center color-white mt-55">Services</h1>
                                </div>
                            </div>
                       
                    </section>
                    {/* <section className="section-box mt-70">
                        <div className="container mt-70">
                            <h3 className="text-heading-1 text-center mb-10">
                                Services
                            </h3>
                        </div>
                        
                    </section> */}
                    {/* <section className="section-box mt-70 mb-50">
                        <div className="container">
                        
                           
                            <div className="row">
                                <div className="col-lg-2" />
                                <div className="col-lg-8">
                                    <div className="single-detail mt-50">
                                   
                                        
                                          <Cards/>
                                        
                                   
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <section className="section-box ">
                    <div className="container mt-120">
                        <div className="bg-2 bdrd-58 pattern-white pb-60">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-1 color-gray-900">
                                    NDIS Care with Zaer
                                    </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">
                                    We strive to provide you with the best possible care,
                                    freedom, and respect, and make sure that you're
                                    always empowered in your choices. We’ll be with you
                                    every step of the way!
                                    </p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="container mt-70">
                                <NewCard/>

                              
                            </div>
                            </div>

                            </div> 
                            
                        </div>
                   
                    
                </section>
               

            </Layout>

        </>
    )
}

export default Services;