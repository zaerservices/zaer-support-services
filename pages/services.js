
import Layout from "../components/layout/Layout";
import Cards from "../components/layout/Cards";


function Services() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="banner-hero banner-head-image" style={{ background: 'url(assets/imgs/template/disable.jpg)' }}>
                            <div className="container">
                                
                                    <h1 className="text-heading-1 color-white mt-30">We Offer Different Varities Of Services </h1>
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
                                   
                                        
                                          <Cards/>
                                        
                                   
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

export default Services;