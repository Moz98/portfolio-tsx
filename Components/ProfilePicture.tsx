import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ProfilePicture({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        delay: 0.2,
      }}
    >
      <Image
        className=" relative p-1 rounded-full border-2 border-[#f7ab0a]/60 "
        src="/moz.jpeg"
        width="300"
        height="300"
        alt="Imagem de Perfil"
      />
    </motion.div>
  );
}
