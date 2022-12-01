import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl">
        about
      </h3>

      <motion.img
        initial={{
          x: -200,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        className="-mb-20 md:-mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="/moz.jpeg"
        alt="Imagem de perfil"
        width="300"
        height="600"
      />

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold">
          Here is my
          <span className="underline decoration-[#f7ab0a]/50">Background</span>:
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dicta a
          optio vel illum sunt inventore dolor, molestiae nostrum! In deserunt
          temporibus, tempore nisi velit unde voluptate maiores debitis rerum.
          Pariatur, dicta fuga aperiam sequi id accusamus incidunt, temporibus
          inventore itaque neque nemo ex vitae nulla voluptates minus eligendi
          quasi cum voluptate cupiditate fugit iure tenetur provident officia
          maiores! Pariatur. Iure harum accusamus, excepturi corporis provident
          blanditiis officiis at nulla a ipsa illum corrupti quod rerum,
          repellat nobis qui. Beatae dicta assumenda quia vitae hic aperiam
          delectus quisquam amet quae? Cum impedit deleniti odit libero animi
          aliquid officiis recusandae nemo! Laudantium officiis corrupti facilis
          blanditiis hic, quam corporis iste adipisci nostrum illum at
          recusandae voluptas amet, nisi distinctio incidunt eum.
        </p>
      </motion.div>
    </div>
  );
}
