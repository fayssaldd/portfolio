import React from 'react'
import Home from './Home'
import Teachnologie from './Teachnologie'
import Contact from './Contact'
import Footer from './Footer'
import { useTheme } from '../components/theme-provider'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"
import particlesConfig from '../components/config/particles-config'
import Project from './Project'
export default function Main() {
  const {theme} = useTheme()
  console.log(theme + 'hani');
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
      await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

  return (
    <>
     <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
            
      />
    <Home/>
    <Teachnologie/>
    <Project/>
    {/* <Contact/> */}
    <Footer/>
    </>
  )
}
