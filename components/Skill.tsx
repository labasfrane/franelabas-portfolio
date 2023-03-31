import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { Skill } from "@/typings";

type Props = {
  skill: Skill;
  delay?: boolean;
};

function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <Image
        src={urlFor(skill?.image)?.url()}
        alt={skill?._id}
        width={650}
        height={650}
        className="rounded-full border border-customTeal object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      {/* hover state style  */}
      <div className="absolute rounded-full opacity-0 group-hover:opacity-90 group-hover:bg-customTeal transition duration-300 ease-in-out w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0 hover:border-customGray hover:border-2">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-customGray">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
