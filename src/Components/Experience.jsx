import React from 'react';
import Skill from './Skill';
import javas from '../assets/javas.png';
import html from '../assets/html-5.png';
import css from '../assets/css.jpg';
import react from '../assets/react.png';
import docker from '../assets/docker.png';
import github from '../assets/github.png';

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 text-transparent bg-clip-text '>Experiences</h1>
        <p className='text-lg '>These are the technologies I've worked in</p>
      </div>
      <div className='flex flex-wrap justify-center gap-4 p-4 w-3/5'>
        <Skill 
          imageSrc={html} 
          skillName="HTML" 
          borderColor="border-glow-orange" 
        />
        <Skill 
          imageSrc={css} 
          skillName="CSS" 
          borderColor="border-glow-blue" 
        />
        <Skill 
          imageSrc={javas} 
          skillName="JavaScript" 
          borderColor="border-glow-yellow" 
        />
        <Skill 
          imageSrc={react} 
          skillName="React" 
          borderColor="border-glow-skyblue" 
        />
        <Skill 
          imageSrc={docker} 
          skillName="Docker" 
          borderColor="border-glow-red" 
        />
        <Skill 
          imageSrc={github} 
          skillName="GitHub" 
          borderColor="border-glow-grey" 
        />
      </div>
    </div>
  );
};

export default App;
