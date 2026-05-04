"use client";

import { motion } from "framer-motion";
import { useTranslations } from "use-intl";

import { ProjectCard } from "@/components/ui/project-card";

const PROJECT_META = [
  {
    id: 5,
    image: "/portifolio.png",
    category: "Frontend",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://mateustomaz.vercel.app/",
    githubUrl: "https://github.com/mateustomaz1/portfolio",
  },
  {
    id: 6,
    image: "/desafio-frontend.png",
    category: "Frontend",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://desafio-tecnico-taupe.vercel.app/dashboard/",
    githubUrl: "https://github.com/mateustomaz1/desafio-tecnico",
  },
  {
    id: 7,
    image: "/tom.png",
    category: "Frontend",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://projeto-jazz-school.vercel.app/",
    githubUrl: "https://github.com/mateustomaz1/Projeto-Jazz-School",
  },
  {
    id: 1,
    image: "/Evoluir.png",
    category: "Frontend",
    technologies: ["React", "JavaScript", "Figma", "Tailwind"],
    liveUrl: "https://evoluirproject.netlify.app",
    githubUrl: "https://github.com/mateustomaz1/Evoluir",
  },
  {
    id: 3,
    image: "/preview.png",
    category: "Frontend",
    technologies: ["React", "JavaScript", "Tailwind"],
    liveUrl: "https://mario-bros-seven.vercel.app/",
    githubUrl: "https://github.com/mateustomaz1/MarioBros-main",
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const Projects = () => {
  const t = useTranslations("projects");

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mx-auto max-w-[1120px] scroll-mt-24 overflow-hidden"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t("heading")}
        </h2>

        <p className="mt-4 max-w-[680px] text-base leading-7 text-zinc-400">
          {t("subtitle")}
        </p>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{
            right: 0,
            left: -((PROJECT_META.length - 2) * 360),
          }}
          dragElastic={0.08}
          dragMomentum={false}
          className="flex cursor-grab gap-4 pb-4 active:cursor-grabbing"
        >
          {PROJECT_META.map((project) => (
            <div key={project.id} className="w-[320px] shrink-0 sm:w-[360px]">
              <ProjectCard
                title={t(`items.${project.id}.title`)}
                description={t(`items.${project.id}.description`)}
                image={project.image}
                category={project.category}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
