import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJEs7v8PxwOHWFhBHfntJhFVes-8tJGufhNvDWOfKs0KZz4Nae82e2zkMXk7P-MACI2c&usqp=CAU"
        alt="Logo da Infraero"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Estágiario - RH</h4>
        <p className="font-bold text-2xl mt-1">Infraero</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png"
            alt="Excel"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png"
            alt="Excel"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png"
            alt="Excel"
          />
          {/* Tech Use */}
        </div>
        <p className="uppercase py-5 text-gray-300">Inicio - Final</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
