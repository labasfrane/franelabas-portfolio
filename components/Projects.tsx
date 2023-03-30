import Image from "next/image";
import Link from "next/link";
import { Project } from "@/typings";
import urlFor from "@/lib/urlFor";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="h-screen relative flex flex-col items-center justify-evenly text-left max-w-full mx-auto z-0 overflow-hidden">
      <h3 className="sectionHeader">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin sm:scrollbar scrollbar-thumb-customGray scroll-smooth scrollbar-track-customDarkGray mt-7">
        {/* Project data */}
        {projects?.map((project, i) => (
          <div
            key={project?._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center px-5 sm:px-10 md:p-44 h-screen space-y-5 sm:space-y-10"
          >
            <Link href={project?.linkToBuild}>
              <Image
                src={urlFor(project?.image)?.url()}
                alt={project?._id}
                width={450}
                height={300}
                className="object-fill h-44 w-80 md:h-full md:w-full border-customTeal border-2 rounded-sm"
              />
            </Link>
            <div className="grid grid-rows-projectLayout gap-x-5 space-x-5 md:space-x-0 space-y-3 max-w-6xl">
              <h4 className="font-semibold text-center text-lg md:text-2xl md:col-span-3 m-auto">
                Project {i + 1} of {projects?.length}: {project?.title}
              </h4>

              {/* Summary */}
              <p className="text-center md:text-left text-sm sm:text-base max-h-24 md:row-span-2">
                {project?.summary}
              </p>
              {/* Techstack*/}
              <div className="flex justify-center items-center gap-3 md:row-span-2">
                {project?.technologies.map((technology) => (
                  <Image
                    key={technology?._id}
                    src={urlFor(technology?.image)?.url()}
                    alt={technology?._id}
                    width={120}
                    height={120}
                    className="object-none w-10 h-10"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-1/2 left-0 h-[600px] bg-customTeal/50 "></div>
    </div>
  );
};

export default Projects;
