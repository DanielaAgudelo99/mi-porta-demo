import React from 'react'

const Contratame=() =>{
    return(
        <section id="contratame" class="bg-grey pb-0">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-sm-4">
                    <h2 class="mt-5">Consultas generales</h2>
                    <p class="lead">¿Listo para acelerar tu proyecto? Solo házmelo saber.</p>

                    <h5 class="mt-5">Información general.</h5>
                    <ul class="list-unstyled">
                        <li><span class="font-weight-bold">Email:</span> isazadaniela245@gmail.com</li>
                        <li class="mt-2"><span class="font-weight-bold">Teléfono:</span> (57) 3043860769</li>
                    </ul>

                    <h5 class="mt-4">Locación</h5>
                    <p><span class="font-weight-bold">Oficina:</span> Copacabana, altos de Cristo Rey</p>
                </div>
                <div class="col-lg-7 col-sm-8">
                    <div class="card contact-form p-5">
                        <h4>Me pondré en contacto contigo lo antes posible.</h4>
                        <p>Completa el siguiente formulario y te llamaré lo antes posible.</p>
                        <form class="mt-4">
                            <div class="row">
                                <div class="col my-3">
                                    <label>Primer nombre*</label>
                                    <input type="text" class="form-control rounded-0" placeholder="Primer nombre"/>
                                </div>
                                <div class="col my-3">
                                    <label>Apellidos*</label>
                                    <input type="text" class="form-control rounded-0" placeholder="Apellidos"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col my-3">
                                    <label>Email</label>
                                    <input type="text" class="form-control rounded-0" placeholder="Email"/>
                                </div>
                                <div class="col my-3">
                                    <label>Número telefónico</label>
                                    <input type="text" class="form-control rounded-0" placeholder="Número"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col my-3">
                                    <label>Mensaje</label>
                                    <textarea class="form-control" id="" rows="3"></textarea>
                                </div>
                            </div>
                            <a href="#" class="btn btn-primary mt-3">Enviar mensaje <i
                                    class="icon ion-md-arrow-forward align-middle ml-3"></i></a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
 export default Contratame;