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
                <p>Creative and detail-oriented Frontend Developer, with a background in Multimedia Design. With a keen sense of aesthetic and UI Design, and a passion for developing responsive website design. Skilled in HTLM, CSS, SASS, JavaScript and React, as well as Adobe Creative Cloud Suite.</p>

                <h2>Projects</h2>
                <h3>Front-End Developer - Shake Again - 2021/2022</h3>
                <p>HTML5, CSS, SASS, LESS, PHP, WordPress, Webflow, Figma</p>
                <p>Currently designing, developing and deploying e-Commerce sites.</p>

                <h3>El club del Plan - CeiboDigital - 2021</h3>
                <p>React Native, Redux, MongoDB, JWT</p>
                <p>Developed an event mobile app, that allows users to register, sign in and create and share free and paid events, along with browsing sponsored events by category, dates, price, and location. Additionally, users can add them to favourites as well as rate and comment events.    </p>

                <h3>E-Commerce - Deluxo - 2021</h3>
                <p>React, Redux, Express, PostgreSQL, JWT</p>
                <p>Collaborated in the creation of a Fashion e-Commerce in which users can register, sign in, add products to the cart, together with searching clothing by category and name. Additionally, users are able to comment and rate products.</p>

                <h3>OMDB - RESTful API - 2021</h3>
                <p>React, Redux, Express, PostgreSQL, JWT</p>
                <p>Built a web application for users to register, sign in and search for movies fetched from the Omdb API, in addition to rating and adding them to favourites.</p>

                <h3>Akire Stylo - 2020</h3>
                <p>WordPress, WooCommerce</p>
                <p>Conceptualized and created an e-Commerce deployed with WordPress and WooCommerce for my own brand of T-Shirts featuring my original digital illustations, stamped with Direct-to-Garment printing, as well as designing a visual identity system and social media content.</p>

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
