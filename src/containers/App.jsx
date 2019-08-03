import React from 'react'
import Main from '../components/Main'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Proyectos from '../components/Proyectos'
import Referencias from '../components/Referencias'
import Demostraciones from '../components/Demostraciones'
import Articulos from '../components/Articulos'
const App=()=>{
    return(
        <Main>
            <NavBar/>
            <Hero/>
            <Proyectos/>
            <Referencias/>
            <Demostraciones/>
            <Articulos/>
        </Main>
    )
}
export default App;