import React from 'react'

const Footer= () =>{
    return(
        <footer class="bg-primary">
        <div class="container">
            <div class="row mt-5">
                <div class="col-md-3">
                    <h6 class="text-uppercase">Servicios</h6>
                    <ul class="list-unstyled">
                        <li><a href="#">Diseño web</a></li>
                        <li><a href="#">Desarrollo web</a></li>
                        <li><a href="#">Aplicaciones móviles</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h6 class="text-uppercase">Información</h6>
                    <ul class="list-unstyled">
                        <li><a href="#">Sobre mi</a></li>
                        <li><a href="#">Portafolio</a></li>
                        <li><a href="#">Trabajos previos</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h6 class="text-uppercase">Recursos</h6>
                    <ul class="list-unstyled">
                        <li><a href="#">Tutoriales gratuitos</a></li>
                        <li><a href="#">Plantillas PSD</a></li>
                        <li><a href="#">Bootstrap</a></li>
                    </ul>
                </div>
                <div class="col-md-3 float-lg-right">
                    <img src="assets/images/logo-light.svg" class="logo"/>
                    <p class="mt-4"></p>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-md-4">
                    <p>© 2019 Personal Portfolio.</p>
                </div>
                <div class="col-md-4 text-center">
                    <p>Made by <a href="https://themesbootstrap.com.mx/" class="font-weight-bold" target="_blank">Themes
                            Bootstrap</a></p>
                </div>
                <div class="col-md-4">
                    <ul class="list-inline text-center float-lg-right">
                        <li class="list-inline-item mt-0"><a href="#"><i class="icon ion-logo-instagram mt-0"></i></a>
                        </li>
                        <li class="list-inline-item mt-0 ml-3"><a href="#"><i class="icon ion-logo-twitter"></i></a>
                        </li>
                        <li class="list-inline-item mt-0 ml-3"><a href="#"><i class="icon ion-logo-youtube"></i></a>
                        </li>
                        <li class="list-inline-item mt-0 ml-3"><a href="#"><i class="icon ion-logo-dribbble"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    );

}


export default Footer;