import React from 'react'

const Skill = () => {
  return (
    <div className='px-20 py-20 flex flex-col gap-10 md:grid grid-cols-5 '>
       
        <div className='border-2 bordr-white flex flex-col items-center '>
             <h1> Languages</h1>
             <p>c/c++</p>
             <p>python</p>
             <p>java</p>
             <p>SQL</p>
        </div>
        <div className='border-2 bordr-white flex flex-col items-center'>
             <h1> Frameworks & Libraries</h1>
             <p>Reactjs</p>
             <p>Nodejs</p>
             <p>Taiwind css</p>
             <p>Bootstrap</p>
        </div>
        <div className='border-2 bordr-white flex flex-col items-center'>
             <h1>Frontend Concepts</h1>
             <p>Responsive design</p>
             <p>UI/UX</p>
             
        </div>
        <div className='border-2 bordr-white flex flex-col items-center'>
             <h1> Developer Tools</h1>
             <p>vscode</p>
             <p>kaggle</p>
             <p>ecllipse</p>
             <p>github</p>
        </div>
        <div className='border-2 bordr-white flex flex-col items-center'>
             <h1> Relevant Coursework</h1>
             <p>DBMS</p>
             <p>OS</p>
             <p>CN</p>
             <p>OOPS</p>
        </div>
        
    </div>
  )
}

export default Skill