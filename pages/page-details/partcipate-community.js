
import Link from "next/link";
import Layout from "../../components/layout/Layout";


function Community() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="banner-hero banner-head-image" style={{ background: 'url(assets/imgs/template/disable.jpg)' }}>
                            <div className="container">
                                
                                    <h1 className="text-heading-1 color-white mt-30">PARTICIPATE COMMUNITY</h1>
                                </div>
                            </div>
                       
                    </section>
                    <section className="section-box mt-50 mb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1 col-md-12" />
                               
                            </div>
                           
                            <div className="row">
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
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>

        </>
    )
}

export default Community;