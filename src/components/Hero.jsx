import React from 'react'
import Danielita from '../images/danielita.jpg'

const Hero= () =>{
    return(
<section id="hero" className="bg-primary">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-7 d-flex mt-5">
                    <div className="align-self-center">
                        <h1 className="display-4 text-light">Hola, soy Daniela y bienvenid@ a mi portafolio.</h1>
                        <p className="lead text-light mt-4">Soy aprendiz de programación y el área que he elegido para especializarme es Front-end, estoy muy emocionada por trabajar contigo, espero te guste mi trabajo.</p>
                        <div className="d-flex mt-4">
                            <p className="text-light align-self-center font-weight-bold mb-0">Sígueme: </p>
                            <ul className="list-inline align-self-center text-light ml-4 mb-0">
                                <li className="list-inline-item"><a href="https://www.instagram.com/daniela99isaza/?hl=es-la"><i className="icon ion-logo-instagram"></i></a>
                                </li>
                                <li className="list-inline-item ml-3"><a href="#"><i className="icon ion-logo-twitter"></i></a>
                                </li>
                               
                            </ul>
                        </div>
                        <a href="#" className="btn btn-secondary mt-5">Solicitar demo<i
                                className="icon ion-md-arrow-forward align-middle ml-3"></i></a>
                    </div>
                </div>
                <div className="col-lg-5 offset-lg-1 col-sm-5 d-flex mt-5">
                    <div className="align-self-center text-center mx-auto">
                        <img src={Danielita} className="img-fluid main-photo"/>
                    </div>
                </div>
            </div>
        
        </div>
    </section>
    );
}

export default Hero;