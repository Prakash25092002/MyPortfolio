import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import my_resume from "../../assets/Prakash.Resume.pdf"
const Social_link = () => {
  

  return (
    <div className='hidden  lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        <li className='flex justify-between items-center w-40 h-10  px-4 bg-red-500 ml-[-105px] rounded-tr-md bg-gradient-to-r from-pink-500 via-pink-600 to-yellow-400
         hover:rounded-md duration-300 hover:ml-[-10px]'>
          <a href="https://www.linkedin.com/in/divya-prakash-singh-091601263" target='_blank' className=' flex justify-between items-center w-full'><>Linkedin<FaLinkedin size={30}/></></a>
        </li>
        <li className='flex justify-between items-center w-40 h-10  px-4 bg-red-500 ml-[-105px] bg-gradient-to-r from-pink-500 via-pink-600 to-yellow-400
         hover:rounded-md duration-300 hover:ml-[-10px]'>
          <a href="https://github.com/Prakash25092002" target='_blank' className=' flex justify-between items-center w-full'><>GitHub<FaGithub size={30}/></></a>
        </li>
        <li className='flex justify-between items-center w-40 h-10  px-4 bg-red-500 ml-[-105px] bg-gradient-to-r from-pink-500 via-pink-600 to-yellow-400
         hover:rounded-md duration-300 hover:ml-[-10px]'>
          <a href="mailto:dps@ieee.org" className=' flex justify-between items-center w-full'><>Mail<HiOutlineMail size={30}/></></a>
        </li>
        <li className='flex justify-between items-center w-40 h-10  px-4 bg-red-500 ml-[-105px] bg-gradient-to-r from-pink-500 via-pink-600 to-yellow-400 rounded-br-md
         hover:rounded-md duration-300 hover:ml-[-10px]'>
          <a href={my_resume} download={true} className=' flex justify-between items-center w-full'><>Resume<BsFillPersonLinesFill size={30}/></></a>
        </li>
      </ul>

    </div>
  )
}

export default Social_link