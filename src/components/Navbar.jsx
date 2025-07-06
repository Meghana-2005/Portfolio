import React, { useState ,useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  if (isOpen) {
    document.addEventListener('mousedown', handleClickOutside)
  } else {
    document.removeEventListener('mousedown', handleClickOutside)
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside)
  }
}, [isOpen])

  return (
    <div className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 to-black text-white font-semibold fixed w-full md:fixed'>

       
      <div className='flex justify-between items-center px-4 h-16'>
        <div className='text-xl font-bold'>
        
            
            <h>AM</h>
            
        </div>
      
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      
    
    
      
        <ul className='hidden md:flex gap-8 py-2 px-8 mt-5 mb-5'>
          <li><a href='#h'>About</a></li>
          <li><a href='#d'>Projects</a></li>
          <li><a href='#p'>Skills</a></li>
          {/*<li><a href='#c'>Caretips</a></li>
          <li><a href='#a'>AboutUs</a></li>*/}
          </ul>
      </div>
      {isOpen && (
        <ul ref={menuRef} className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 to-black text-white flex flex-col gap-2 w-full md:hidden">
          <li><a href="#h" onClick={toggleMenu} className="block w-full px-4 py-2 hover:bg-black">About</a></li>
          <li><a href="#d" onClick={toggleMenu} className="block w-full px-4 py-2 hover:bg-black">Projects</a></li>
          <li><a href="#p" onClick={toggleMenu} className="block w-full px-4 py-2 hover:bg-black">Skills</a></li>
          {/*<li><a href="#c" onClick={toggleMenu} className="block w-full px-4 py-2 hover:bg-orange-700">Caretips</a></li>
          <li><a href="#a" onClick={toggleMenu} className="block w-full px-4 py-2 hover:bg-orange-700">AboutUs</a></li>*/}
        </ul>
      )}
    </div>

    
    
  )
}

export default Navbar