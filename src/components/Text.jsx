import React from 'react'
import '../assets/stylesheets/Text.css'
import { selectText } from '../redux/itemReducer'
import { useDispatch } from 'react-redux'

const Text = () => {
    const dispatch = useDispatch();
    const closeText = () => {
        dispatch(selectText(false));
    };

  return (
    <div className='window text'>
        <div className="top-bar">
            <i className='text-icon-small' />
            <span>about.txt</span>
            <button className='close-text' onClick={closeText}><span></span><span className="sr-only">Close</span></button>
        </div>
        <div className="content text">
            <div className="wrapper text">
                <p>To see more of my designs click <a className='text-link' href='https://www.behance.net/agreloe' target='_blank' rel='noreferrer'>here.</a></p>
            </div>
        </div>
    </div>
  )
}

export default Text;