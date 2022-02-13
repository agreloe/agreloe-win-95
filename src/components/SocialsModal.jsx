import React from 'react'
import '../assets/stylesheets/SocialsModal.css'
import { selectSocials } from '../redux/itemReducer'
import { useDispatch } from 'react-redux'

const SocialsModal = () => {
    const dispatch = useDispatch();
    const closeSocials = () => {
        dispatch(selectSocials(false));
    };
  return (
    <div className='menu-modal'>
        <ul className='menu-wrapper'>
            <li onClick={closeSocials}>
                <i />
                <a href="https://www.linkedin.com/in/agreloerika/" target="_blank" rel='noreferrer'>LinkedIn</a>
            </li>
            <li onClick={closeSocials}>
                <i />
                <a href="https://github.com/agreloe" target="_blank" rel='noreferrer'>GitHub</a>
            </li>
            <li onClick={closeSocials}>
                <i />
                <a href="https://www.behance.net/agreloe" target="_blank" rel='noreferrer'>Behance</a>
            </li>
            
        </ul>
    </div>
  )
}

export default SocialsModal