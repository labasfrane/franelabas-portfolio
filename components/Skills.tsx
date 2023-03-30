import Skill from "./Skill";
import { motion } from "framer-motion";
import { Skill as SkillType } from "@/typings";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      className="min-h-screen relative flex flex-col mx-auto justify-center items-center xl:flex-row max-w-[2000px] xl:px-10 xl:space-y-0 text-center md:text-left "
    >
      <h3 className="sectionHeader">Skills</h3>
      <div className="-mb-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 ">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} delay />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
