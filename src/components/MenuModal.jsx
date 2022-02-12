import React from 'react';
import '../assets/stylesheets/MenuModal.css'
import { selectAboutMe, selectSkills, selectDesigns, openMenu, focusOnWelcome, focusOnAboutMe, focusOnText, focusOnImage, focusOnDesigns, focusOnSkills } from '../redux/itemReducer';
import { useDispatch } from "react-redux";


const MenuModal = () => {
    const dispatch = useDispatch();

    const closeMenu = () => {
        document.getElementById('startBtn').classList.remove("start-click");
        dispatch(openMenu(false)); 
    };

    const openAboutMe = () => {
        dispatch(focusOnWelcome(false));
        dispatch(focusOnText(false));
        dispatch(focusOnImage(false));
        dispatch(focusOnDesigns(false));
        dispatch(focusOnSkills(false));
        dispatch(focusOnAboutMe(true));
        dispatch(selectAboutMe(true));
        closeMenu();
    };

    const openSkills = () => {
        dispatch(focusOnWelcome(false));
        dispatch(focusOnText(false));
        dispatch(focusOnImage(false));
        dispatch(focusOnDesigns(false));
        dispatch(focusOnAboutMe(false));
        dispatch(focusOnSkills(true));
        dispatch(selectSkills(true));
        closeMenu();
    };

    const openDesigns = () => {
        dispatch(focusOnWelcome(false));
        dispatch(focusOnText(false));
        dispatch(focusOnImage(false));
        dispatch(focusOnAboutMe(false));
        dispatch(focusOnSkills(false));
        dispatch(focusOnDesigns(true));
        dispatch(selectDesigns(true));
        closeMenu();
    }

    return (
        <div className='menu'>
            <ul className='menu-wrapper'>
                <li className='item mail'>
                    <i className='contact-icon' />
                    <a href='mailto: agreloerica@gmail.com' target='_blank' rel='noreferrer'>Contact</a>
                </li>
                <li className='br'></li>
                <li className='item' onClick={openAboutMe}>
                    <i className='aboutMe-icon' />
                    <span>About me</span>
                </li>
                <li className='item'>
                    <i className='socials-icon' />
                    <span>Socials</span>
                </li>
                <li className='item' onClick={openSkills}>
                    <i className='skills-icon' />
                    <span>Skills</span>
                </li>
                <li className='item' onClick={openDesigns}>
                    <i className='designs-icon' />
                    <span>Designs</span>
                </li>
            </ul>
        </div>
    );
};

export default MenuModal;
