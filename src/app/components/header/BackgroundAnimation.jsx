import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BackgroundAnimation = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: {
      enable: false,
      zIndex: -1, 
    },
    particles: {
      number: {
        value: 50, 
        density: {
          enable: true,
          area: 700, 
        },
      },
      color: {
        value: ["#00fffc", "#ffffff", "#4acfd9"], 
        animation: {
          enable: true,
          speed: 10, 
          sync: true,
        },
      },
      shape: {
        type: "circle", 
        options: {
          polygon: {
            sides: 6, 
          },
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
          enable: false,
        },
      },
      links: {
        enable: true,
        distance: 100, 
        color: "#00fffc", 
        opacity: 0.4, 
        width: 1,
      },
      move: {
        enable: true,
        speed: 4, 
        direction: "none",
        random: true, 
        straight: false,
        outModes: {
          default: "out",
        },
        attract: {
          enable: false, 
        },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "repulse", 
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
        },
        grab: {
          distance: 140,
          links: {
            opacity: 0.7, 
          },
        },
        repulse: {
          distance: 120, 
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
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    />
  );
};

export default BackgroundAnimation;
