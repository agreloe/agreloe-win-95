import '../assets/stylesheets/App.css';
import Draggable from 'react-draggable';
import Navbar from '../components/Navbar';
import MenuModal from '../components/MenuModal';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';
import Designs from '../components/Designs';
import Image from '../components/Image';
import Text from '../components/Text';
import Welcome from '../components/Welcome';
import SocialsModal from '../components/SocialsModal';
import { useSelector, useDispatch } from 'react-redux';
import { focusOnAboutMe, focusOnDesigns, focusOnImage, focusOnSkills, focusOnText, focusOnWelcome, selectWelcome, openMenu, selectSocials } from '../redux/itemReducer';
import { useEffect } from 'react';
import bgImg from '../assets/videos/ezgif.com-gif-maker.jpg';
import bgImgWebp from '../assets/videos/agreloE_Bg.webp';


const App = () => {
  const item = useSelector((store)=> store.item);
  const dispatch = useDispatch();

  let index = 10;

  const onFocusAboutMe = () => {
    dispatch(selectSocials(false));
    dispatch(openMenu(false));
    dispatch(focusOnWelcome(false));
    dispatch(focusOnText(false));
    dispatch(focusOnImage(false));
    dispatch(focusOnDesigns(false));
    dispatch(focusOnSkills(false));
    dispatch(focusOnAboutMe(true));
  };
  const onFocusSkills = () => {
    dispatch(selectSocials(false));
    dispatch(openMenu(false));
    dispatch(focusOnWelcome(false));
    dispatch(focusOnText(false));
    dispatch(focusOnImage(false));
    dispatch(focusOnDesigns(false));
    dispatch(focusOnAboutMe(false));
    dispatch(focusOnSkills(true));
  }
  const onFocusDesigns = () => {
    dispatch(selectSocials(false));
    dispatch(openMenu(false));
    dispatch(focusOnWelcome(false));
    dispatch(focusOnText(false));
    dispatch(focusOnImage(false));
    dispatch(focusOnAboutMe(false));
    dispatch(focusOnSkills(false));
    dispatch(focusOnDesigns(true));
  };
  const onFocusImage = () => {
    dispatch(selectSocials(false));
    dispatch(openMenu(false));
    dispatch(focusOnDesigns(false));
    dispatch(focusOnWelcome(false));
    dispatch(focusOnText(false));
    dispatch(focusOnAboutMe(false));
    dispatch(focusOnSkills(false));
    dispatch(focusOnImage(true));
  }
  const onFocusText = () => {
    dispatch(selectSocials(false));
    dispatch(openMenu(false));
    dispatch(focusOnDesigns(false));
    dispatch(focusOnWelcome(false));
    dispatch(focusOnAboutMe(false));
    dispatch(focusOnSkills(false));
    dispatch(focusOnImage(false));
    dispatch(focusOnText(true));
  }
  const onFocusWelcome = () => {
    dispatch(selectSocials(false));
    dispatch(openMenu(false));
    dispatch(focusOnAboutMe(false));
    dispatch(focusOnDesigns(false));
    dispatch(focusOnSkills(false));
    dispatch(focusOnImage(false));
    dispatch(focusOnText(false));
    dispatch(focusOnWelcome(true));
  }
  const showWelcome = () => {
    onFocusWelcome();
    dispatch(selectWelcome(true));
  };
  const closeMenu = () => {
    dispatch(selectSocials(false));
    dispatch(openMenu(false));
  };

  useEffect(() => {
    // eslint-disable-next-line
    let littleCat = `%c \/\\_\/\\\r\n( o.o )\r\n > ^ <`
    let font = `font-family: monospace`
    console.log(littleCat,font);
  },[])

  return (

    <div className="App">

      <div className="screen" onClick={closeMenu} onTouchStart={closeMenu}>
        <picture>
          <source srcSet={bgImgWebp} type='image/webp' />
          <img className='bg-image' src={bgImg} alt="Background of Windows95 PC" />
        </picture>
      </div>

      <div className='folder-container' onClick={showWelcome}>
        <i className='icon-welcome'></i>
        <span>welcome.txt</span>
      </div>

      {
        item.text.isSelected === true && (
          <Draggable cancel='.close-text, .text-link'>
            <div onClick={onFocusText} onTouchStart={onFocusText} style={item.text.isOnFocus ? {zIndex:`${index}`} : {zIndex: `${index - 1}`}}>
              <Text />
            </div>
          </Draggable>
        )
      }

      {
        item.image.isSelected === true && (
          <Draggable cancel='.close-image'>
            <div onClick={onFocusImage} onTouchStart={onFocusImage} style={item.image.isOnFocus ? {zIndex:`${index}`} : {zIndex: `${index - 1}`}}>
              <Image />
            </div>
          </Draggable>
        )
      }

      {
        item.designs.isSelected === true && (
          <Draggable cancel='.close-designs'>
            <div onClick={onFocusDesigns} onTouchStart={onFocusDesigns} style={item.designs.isOnFocus ? {zIndex:`${index}`} : {zIndex: `${index - 1}`}}>
              <Designs />
            </div>
            </Draggable>
        )
      }

      {
        item.skills.isSelected === true && (
          <Draggable cancel='.close-skills'>
            <div onClick={onFocusSkills} onTouchStart={onFocusSkills} style={item.skills.isOnFocus ? {zIndex:`${index}`} : {zIndex: `${index - 1}`}}>
              <Skills />
            </div>
          </Draggable>
        )
      }

      {
        item.aboutMe.isSelected === true && (
          <Draggable cancel=".close-about-me, .content.about-me">
            <div id="about-me" onClick={onFocusAboutMe} onTouchStart={onFocusAboutMe} style={item.aboutMe.isOnFocus ? {zIndex:`${index}`} : {zIndex: `${index - 1}`}}>
              <AboutMe />
            </div>
          </Draggable>
        )
      }

      {
        item.welcome.isSelected === true && (
          <Draggable cancel='.close-welcome'>
            <div onClick={onFocusWelcome} onTouchStart={onFocusWelcome} style={item.welcome.isOnFocus ? {zIndex:`${index}`} : {zIndex: `${index - 1}`}}>
              <Welcome />
            </div>
          </Draggable>
        )
      }

      {
        item.socials.isSelected === true && (
          <div className='socials-modal-position' style={{zIndex:`${index + 100}`}}>
            <SocialsModal />
          </div>
        )
      }

      {
       item.isOpen === true && (
          <div className='menu-position' style={{zIndex:`${index + 100}`}}>
            <MenuModal />
          </div>
       )
      }



      <div className='navbar-position' style={{zIndex:`${index + 100}`}}>
        <Navbar />
      </div>


    </div>
  );
}

export default App;
