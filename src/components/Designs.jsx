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
    dispatch(focusOnImage(true));
    dispatch(selectImage(true))
  };
  const openText = () => {
    dispatch(focusOnWelcome(false));
    dispatch(focusOnImage(false));
    dispatch(focusOnAboutMe(false));
    dispatch(focusOnSkills(false));
    dispatch(focusOnDesigns(false));
    dispatch(focusOnText(true));
    dispatch(selectText(true));
  };

  return (
    <div className='window designs'>
        <div className="top-bar">
            <i className='designs-icon-small'></i>
            <span>Designs</span>
            <button onClick={closeDesigns}><div></div></button>
        </div>
        <div className="content designs">
          <div className="wrapper designs">

            <div className="file-container" onClick={openImage}>
              <i className='image-icon-large'></i>
              <span>skate_jump.gif</span>
            </div>

            <div className="file-container" onClick={openText}>
              <i className='text-icon'></i>
              <span>about.txt</span>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Designs;