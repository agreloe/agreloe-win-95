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
            <button onClick={closeWelcome}><div></div></button>
        </div>
        <div className="content welcome">
            <div className="wrapper welcome">
                <p>{`Holis! Bienvenido a mi escritorio de Windows 95 :)`}</p>
                <p>Las ventanas se pueden desplazar a través de la pantalla.</p>
                <p>Está permitido fisgonear mi pc jeje.</p>
                <p>- Eri.</p>
            </div>
        </div>
    </div>
  )
}

export default Welcome;