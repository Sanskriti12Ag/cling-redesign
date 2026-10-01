import { motion } from 'framer-motion';

function HeroVisual() {
  return (
    <div className="hero-visual">
      <motion.div
        className="hero-orbit hero-orbit--one"
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <span className="hero-node hero-node--one" />
      </motion.div>

      <motion.div
        className="hero-orbit hero-orbit--two"
        animate={{ rotate: -360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <span className="hero-node hero-node--two" />
      </motion.div>

      <motion.div
        className="hero-orbit hero-orbit--three"
        animate={{ rotate: 360 }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <span className="hero-node hero-node--three" />
      </motion.div>

      <motion.div
        className="hero-core"
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <span>CLING</span>
        <small>DIGITAL<br />ENGINEERING</small>
      </motion.div>

      <div className="hero-label hero-label--top">
        <span>01</span>
        IDEAS
      </div>

      <div className="hero-label hero-label--right">
        <span>02</span>
        TECHNOLOGY
      </div>

      <div className="hero-label hero-label--bottom">
        <span>03</span>
        IMPACT
      </div>
    </div>
  );
}

export default HeroVisual;