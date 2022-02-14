import React from 'react';
import '../assets/stylesheets/Designs.css';
import { selectDesigns, selectImage, selectText, focusOnWelcome, focusOnAboutMe, focusOnText, focusOnImage, focusOnDesigns, focusOnSkills } from '../redux/itemReducer';
import { useDispatch } from 'react-redux';


const Designs = () => {
  const dispatch = useDispatch();
  const closeDesigns = () => {
    dispatch(selectDesigns(false))
  };
  const openImage = () => {
    dispatch(focusOnWelcome(false));
    dispatch(focusOnAboutMe(false));
    dispatch(focusOnSkills(false));
    dispatch(focusOnDesigns(false));
    dispatch(focusOnText(false));
    dispatch(selectImage(true))
    dispatch(focusOnImage(true));
  };
  const openText = () => {
    dispatch(focusOnWelcome(false));
    dispatch(focusOnImage(false));
    dispatch(focusOnAboutMe(false));
    dispatch(focusOnSkills(false));
    dispatch(focusOnDesigns(false));
    dispatch(selectText(true));
    dispatch(focusOnText(true));
  };

  return (
    <div className='window designs'>
        <div className="top-bar">
            <i className='designs-icon-small'></i>
            <span>Designs</span>
            <button className='close-designs' onClick={closeDesigns}><div></div></button>
        </div>
        <div className="content designs">
          <div className="wrapper designs">

            <div className="file-container" onClick={openImage} onTouchStart={openImage}>
              <i className='image-icon-large'></i>
              <span>skate_jump.gif</span>
            </div>

            <div className="file-container" onClick={openText} onTouchStart={openText}>
              <i className='text-icon'></i>
              <span>about.txt</span>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Designs;