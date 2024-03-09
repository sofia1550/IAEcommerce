import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BodyBackgroundAnimation = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: {
      enable: false,
      zIndex: -2,
    },
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#ffffff", "#00FF00", "#FFD700", "#00BFFF"], 
        animation: {
          enable: true,
          speed: 10,
          sync: false, 
        },
      },
      shape: {
        type: ["circle", "triangle", "polygon"], 
        options: {
          polygon: { nb_sides: 5 }, 
        },
      },
      opacity: {
        value: 0.6,
        random: true,
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.1,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 3 },
        random: true,
        animation: {
          enable: true, 
          speed: 3,
          minimumValue: 0.5,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3, 
        direction: "none",
        random: true, 
        straight: false,
        outModes: {
          default: "out",
        },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: ["repulse", "bubble"], 
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        bubble: {
          distance: 200,
          size: 4,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        repulse: {
          distance: 200, 
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="bodyParticles"
      init={particlesInit}
      options={particlesOptions}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    />
  );
};

export default BodyBackgroundAnimation;
