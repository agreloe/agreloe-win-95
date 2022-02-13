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
            <button className='close-text' onClick={closeText}><div></div></button>
        </div>
        <div className="content text">
            <div className="wrapper text">
                <p>Holis! Para seguir con la estética vintage, me pareció divertido agregar una animación pixel-art de un personaje que diseñé para un juego desarrollado con Construct.</p>
                <p>Para ver más de mi portfolio en Behance hacer clic <a href='https://www.behance.net/agreloe' target='_blank' rel='noreferrer'>aquí.</a></p>
            </div>
        </div>
    </div>
  )
}

export default Text;