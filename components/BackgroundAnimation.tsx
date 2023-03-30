import { motion } from "framer-motion";

const BackgroundAnimation = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 1],
        opacity: [0.1, 0.2, 0.1, 1],
      }}
      transition={{
        duration: 2,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-customGray animate-pulse rounded-lg md:h-[35rem] md:w-[35rem] mt-56 " />
      <div className="absolute border border-customTeal rounded-lg h-[130px] w-[130px] mt-56 " />
    </motion.div>
  );
};

export default BackgroundAnimation;
