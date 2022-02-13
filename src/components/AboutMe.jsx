import React from "react";
import { useDispatch } from "react-redux";
import { selectAboutMe } from "../redux/itemReducer";
import "../assets/stylesheets/AboutMe.css";

const AboutMe = () => {
    const dispatch = useDispatch();
    const closeWindow = () => {
        dispatch(selectAboutMe(false));
    };
    
    return (
        <div className="window about-me">
        <div className="top-bar">
            <i className="about-me-icon" />
            <span>About me</span>
            <button className="close-about-me" onClick={closeWindow}><div></div></button>
        </div>
        <div className="content about-me">
            <div className="wrapper about-me">
                <h1>Erika Agrelo</h1>
                <h2>Sobre mi</h2>
                <p>Soy social, creativa y apasionada de la programación y el diseño.</p>
                <p>Me gustan los desafíos y aprender constantemente.</p>
                <p>Me siento cómoda trabajando en equipo ya que me puedo adaptar fácilmente a cualquier situación y dar lo mejor de mí en cada proyecto.</p>
                
                <h2>Proyectos</h2>
                <h3>Front-End Developer - Shake Again - 2021/2022</h3>
                <p>Tecnologías: HTML5, CSS, SASS, LESS, PHP, WordPress, Webflow, Figma</p>
                <p>Tareas de diseño y maquetado de landings y e-Commerce.</p>

                <h3>El club del Plan - CeiboDigital - 2021</h3>
                <p>Tecnologías: React Native, Redux, MongoDB, JWT</p>
                <p>Desarrollo de aplicación que permite administrar, compartir y fondear planes entre contactos.</p>

                <h3>E-Commerce - Deluxo - 2021</h3>
                <p>Tecnologías: React, Redux, Express, PostgreSQL, JWT</p>
                <p>Desarrollo grupal de un e-commerce de venta de indumentaria.</p>
                
                <h3>OMDB - RESTful API - 2021</h3>
                <p>Tecnologías: React, Redux, Express, PostgreSQL, JWT</p>
                <p>Desarrollo de una aplicación web conectada a la API de OMDB, que permite realizar busquedas de películas, crear una cuenta y agregar películas a favoritos.</p>

                <h3>E-Commerce - Emprendimiento - Akire Stylo - 2020</h3>
                <p>Tecnologías: WordPress, WooCommerce</p>
                <p>Desarrollo de theme custom de WordPress para un e-Commerce de remeras estampadas.</p>
                <p>Diseño de identidad de marca, branding, piezas para redes sociales, diseño de ilustraciones para estampar.</p>

                <h2>Estudios</h2>
                <h3>Coding BootCamp - Plataforma5</h3>
                <p>Capacitación de más de 800 horas sobre desarrollo web en modalidad fulltime, basado en el desarrollo Full-Stack de aplicaciones web, enfocándose en un aprendizaje técnico, con una fuerte metodología Scrum con formato de Pair Programing.</p>

                <h3>Diseño Multimedial - Escuela Da Vinci</h3>
                <p>Materias realizadas = 35</p>
                <p>Promedio general = 8,87</p>
            </div>
        </div>
        </div>
    );
};

export default AboutMe;
