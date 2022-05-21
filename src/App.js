import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div
        transition={{ layout: { duration: 0.7, type: "spring" } }}
        layout
        className="card"
        onClick={() => setIsOpen(!isOpen)}
        //should be seperatey written
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <motion.h2 layout="position">Framer Motion</motion.h2>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="expand"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              soluta! Praesentium corporis modi, mollitia voluptates maxime
              similique at optio est.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              soluta! Praesentium corporis modi.
            </p>
            <button>Read More</button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
