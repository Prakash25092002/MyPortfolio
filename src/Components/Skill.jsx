import React from 'react';

const Skill = ({ imageSrc, skillName, borderColor }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg w-[130px] sm:w-[150px] md:w-[190px] transition-transform transform p-2 skill-card">
      <div className="w-full">
        <img src={imageSrc} alt={skillName} className="w-full h-auto" />
      </div>
      <h1 className="text-lg font-bold mt-2">{skillName}</h1>
      <div className={`w-full h-[6px] ${borderColor} animated-border long-border-radius`}></div>
    </div>
  );
};

export default Skill;
