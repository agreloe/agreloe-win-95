import React from 'react'
import '../assets/stylesheets/Welcome.css'
import { selectWelcome } from '../redux/itemReducer'
import { useDispatch } from 'react-redux'

const Welcome = () => {
    const dispatch = useDispatch();
    const closeWelcome = () => {
        dispatch(selectWelcome(false));
    };
  return (
    <div className='window welcome'>
        <div className="top-bar">
            <i className='text-icon-small' />
            <span>welcome.txt</span>
            <button className='close-welcome' onClick={closeWelcome}><div></div></button>
        </div>
        <div className="content welcome">
            <div className="wrapper welcome">
                <p>Hello! My name is Erika Agrelo, and this is my Windows 95 Desktop.</p>
                <p>You are welcome to look around &#128513;</p>
                <p>-Agreloe</p>
            </div>
        </div>
    </div>
  )
}

export default Welcome;