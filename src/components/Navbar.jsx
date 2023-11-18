import "../assets/stylesheets/Navbar.css";
import { useEffect } from "react";
import { openMenu, selectSocials, focusOnAboutMe, focusOnDesigns, focusOnSkills, focusOnImage, focusOnText, focusOnWelcome } from '../redux/itemReducer';
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
    const item = useSelector((store) => store.item);
    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(openMenu(!item.isOpen));
        dispatch(selectSocials(false));
    };

    const onFocusAboutMeHandler = () => {
        dispatch(focusOnWelcome(false));
        dispatch(focusOnText(false));
        dispatch(focusOnImage(false));
        dispatch(focusOnSkills(false));
        dispatch(focusOnDesigns(false));
        dispatch(focusOnAboutMe(true));
    };

    const onFocusSkillsHandler = () => {
        dispatch(focusOnSkills(true));
        dispatch(focusOnWelcome(false));
        dispatch(focusOnText(false));
        dispatch(focusOnImage(false));
        dispatch(focusOnDesigns(false));
        dispatch(focusOnAboutMe(false));
    };

    const onFocusDesignsHandler = () => {
        dispatch(focusOnDesigns(true));
        dispatch(focusOnWelcome(false));
        dispatch(focusOnText(false));
        dispatch(focusOnImage(false));
        dispatch(focusOnAboutMe(false));
        dispatch(focusOnSkills(false));
    };

    const onFocusWelcomeHandler = () => {
        dispatch(focusOnWelcome(true));
        dispatch(focusOnText(false));
        dispatch(focusOnImage(false));
        dispatch(focusOnAboutMe(false));
        dispatch(focusOnSkills(false));
        dispatch(focusOnDesigns(false));
    };

    const onFocusTextHandler = () => {
        dispatch(focusOnText(true));
        dispatch(focusOnImage(false));
        dispatch(focusOnAboutMe(false));
        dispatch(focusOnSkills(false));
        dispatch(focusOnDesigns(false));
        dispatch(focusOnWelcome(false));
    };

    const onFocusImageHandler = () => {
        dispatch(focusOnImage(true));
        dispatch(focusOnAboutMe(false));
        dispatch(focusOnSkills(false));
        dispatch(focusOnDesigns(false));
        dispatch(focusOnWelcome(false));
        dispatch(focusOnText(false));
    };

    let curTime = () => {
        let today = new Date();
        let hours = today.getHours();
        hours = ("0" + hours).slice(-2);
        let minutes = today.getMinutes();
        minutes = ("0" + minutes).slice(-2);
        let time = `${hours}:${minutes}`;
        document.getElementById('currentTime').value=time;
    };

    useEffect(() => {
        let interval = setInterval(curTime,500);
        return () => {clearInterval(interval)};
    },[])

    return (
            <div className="navbar">
                <button id="startBtn" className={`start-btn${item.isOpen === true ? " start-click" : ""}`} onClick={onClickHandler}>
                <i className="pc-icon" />
                <span>Start</span>
                </button>

                <div className="navbar-elements">
                    {
                        item.aboutMe.isSelected === true && (
                            <div onClick={onFocusAboutMeHandler} className={`element about-me${item.aboutMe.isOnFocus ? " focus" : ""}`}>
                                <i />
                                <span>About me</span>
                            </div>

                        )
                    }
                    {
                        item.skills.isSelected === true && (
                            <div onClick={onFocusSkillsHandler} className={`element skills${item.skills.isOnFocus ? " focus" : ""}`}>
                                <i />
                                <span>Skills</span>
                            </div>

                        )
                    }
                    {
                        item.designs.isSelected === true && (
                            <div onClick={onFocusDesignsHandler} className={`element designs${item.designs.isOnFocus ? " focus" : ""}`}>
                                <i />
                                <span>Designs</span>
                            </div>

                        )
                    }
                    {
                        item.welcome.isSelected === true && (
                            <div onClick={onFocusWelcomeHandler} className={`element welcome${item.welcome.isOnFocus ? " focus" : ""}`}>
                                <i />
                                <span>welcome.txt</span>
                            </div>

                        )
                    }
                    {
                        item.text.isSelected === true && (
                            <div onClick={onFocusTextHandler} className={`element text${item.text.isOnFocus ? " focus" : ""}`}>
                                <i />
                                <span>about.txt</span>
                            </div>

                        )
                    }
                    {
                        item.image.isSelected === true && (
                            <div onClick={onFocusImageHandler} className={`element image${item.image.isOnFocus ? " focus" : ""}`}>
                                <i />
                                <span>skate_jump.gif</span>
                            </div>

                        )
                    }

                </div>

                <div className="navbar-icons">
                    <i className="sound-icon" />
                    <i className="internet-icon" />
                    <span className="tooltip">You are connected to the internet</span>
                    <input className="time-display" type="text" disabled="disabled" id="currentTime" />
                </div>
            </div>
    );
};

export default Navbar;
