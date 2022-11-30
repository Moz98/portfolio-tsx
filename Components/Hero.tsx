import Image from "next/image";
import Link from "next/link";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import ProfilePicture from "./ProfilePicture";

type Props = {};
function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hey, I'm Marcos", "I'm Developer", "Let's code?"],
    loop: true,
    delaySpeed: 500,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <ProfilePicture />
      <div>
        <h2 className="text-sm text-gray-300 uppercase tracking-[10px] md:text-lg">
          Developer Junior
        </h2>
        <h1 className="flex text-5xl lg:text-6xl font-semibold px-10">
          <p className="mr-3">{text}</p>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
      </div>

      <div>
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>

        <Link href="#prjects">
          <button className="heroButton">Projects</button>
        </Link>

        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>

        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>

        <Link href="contact">
          <button className="heroButton">Contact Me</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
