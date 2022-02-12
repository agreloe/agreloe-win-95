import { createReducer, createAction} from "@reduxjs/toolkit";

const initialState = {
    aboutMe: {
        isSelected: false,
        isOnFocus: false,
    },
    socials: {
        isSelected: false,
        isOnFocus: false,
    },
    skills: {
        isSelected: false,
        isOnFocus: false,
    },
    designs: {
        isSelected: false,
        isOnFocus: false,
    },
    text: {
        isSelected: false,
        isOnFocus: false,
    },
    image: {
        isSelected: false,
        isOnFocus: false,
    },
    welcome: {
        isSelected: false,
        isOnFocus: false,
    },
    isOpen: false
};

export const selectAboutMe = createAction('AboutMeSelected');
export const selectSocials = createAction('SocialsSelected');
export const selectSkills = createAction('SkillsSelected');
export const selectDesigns = createAction('DesignsSelected');
export const selectText = createAction('TextSelected');
export const selectImage = createAction('ImageSelected');
export const selectWelcome = createAction('WelcomeSelected');

export const focusOnAboutMe = createAction('FocusOnAboutMe');
export const focusOnSocials = createAction('FocusOnSocials');
export const focusOnSkills = createAction('FocusOnSkills');
export const focusOnDesigns = createAction('FocusOnDesigns');
export const focusOnText = createAction('FocusOnText');
export const focusOnImage = createAction('FocusOnImage');
export const focusOnWelcome = createAction('FocusOnWelcome');

export const openMenu = createAction('menuOpened');

const itemReducer = createReducer(initialState, {
    [selectAboutMe] : (state, action) => {state.aboutMe.isSelected = action.payload},
    [selectSocials] : (state, action) => {state.socials.isSelected = action.payload},
    [selectSkills] : (state, action) => {state.skills.isSelected = action.payload},
    [selectDesigns] : (state, action) => {state.designs.isSelected = action.payload},
    [selectText] : (state, action) => {state.text.isSelected = action.payload},
    [selectImage] : (state, action) => {state.image.isSelected = action.payload},
    [selectWelcome] : (state, action) => {state.welcome.isSelected = action.payload},

    [focusOnAboutMe] : (state, action) => {state.aboutMe.isOnFocus = action.payload},
    [focusOnSocials] : (state, action) => {state.socials.isOnFocus = action.payload},
    [focusOnSkills] : (state, action) => {state.skills.isOnFocus = action.payload},
    [focusOnDesigns] : (state, action) => {state.designs.isOnFocus = action.payload},
    [focusOnText] : (state, action) => {state.text.isOnFocus = action.payload},
    [focusOnImage] : (state, action) => {state.image.isOnFocus = action.payload},
    [focusOnWelcome] : (state, action) => {state.welcome.isOnFocus = action.payload},
    
    [openMenu] : (state, action) => {state.isOpen = action.payload} 
});

export default itemReducer;