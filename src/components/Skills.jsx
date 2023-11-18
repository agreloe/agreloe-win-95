import React from 'react'
import '../assets/stylesheets/Skills.css'
import { selectSkills } from '../redux/itemReducer';
import { useDispatch } from 'react-redux';

const Skills = () => {
  const dispatch = useDispatch();
  const closeSkills = () => {
    dispatch(selectSkills(false))
  };

  return (
    <div className='window skills'>
      <div className="top-bar">
        <i className='console-icon' />
        <span>Skills</span>
        <button className='close-skills' onClick={closeSkills}><span></span><span className="sr-only">Close</span></button>
      </div>
      <div className="content skills">
        <div className="wrapper skills">

          <div className="file-container">
            <i className='html'></i><span>HTML5</span>
          </div>

          <div className="file-container">
            <i className='css'></i><span>CSS</span>
          </div>

          <div className="file-container">
            <i className='js'></i><span>JavaScript</span>
          </div>

          <div className="file-container">
            <i className='react'></i><span>React</span>
          </div>

          <div className="file-container">
            <i className='redux'></i><span>Redux</span>
          </div>

          <div className="file-container">
            <i className='nodejs'></i><span>Node JS</span>
          </div>

          <div className="file-container">
            <i className='express'></i><span>Express</span>
          </div>

          <div className="file-container">
            <i className='postgresql'></i><span>PostgreSQL</span>
          </div>

          <div className="file-container">
            <i className='mongodb'></i><span>MongoDB</span>
          </div>

        </div>
      </div>
    </div>
  )
};

export default Skills;