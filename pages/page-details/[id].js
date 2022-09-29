import React from 'react'
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import { useEffect, useState } from "react";
import {useRouter} from 'next/router'
import data from '../../data/pageData.json'

function GroupActivities() {
     let Router = useRouter()

    const [singlePage, setSinglePage] = useState(null);


    const { id } = Router.query;


    useEffect(() => {
        setSinglePage(data.find((data) => data.id == id));
    }, [id]);

    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <Layout>
            {singlePage && (
                <div>
                    {/* <section className="section-box">
                        <div className="banner-hero banner-head-image" style={{ background: 'url(`${singlePage.img}`)' }}>
                        <div className="banner-hero banner-head-image">
                            <div className="container">
                                
                                    
                                    <h1 className="text-heading-1 color-white mt-30">{singlePage.title}</h1>
                                    <h2 className="text-heading-1 color-white mt-30">Our mission is to make the world a better place for those with disabilities and their loved ones</h2>

                                </div>
                            </div>
                       
                    </section> */}
                    {/* <section className="section-box">
                    <div className="banner-hero banner-3">
                        <div className="container">
                          
                                <h1 className="text-display-2 color-gray-900 mt-30">{singlePage.title}<br className="d-lg-block d-none" /></h1>
                                
                                <div className="mt-55">
                                    

                                    
                                </div>
                            </div>
                        </div>
                    
                </section> */}

                {/* <section className="section-box">
                    <div className="banner-hero banner-breadcrums">
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1 className="text-heading-2 color-gray-900 mb-20">{singlePage.title}<br className="d-lg-block d-none" /></h1>
                                    <div className="breadcrumbs">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                    <div className="section-box   ">
                    <div className="container mt-100 mb-50">
                        <div className="row">
                        <div className="col-lg-6 col-sm-12 block-we-do-2">
                            <h3 className="text-heading-2 mt-30"> {singlePage.title}</h3>
                            <p className="text-body-lead-large color-gray-600 mt-30">{singlePage.body}</p>
                            {/* <div className="list-icons mt-40">
                            <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".1s"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-work.svg" /></span>
                                <h4 className="text-heading-4">Best Price Guarantee</h4>
                                <p className="text-body-excerpt color-gray-600 mt-15">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                            </div>
                            <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".3s"><span className="icon-left"><img  src="/assets/imgs/page/homepage2/icon-design.svg" /></span>
                                <h4 className="text-heading-4">Easy &amp; Quick Booking</h4>
                                <p className="text-body-excerpt color-gray-600 mt-15">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                            </div>
                            </div> */}
                            <p className="text-body-lead-large color-gray-600 mt-30">If you have any questions or would like some advice please contact our friendly team who will be happy to help you find</p>
                        </div>
                        <div className="col-lg-6 col-sm-12 block-img-we-do img-bottom">
                            <div className="inner-image"><img className="img-responsive shape-1" src={singlePage.img} /></div>
                        </div>
                        </div>
                    </div>
                    </div>

                     
               

                    <section className="section-box mt-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1 col-md-12" />
                               
                            </div>
                           
                            {/* <div className="row">
                                <div className="col-lg-2" />
                                <div className="col-lg-8">
                                    <div className="single-detail mt-50">
                                   
                                        <p>Being social is quite essential for living a happy and healthy life. Also, it provides opportunities to people with disabilities to engage in community, social, and recreational, activities. At Wholistic Care Support, we understand how important is for people with disability to interact with the community and this is why our dedicated team works closely with our NDIS participants to provide them with a group or centred-based activities. We help them to find a place in life that helps them to build and establish a cordial relationship with their peers.

                                            Group And Centre Based Activities Covered Under Our NDIS Plan:</p>
                                            <ol>
                                            <li>
                                            <bold>Life Skill Development:</bold> It includes Grocery shopping, personal care, household task, and gardening.</li>

                                           <li>Improved Healthiness and Wellness: It includes awareness and education on health and well-being, swimming, yoga, group fitness activities, etc.</li> 
                                           <li>Recreational: It includes music, dance, picnic, art & craft, and others.</li> 
                                           <li>Literacy And Numeracy: It includes personalized programs that suit learning abilities, budgeting, reading, writing skills, and 
                                            Community Access: It includes access to community events, shopping malls, libraries, museums, art galleries, voluntary groups, etc.</li> 
                                             </ol>  
                                            With us, you have an opportunity to choose the service that best meets your community-related needs and goals at a competitive price. To know more about this service, contact us now.
                                            
                                          
                                        
                                   
                                    </div>
                                   
                                </div>
                            </div> */}
                        </div>
                    </section>
                </div>
                )}

             

                <div className="section-box mt-70">
            <div className="container">
                <div className="row">
                <div className="col-lg-1 col-sm-1 col-12"></div>
                <div className="col-lg-10 col-sm-10 col-12 text-center">
                    <div className="text-center mb-20"><span className="tag-1 bg-green-900">How does it works ?</span></div>
                    <h2 className="text-display-3 color-gray-900 mb-60">We're here for you <br className="d-lg-block d-none" />Lets Start the Journey Together</h2>
                </div>
                <div className="col-lg-1 col-sm-1 col-12"></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-lg-1 col-sm-12 col-12"></div>
                <div className="col-lg-10 col-sm-12 col-12">
                    <ul className="list-steps">
                    <li className="icon-asset1">
                        <div className="text-center block-step bg-9 hover-up">
                        <div className="mb-30"><img src="/assets/imgs/template/support.png" /></div>
                        <h3 className="text-heading-5 mb-10">Get In Touch With Us</h3>
                        {/* <p className="text-body-text color-gray-500">Choose any of our packages</p> */}
                        </div>
                    </li>
                    <li className="icon-asset2">
                        <div className="text-center block-step hover-up">
                        <div className="mb-30"><img src="/assets/imgs/template/staff.png" /></div>
                        <h3 className="text-heading-5 mb-10">Meet Our Friendly Staff</h3>
                        {/* <p className="text-body-text color-gray-500">Receive concepts In 24 hours</p> */}
                        </div>
                    </li>
                    <li className="icon-asset3">
                        <div className="text-center block-step bg-5 hover-up">
                        <div className="mb-30"><img src="/assets/imgs/template/goals.png" /></div>
                        <h3 className="text-heading-5 mb-10">Determine The Goals</h3>
                        {/* <p className="text-body-text color-gray-500">Development Stage</p> */}
                        </div>
                    </li>
                    <li className="icon-asset4">
                        <div className="text-center block-step bg-5 hover-up">
                        <div className="mb-30"><img src="/assets/imgs/template/enjoy.png" /></div>
                        <h3 className="text-heading-5 mb-10">Enjoy the life you deserve</h3>
                        {/* <p className="text-body-text color-gray-500">After-release Support</p> */}
                        </div>
                    </li>
                    <li>
                        <div className="text-center block-step bg-9 hover-up">
                        <div className="mb-30"><img src="/assets/imgs/template/ndis.png" /></div>
                        <h3 className="text-heading-5 mb-10">Develop a NDIS Care Plan</h3>
                        {/* <p className="text-body-text color-gray-500">Project launch and checkout</p> */}
                        </div>
                    </li>
                    </ul>
                </div>
                <div className="col-lg-1 col-sm-12 col-12"></div>
                </div>
            </div>
        </div>

                <section className="section-box section-green ">
                    <div className="container mt-70">
                        <h3 className="text-heading-1 color-white text-center mb-10">
                        Different People, Different Needs <br className="d-lg-block d-none" />Personalized Services for All 
                        </h3>
                    </div>
                    
                    
                </section>
            </Layout>

        </>
    )
}

export default GroupActivities;