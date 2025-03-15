import React from 'react';
import { motion } from 'framer-motion';
import RegistrationForm from './RegistrationForm';

// Стили для страницы
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg,rgb(66, 60, 73),rgb(113, 127, 150))',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1rem',
    color: '#6a11cb',
    background: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
};

// Анимации
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const titleVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.8 } },
};

const subtitleVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 1, duration: 0.8 } },
};

const buttonVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
  tap: { scale: 0.9 },
};

const App = () => {
  return (
    <motion.div
      style={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 style={styles.title} variants={titleVariants}>
        Привет!
      </motion.h1>
      <motion.p style={styles.subtitle} variants={subtitleVariants}>
      Введите данные для регистрации
      </motion.p>
      <motion.button
        style={styles.button}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <RegistrationForm />
      </motion.button>
    </motion.div>
  );
};

export default App;