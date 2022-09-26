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
                        <div className="banner-hero banner-head-image" style={{ background: 'url(assets/imgs/template/single2.jpg)' }}>
                            <div className="container">
                                
                                    <h1 className="text-heading-1 color-white mt-30">Group/Centre Activities</h1>
                                </div>
                            </div>
                       
                    </section> */}
                    <div className="section-box bg-7 mt-50">
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
                        </div>
                        <div className="col-lg-6 col-sm-12 block-img-we-do img-bottom">
                            <div className="inner-image"><img className="img-responsive" src={singlePage.img} /></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <section className="section-box mt-50 mb-50">
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
            </Layout>

        </>
    )
}

export default GroupActivities;