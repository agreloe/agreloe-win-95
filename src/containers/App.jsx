import '../assets/stylesheets/App.css';
import Navbar from '../components/Navbar';
import MenuModal from '../components/MenuModal';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';
import Designs from '../components/Designs';
import Image from '../components/Image';
import Text from '../components/Text';
import Welcome from '../components/Welcome';
import { useSelector, useDispatch } from 'react-redux';
import Draggable from "react-draggable";
import { focusOnAboutMe, focusOnDesigns, focusOnImage, focusOnSkills, focusOnText, focusOnWelcome, selectWelcome } from '../redux/itemReducer';


const App = () => {
  const item = useSelector((store)=> store.item);
  const dispatch = useDispatch();

  const onFocusAboutMe = () => {
    dispatch(focusOnWelcome(false));
    dispatch(focusOnText(false));
    dispatch(focusOnImage(false));
    dispatch(focusOnDesigns(false));
    dispatch(focusOnSkills(false));
    dispatch(focusOnAboutMe(true));
  };
  const onFocusSkills = () => {
    dispatch(focusOnWelcome(false));
    dispatch(focusOnText(false));
    dispatch(focusOnImage(false));
    dispatch(focusOnDesigns(false));
    dispatch(focusOnAboutMe(false));
    dispatch(focusOnSkills(true));
  }
  const onFocusDesigns = () => {
    dispatch(focusOnWelcome(false));
    dispatch(focusOnText(false));
    dispatch(focusOnImage(false));
    dispatch(focusOnAboutMe(false));
    dispatch(focusOnSkills(false));
    dispatch(focusOnDesigns(true));
  };
  const onFocusImage = () => {
    dispatch(focusOnDesigns(false));
    dispatch(focusOnWelcome(false));
    dispatch(focusOnText(false));
    dispatch(focusOnAboutMe(false));
    dispatch(focusOnSkills(false));
    dispatch(focusOnImage(true));
  }
  const onFocusText = () => {
    dispatch(focusOnDesigns(false));
    dispatch(focusOnWelcome(false));
    dispatch(focusOnAboutMe(false));
    dispatch(focusOnSkills(false));
    dispatch(focusOnImage(false));
    dispatch(focusOnText(true));
  }
  const onFocusWelcome = () => {
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

  return (
    <div className="App">

      <div className='folder-container' onClick={showWelcome}>
        <i className='icon-welcome'></i>
        <span>welcome.txt</span>
      </div>

      {
        item.designs.isSelected === true && (
          <Draggable>
            <div onClick={onFocusDesigns} className={item.designs.isOnFocus ? 'front' : ''}>
              <Designs />
            </div>
          </Draggable>
        )
      }

      {
        item.skills.isSelected === true && (    
          <Draggable>
            <div onClick={onFocusSkills} className={item.skills.isOnFocus ? 'front' : ''}><Skills /></div>
          </Draggable>
        )
      }

      {
        item.aboutMe.isSelected === true && (
          <Draggable>
            <div id="about-me" onClick={onFocusAboutMe} className={item.aboutMe.isOnFocus ? 'front' : ''}><AboutMe /></div>
          </Draggable>
        )
      }

      {
        item.text.isSelected === true && (
          <Draggable>
            <div onClick={onFocusText} className={item.text.isOnFocus ? 'front' : ''}>
              <Text />
            </div>
          </Draggable>
        )
      }

      {
        item.image.isSelected === true && (
          <Draggable>
            <div onClick={onFocusImage} className={item.image.isOnFocus ? 'front' : ''}>
              <Image />
            </div>
          </Draggable>
        )
      }

      {
        item.welcome.isSelected === true && (
          <Draggable>
            <div onClick={onFocusWelcome} className={item.welcome.isOnFocus ? 'front' : ''}>
              <Welcome />
            </div>
          </Draggable>
        )
      }

      {
       item.isOpen === true && (
          <div className='menu-position'>
            <MenuModal />
          </div>
       ) 
      }

      <div className='navbar-position'>
        <Navbar />
      </div>

    </div>
  );
}

export default App;
