import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BackgroundAnimation = () => {
  const particlesInit = async (main) => {
    // Precarga completa de la configuración de tsparticles
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: {
      enable: false,
      zIndex: -1, // Asegura que las partículas permanezcan en el fondo
    },
    particles: {
      number: {
        value: 60, // Balance entre visibilidad y rendimiento
        density: {
          enable: true,
          area: 800, // Ajusta la densidad para evitar sobrecarga visual
        },
      },
      color: {
        value: ["#3A8EBA", "#ffffff", "#A2FACF"], // Colores que complementan el diseño moderno
        animation: {
          enable: true,
          speed: 30, // Animación más viva
          sync: true,
        },
      },
      shape: {
        type: "circle", // Mantenemos formas simples para complementar el diseño sin distraer
      },
      opacity: {
        value: 0.8,
        random: true,
        animation: {
          enable: true,
          speed: 3, // Animación sutil de opacidad
          minimumValue: 0.3,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 4 }, // Variedad en tamaño para dinamismo
        random: true,
        animation: {
          enable: true,
          speed: 4,
          minimumValue: 0.1,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 120,
        color: "#A2FACF", // Links en colores que resaltan sobre el gradiente del fondo
        opacity: 0.5, // Visibilidad moderada para evitar distracción
        width: 2, // Líneas más definidas
      },
      move: {
        enable: true,
        speed: 3, // Movimiento moderado para un efecto calmante
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce", // Rebote en bordes para mantener las partículas en movimiento dentro del viewport
        },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Interacción dinámica al pasar el cursor
        },
        onClick: {
          enable: true,
          mode: "push", // Añadir partículas al hacer clic para interactividad
        },
      },
      modes: {
        bubble: {
          distance: 250,
          size: 8,
          duration: 2,
          opacity: 0.8, // Burbujas más grandes y visibles al interactuar
        },
        repulse: {
          distance: 200,
        },
        push: {
          quantity: 4, // Moderar la cantidad de partículas añadidas al hacer clic
        },
      },
    },
    detectRetina: true, // Ajuste para dispositivos de alta resolución
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default BackgroundAnimation;
