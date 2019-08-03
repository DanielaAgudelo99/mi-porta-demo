import React from 'react'

const Demostraciones = () =>{
    return(
<section id="demostraciones">
        <div className="container">
            <div className="heading-title">
                <h2>Precios definidos para cada negocio</h2>
                
            </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-sm-4">
                    <div className="card bg-primary text-light my-3">
                        <div className="card-body pricing-card p-5 text-center">
                            <h4>Básica</h4>
                            <p>Interfaz básica, para negocios pequeños y con un funcionamiento base.</p>
                            <span className="display-3">$99</span>
                            <small className="text-muted font-weight-bold text-uppercase d-block">Por mes</small>
                            <small className="text-uppercase font-weight-bold">$99/ mensual </small>
                        </div>
                        <div className="card-footer pricing-card p-4 text-center">
                            <a href="#" className="btn btn-secondary mt-3">Comprar ahora<i
                                    className="icon ion-md-arrow-forward align-middle ml-3"></i></a>
                            <small className="d-block font-weight-bold text-muted mt-2">Inicia una prueba de 7 días</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                    <div className="card bg-primary text-light my-3">
                        <div className="card-body pricing-card p-5 text-center">
                            <h4>Agencia</h4>
                            <p>Interfaz orientada a agencias de actividad de usuario mediana y manejable.</p>
                            <span className="display-3">$129</span>
                            <small className="text-muted font-weight-bold text-uppercase d-block">Por mes</small>
                            <small className="text-uppercase font-weight-bold">$129 / mensual</small>
                        </div>
                        <div className="card-footer pricing-card p-4 text-center">
                            <a href="#" className="btn btn-secondary mt-3">Comprar ahora<i
                                    className="icon ion-md-arrow-forward align-middle ml-3"></i></a>
                            <small className="d-block font-weight-bold text-muted mt-2">Inicia una prueba de 7 días</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                    <div className="card bg-primary text-light my-3">
                        <div className="card-body pricing-card p-5 text-center">
                            <h4>Empresa</h4>
                            <p>Creada especialmente para compañías grandes, que manejan usuarios de forma indefinida.</p>
                            <span className="display-3">$229</span>
                            <small className="text-muted font-weight-bold text-uppercase d-block">Por mes</small>
                            <small className="text-uppercase font-weight-bold">$229 / mensual</small>
                        </div>
                        <div className="card-footer pricing-card p-4 text-center">
                            <a href="#" className="btn btn-secondary mt-3">Comprar ahora<i
                                    className="icon ion-md-arrow-forward align-middle ml-3"></i></a>
                            <small className="d-block font-weight-bold text-muted mt-2">Inicia una prueba de 7 días</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
export default Demostraciones;