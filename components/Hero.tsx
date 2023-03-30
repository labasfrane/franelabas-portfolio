import BackgroundAnimation from "./BackgroundAnimation";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { PageInfo } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text] = useTypewriter({
    words: [`Hi, my name is ${pageInfo?.name}`, "Welcome to my page"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden pt-10">
      <BackgroundAnimation />
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        alt={pageInfo?.name}
        width={130}
        height={130}
        className="relative mx-auto rounded-full object-cover"
      />
      <div className="text-customGray z-20">
        <h2 className="text-customTeal font-semibold uppercase text-sm tracking-[0.5rem] pb-2 mr-[-0.5rem]">
          {pageInfo?.role}
        </h2>
        <h1>
          <span>{text}</span>
          <Cursor />
        </h1>

        {/* Navigation Links */}

        <div className="pt-14">
          <Link href="#about">
            <button className="customButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="customButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="customButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
