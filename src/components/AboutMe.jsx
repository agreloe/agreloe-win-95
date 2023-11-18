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
                <h2>About me</h2>
                <p>Creative and detail-oriented Frontend Developer, with a background in Multimedia Design. With a keen sense of aesthetics and UI design, and pas- sion for developing responsive websites. Highly skilled in HTML, CSS, JavaScript and React, as well as Adobe Creative Cloud Suite. Proactive, team player, always looking for ways of improvement.</p>

                <h2>Experience</h2>
                <h3>Front-End Developer - Shake Again - 2021/2023</h3>
                <p>HTML5, CSS, SASS, LESS, PHP, WordPress, Webflow, Figma, React, GSAP</p>
                <p>Websites designer and developer. Working on identifying opportunities for aesthetic improve- ments and usability for our clients. Research and implementation of new tools and functionalities to meet and improve our customer expectations and experience. Prototyping, graphic design, creative process and identity management. Reporting to the CTO.</p>

                <h3>Multimedia Designer - Freelance - 2018/2021</h3>
                <p>Photoshop, Illustrator, After Effects, Cinema 4D</p>
                <p>Designed animated videos for clients. 3D rende- rings of products. Identity and brand design. Social media identity and branding design. Clo- thing printing design.</p>

                <h3><a href="https://www.instagram.com/akirestylo" target="_blank" rel="noreferrer">Akire Stylo</a> - 2020</h3>
                <p>WordPress, WooCommerce</p>
                <p>Conceptualized and created an e-Commerce deployed with WordPress and WooCommerce for my own brand of T-Shirts featuring my original digital illustations, as well as designing a visual identity system and social media content.</p>

                <h2>Education</h2>
                <h3>Coding BootCamp - Plataforma5</h3>
                <p>Completed a Coding Bootcamp with Plataforma5, an intensive, short-term training programs in Full-Stack web development that provided me with technical skills in JavaScript, React, Redux, React Native, MongoDB, PostgreSQL and Express, among others.</p>

                <h3>Multimedia Design - Escuela Da Vinci</h3>
                <p>Studied Multimedia Design at Primera Escuela de Arte Multimedial Da Vinci, completing more than 80% of the career program.</p>
            </div>
        </div>
        </div>
    );
};

export default AboutMe;
