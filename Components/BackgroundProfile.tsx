import { motion } from "framer-motion";

type Props = {};

const BackgroundProfile = (props: Props) => {
  return (
    <motion.div>
      <div className="border border-red-800 px-[300px] w-7 h-[300px]"></div>
    </motion.div>
  );
};

export default BackgroundProfile;
