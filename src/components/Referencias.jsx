import React from 'react'
import Alejito from '../images/alejito.jpg'
import '../Styles/Referencias.css'
import Alejita from '../images/Alejita.jpg'
import Miguel from '../images/Miguel.jpg'
const Referencias= () =>{
    return(
<section id="referencias" className="bg-grey">
        <div className="container">
            <div className="heading-title">
                <h2>Unas palabras de nuestros clientes…</h2>
                
            </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-sm-12">
                    <div className="card my-3 p-4 d-flex justify-content-center">
                        <img src={Alejita} className="logo-company Referencias__img logo-company container"/>
                        <p className="mt-3">De un proyecto no debes solo esperar un buen resultado, debemos esperar algo más que eso y es conectarte con tu cliente y es algo que siento que logra muy bien.</p>
                        <div className="d-flex mt-3">
                            <div className="user align-self-center mr-3">
                                <img src={Alejita} className="img-fluid profile-img"/>
                            </div>
                            <div className="user-info align-self-center">
                                <h6 className="mb-0">Alejandra M.</h6>
                                <small>Contratante- Tienda On-Line</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="card my-3 p-4">
                        <img src={Alejito} className="Referencias__img logo-company container"/>
                        <p className="mt-3">Un proyecto debe ser eficaz, y cuando digo eficaz me refiero a que debe cumplir con todos tus requisitos en el menor tiempo posible.</p>
                        <div className="d-flex mt-3">
                            <div className="user align-self-center mr-3">
                                <img src={Alejito} className="img-fluid profile-img"/>
                            </div>
                            <div className="user-info align-self-center">
                                <h6 className="mb-0">Alejandro A.</h6>
                                <small>Contratante- Recetas de cocina</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="card my-3 p-4">
                        <img src={Miguel} className="logo-company Referencias__img logo-company container"/>
                        <p className="mt-3">Es muy necesario ser originales a la hora de destacar en el mercado y vender más que nuestra competencia, por eso mismo hay que trabajar en la imaginación y diseño.</p>
                        <div className="d-flex mt-3">
                            <div className="user align-self-center mr-3">
                            <img src={Miguel} className="img-fluid profile-img"/>
                            </div>
                            <div className="user-info align-self-center">
                                <h6 className="mb-0">Miguel G.</h6>
                                <small>Contratante</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Referencias;