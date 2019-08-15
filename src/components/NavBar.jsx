import React from 'react'
import Logo_port from '../images/logo_port.svg';
const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
            <a className="navbar-brand" href="#"><img src={Logo_port} className="logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="icon ion-md-menu text-light"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item mx-4">
                        <a className="nav-link" href="#hero">Inicio</a>
                    </li>
                    <li className="nav-item mx-4">
                        <a className="nav-link" href="#porta">Portafolio</a>
                    </li>
                    <li className="nav-item mx-4">
                        <a className="nav-link" href="#referencias">Referencias</a>
                    </li>
                    <li className="nav-item mx-4">
                        <a className="nav-link" href="#demostraciones">Demostraciones</a>
                    </li>
                    <li className="nav-item mx-4">
                        <a className="nav-link" href="#articulos">Artículos</a>
                    </li>
                    <li className="nav-item mx-4">
                        <a className="nav-link font-weight-bold" href="#contratame">Contrátame <i
                                className="icon ion-md-arrow-forward align-middle ml-2"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}
export default NavBar;

