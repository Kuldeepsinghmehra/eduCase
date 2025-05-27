import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



const WelcomePage = () => {
  return (
<motion.div
  className='container h-screen overflow-hidden flex items-center justify-center'
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3, ease: 'easeInOut' }}>
  
  <div className='flex flex-col justify-center items-center gap-6 text-center'>
    <div className='flex flex-col gap-2'>
      <h1 className='heading'>Welcome to PopX</h1>
      <h2 className='body-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h2>
    </div>

    <div className='btn-container flex flex-col gap-4'>
      <Link to="/signup" className="btn-signup">Create Account</Link>
      <Link to="/login" className="btn-login">Already Registered? Login</Link>
    </div>
  </div>
</motion.div>
  )
}

export default WelcomePage