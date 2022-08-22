import { motion } from 'framer-motion';
import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="App">
      <motion.div className='card'>
        <motion.h2>Framer Motion 🚀</motion.h2>
        <motion.div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Soluta officiis, in est saepe voluptates obcaecati illum 
          totam ducimus possimus? Vitae. 
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Aut, nihil.
          </p>
        </motion.div>
      </motion.div>
    </div>
 );
}

export default App;
