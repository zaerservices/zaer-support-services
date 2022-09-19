/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

import Banner from "../components/layout/Banner";
import Cards from "../components/layout/Cards";
import PageData from '../data/pageData.json'

import Layout from "../components/layout/Layout";

// const ModalVideo = dynamic(import("react-modal-video"), {
//     ssr: false,
// });

function Home() {
    const [isOpen, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };

    return (
        <>
            {/* <Link href="/#">
                <a>Link</a></Link>
            </Link> */}
            <Layout>
            <Banner/>
            <section>
                 <div className="section-box overflow-visible mt-70">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-1.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-2.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-3.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-4.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-5.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-6.svg" /></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <section className="section-box">
                    <div className="banner-hero banner-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <h1 className="text-display-2">
                                    Z<span className="color-green-900">A</span>ER 
                                        <span className="color-green-900"> Support Services </span>
                                        your NDIS care support provider
                                    </h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                                    Zaer Support Services we provide a range of disability services. 
                                    In doing so we aim to make a difference in the lives of those living with a disability. 
                                    The goal is to make each of our participants’ lives easier, fairer, and make sure that you're
                                     always empowered in your choices..
                                    </p>
                                   
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                       
                                        <img className="img-responsive shape-2" alt="Agon" src="assets/imgs/template/banner1.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
             
               
                {/* <section className="section-box">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage1/img-2.png" alt="Agon" />
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <span className="tag-1 bg-green-900">What We Do, What You Get</span>
                                <h3 className="text-heading-1 mt-30">
                                Ending your search for <span className="color-green-900">NDIS care </span>
                                     Enabling your Independence
                                </h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">
                                The company is established with the sole aim of offering
                                 support that always puts participants first. We believe that 
                                 every person deserves to be treated with dignity and respect.
                                  It is for this reason that we offer a number of different 
                                  services and offer flexible hours to meet the needs of everyone
                                   who needs our help.

                                </p>
                                <div className="line-bd-green mt-50" />
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                        Professional, Upholding ethics
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet
                                            hand-crafted templates.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                        Get your NDIS Plan underway
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet
                                            hand-crafted templates.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                        Working with you to achieve your goals
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet
                                            hand-crafted templates.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                        Passionate and qualified team members
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet
                                            hand-crafted templates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <div className="section-box">
                    <div className="container mt-120">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-sm-12 mb-30"><img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage6/img-1.png" alt="Agon" /></div>
                            <div className="col-xl-7 col-lg-6 col-sm-12 block-we-do"><span className="tag-1 bg-green-900">What We Do, What You Get</span>
                                <h3 className="text-heading-1 mt-20">NDIS Care Support with  Z<span className="color-green-900">A</span>
                                    ER Support Services</h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">
                                The company is established with the sole aim of offering
                                 support that always puts participants first.</p>
                                <div className="row mt-20">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-20">
                                        <h4 className="text-heading-6 icon-leaf"> Professional, Upholding ethics</h4>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-20">
                                        <h4 className="text-heading-6 icon-leaf">Get your NDIS Plan underway</h4>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-20">
                                        <h4 className="text-heading-6 icon-leaf">Working with you to achieve your goals</h4>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-20">
                                        <h4 className="text-heading-6 icon-leaf"> Passionate and qualified team members</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <section className="section-box ">
                    <div className="container mt-120">
                        <div className="bg-2 bdrd-58 pattern-white pb-60">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-1 color-gray-900">
                                        How can we help your NDIS Journey?
                                    </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">
                                    As a certified NDIS provider, we are here to support you with a wide range of quality 
                                    programs that blend towards learning, development, and community access
                                    </p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="container mt-70">
                                <Cards/>

                              
                            </div>
                            </div>

                            </div> 
                            
                        </div>
                   
                    
                </section>

{/*                 
               
                <section className="section-box">
                    <div className="container mt-120">
                        <div className="bg-2 bdrd-58 pattern-white pb-60">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-1 color-gray-900">
                                        What We Offer
                                    </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">
                                    We are an experienced team of passionate professionals who uphold the highest standards of ethical care.
                                     With many years of combined experience, we believe in empowerment, dignity and accountability.
                                    </p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                            <div className="container mt-70">
                                
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
                                <h2 className="text-heading-1 color-gray-900">
                                What We Offer
                                </h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                We are an experienced team of passionate professionals who uphold the highest standards of ethical care.
                                     With many years of combined experience, we believe in empowerment, dignity and accountability.
                                </p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-5 bg-business hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/template/icon2.svg" alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-3 mt-20">
                                    Enabling Opportunities
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                        You are always welcome to visit our little
                                        den. Professional in teir craft! All
                                        products were super amazing with strong
                                        attension to details, comps and overall
                                        vibe.
                                    </p>
                                    <div className="mt-30">
                                        <Link href="/page-about-1"><a className="btn btn-default btn-white ">Learn more</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-9 bg-local hover-up">
                                    <div className="grid-1-img">
                                        <img src="assets/imgs/template/icon1.png" alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-3 mt-20">
                                    Supporting Independence
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                        You are always welcome to visit our little
                                        den. Professional in teir craft! All
                                        products were super amazing with strong
                                        attension to details, comps and overall
                                        vibe.
                                    </p>
                                    <div className="mt-30">
                                        <Link href="/page-about-2"><a className="btn btn-default btn-white ">Learn more</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-2 bg-social hover-up">
                                    <div className="grid-1-img">
                                        <img src="assets/imgs/template/icon3.png" alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-3 mt-20">
                                    Cultural & Linguistic Diversity
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                        You are always welcome to visit our little
                                        den. Professional in teir craft! All
                                        products were super amazing with strong
                                        attension to details, comps and overall
                                        vibe.
                                    </p>
                                    <div className="mt-30">
                                        <Link href="/page-about-3"><a className="btn btn-default btn-white ">Learn more</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="section-box">
                    <div className="container mt-110">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <h3 className="text-heading-1 mb-10">
                                    Our Happy Customers
                                </h3>
                                <p className="text-body-lead-large color-gray-600">
                                    Know about our clients, we are a woldwide
                                    corporate brand
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-80">
                        <TestimonialSlider />
                    </div>
                </section> */}
                {/* <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-1 mb-10">Latest News</h3>
                                <p className="text-body-lead-large color-gray-600">
                                    From Our blog and Event fanpage
                                </p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-start pt-30">
                                <Link href="/blog-1"><a className="btn btn-black icon-arrow-right-white">View More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-90">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <span className="tag-dot">Company</span><Link href="/blog-single"><a className="text-heading-4">We can blend colors multiple ways, the most
                                        common</a></Link>
                                    <div className="grid-4-img">
                                        <Link href="/blog-single">
                                            <a><img src="/assets/imgs/page/homepage1/img-news-1.png" alt="Agon" /></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <span className="tag-dot">Marketing Event</span><Link href="/blog-single"><a className="text-heading-4">How To Blow Through Capital At An
                                        Incredible Rate</a></Link>
                                    <div className="grid-4-img">
                                        <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-2.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <span className="tag-dot">Customer Services</span><Link href="/blog-single"><a className="text-heading-4">Design Studios That Everyone Should Know
                                        About?</a></Link>
                                    <div className="grid-4-img color-bg-4">
                                        <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-3.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="section-box section-green mt-100">
                    <div className="container mt-70">
                        <h3 className="text-heading-1 color-white text-center mb-10">
                        Different People, Different Needs <br className="d-lg-block d-none" />Personalized Services for All 
                        </h3>
                    </div>
                    
                    
                </section>
                {/* <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-2 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7">
                                            <span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">
                                                Subscribe our newsletter
                                            </h4>
                                            <p className="text-body-text color-gray-500">
                                                By clicking the button, you are
                                                agreeing with our
                                            </p>
                                            <Link href="/page-terms"><a>Term &amp; Conditions</a></Link>
                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter">
                                                    <input className="input-newsletter"  placeholder="Enter you mail .." /><button className="btn btn-send" />
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1">
                                                <img src="/assets/imgs/template/chart.png" alt="Agon" />
                                            </div>
                                            <img className="img-responsive img-newsletter" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="7e90gBu4pas"
                    onClose={() => setOpen(false)}
                /> */}
            </Layout>

        </>
    )
}

export default Home;