import { motion } from 'framer-motion';
import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="App">
      <motion.div 
      transition={{ layout: { duration: 1, type: "spring" } }} 
      layout 
      onClick={() => setIsOpen(!isOpen)} 
      className="card"
      style={{ borderRadius: '1rem'}}
      >
        <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
        {isOpen && (
        <motion.div className="expand">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Soluta officiis, in est saepe voluptates obcaecati illum 
          totam ducimus possimus? Vitae. 
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Aut, nihil.
          </p>
          <button>Submit</button>
        </motion.div>
        )}
      </motion.div>
    </div>
 );
}

export default App;
