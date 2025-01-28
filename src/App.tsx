import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Confetti from 'react-confetti';

const Envelope = styled(motion.div)`
  width: 200px;
  height: 120px;
  background-color: #f4d03f;
  position: relative;
  border-radius: 8px;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    top: -50px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 50px solid #f4d03f;
  }
`;

const Letter = styled(motion.div)`
  width: 180px;
  height: 100px;
  background-color: white;
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function EnvelopeAnimation() {
  const [isOpen, setIsOpen] = useState(false);

  const playSound = () => {
    const sound = new Audio('/sounds/open-envelope.mp3');
    sound.play();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      {isOpen && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <Envelope
        onClick={() => {
          setIsOpen(!isOpen);
          playSound();
        }}
        animate={{ y: isOpen ? -20 : 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <AnimatePresence>
          {!isOpen && (
            <Letter
              initial={{ y: 0, rotate: 0 }}
              exit={{ y: -200, opacity: 0, rotate: -10 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </Envelope>
    </div>
  );
}

export default EnvelopeAnimation;