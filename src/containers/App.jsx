import React from 'react'
import Main from '../components/Main'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Proyectos from '../components/Proyectos'
import Referencias from '../components/Referencias'
import Demostraciones from '../components/Demostraciones'
import Articulos from '../components/Articulos'
import Contratame from '../components/Contratame'
const App=()=>{
    return(
        <Main>
            <NavBar/>
            <Hero/>
            <Proyectos/>
            <Referencias/>
            <Demostraciones/>
            <Articulos/>
            <Contratame/>
        </Main>
    )
}
export default App;