import React from 'react'

const Proyectos= () =>{
    return(
<section id="porta">
        <div className="container">
            <div className="heading-title">
                <h2>Proyectos destacados</h2>
                <p className="lead mt-3">Aquí puedes ver algunas de mis interfaces como programadora,
                 puedo trabajar y adaptarme a las necesidades de mi cliente y no perder mi escencia.</p>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <a href="#" className="mt-3">
                        <img src="assets/images/portfolio-1.jpg" className="img-fluid rounded"/>
                    </a>
                        <h5 className="mt-3"><span className="active">Proyecto destacado</span> - Recetas a la mano</h5>
                            <p className="mt-2">Interfaz básica de funcionamiento instructivo para la cocina, complejidad básica.</p>
                </div>
                <div className="col-md-6">
                    <a href="#" className="mt-3">
                        <img src="assets/images/portfolio-2.jpg" className="img-fluid rounded"/>
                    </a>
                    <h5 className="mt-3"><span className="active">Proyecto destacado</span> - Tienda On-Line</h5>
                    <p className="mt-2">Una tienda On-Line completamente diseñada, complejidad media.</p>
                </div>
            </div>
        </div>
</section>
    );
}

export default Proyectos;
