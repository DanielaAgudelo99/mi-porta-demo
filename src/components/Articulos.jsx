import React from 'react'

const Articulos=() =>{
    return(
        <section id="articulos" className="bg-grey">
        <div className="container">
            <div className="heading-title">
                <h2>Artículos recomendados para inspirarte</h2>
                
            </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-sm-12">
                    <div className="card my-3">
                        <a href="#">
                            <img className="card-img-top" src="assets/images/blog-01.jpg" alt="Card image cap"/>
                            <div className="card-body p-4">
                                <h5 className="card-title"><span className="active">Case Study</span> - A quick guide to
                                    choosing a color palette</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ea
                                    consequuntur, odit veniam mollitia aliquam reiciendis.</p>
                                <div className="d-flex mt-3">
                                    <div className="user align-self-center mr-3">
                                        <img src="assets/images/person-01.jpg" className="img-fluid profile-img"/>
                                    </div>
                                    <div className="user-info align-self-center">
                                        <h6 className="mb-0">Richard A. Hair</h6>
                                        <small>Sept 10, 2019</small>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="card my-3">
                        <a href="#">
                            <img className="card-img-top" src="assets/images/blog-02.jpg" alt="Card image cap"/>
                            <div className="card-body p-4">
                                <h5 className="card-title"><span className="active">Case Study</span> - Choosing the right
                                    projects for your UX portfolio</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ea
                                    consequuntur, odit veniam mollitia aliquam reiciendis.</p>
                                <div className="d-flex mt-3">
                                    <div className="user align-self-center mr-3">
                                        <img src="assets/images/person-02.jpg" className="img-fluid profile-img"/>
                                    </div>
                                    <div className="user-info align-self-center">
                                        <h6 className="mb-0">Michelle B. Rowe</h6>
                                        <small>Oct 10, 2019</small>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">

                    <div className="card my-3">
                        <a href="#">
                            <img className="card-img-top" src="assets/images/blog-03.jpg" alt="Card image cap"/>
                            <div className="card-body p-4">
                                <h5 className="card-title"><span className="active">Case Study</span> - 7 one-page websites to
                                    inspire your own</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ea
                                    consequuntur, odit veniam mollitia aliquam reiciendis.</p>
                                <div className="d-flex mt-3">
                                    <div className="user align-self-center mr-3">
                                        <img src="assets/images/person-03.jpg" className="img-fluid profile-img"/>
                                    </div>
                                    <div className="user-info align-self-center">
                                        <h6 className="mb-0">Veronica D. Martin</h6>
                                        <small>Nov 10, 2019</small>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </section>
    );
}
export default Articulos;