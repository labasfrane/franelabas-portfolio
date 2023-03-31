import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { PageInfo, Skill, Project, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({ socials, pageInfo, skills, projects }: Props) {
  return (
    <>
      <Head>
        <title>Frane Labas Portfolio</title>
      </Head>

      <main className="bg-customDark text-customGray h-[100dvh] snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin sm:scrollbar scrollbar-thumb-customGray scroll-smooth scrollbar-track-customDarkGray">
        <Header socials={socials} />
        <section id="hero" className="snap-center">
          <Hero pageInfo={pageInfo} />
        </section>

        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>

        <section id="skills" className="snap-center">
          <Skills skills={skills} />
        </section>

        <section id="projects" className="snap-center">
          <Projects projects={projects} />
        </section>

        <section id="contact" className="snap-center">
          <ContactMe pageInfo={pageInfo} />
        </section>

        <footer className="sticky w-full bottom-5">
          <div className="flex items-center justify-end lg:justify-center lg:p-0 pr-5">
            <Link href="#hero">
              <ArrowUpCircleIcon className="h-10 w-10 hover:text-customTeal" />
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const socials: Social[] = await fetchSocials();
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      socials,
      pageInfo,
      skills,
      projects,
    },
    revalidate: 10,
  };
};
