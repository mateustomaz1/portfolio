"use client";

import { Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { Briefcase, Code2, GraduationCap, Workflow } from "lucide-react";
import { useTranslations } from "use-intl";
import type { ReactNode } from "react";

import { GlassIconRowCard } from "@/components/ui/glass-icon-row-card";

const SKILLS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "APIs REST",
  "Git",
  "Scrum",
  "Kanban",
  "Figma",
];

const ABOUT_ASIDE = [
  { key: "agenus" as const, icon: Briefcase },
  { key: "ifpb" as const, icon: GraduationCap },
  { key: "frontend" as const, icon: Code2 },
  { key: "workflow" as const, icon: Workflow },
];

const strong = (chunks: ReactNode) => (
  <strong className="font-semibold text-zinc-200">{chunks}</strong>
);

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const About = () => {
  const t = useTranslations("about");

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="w-full scroll-mt-24"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
        <div>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className=" max-w-[760px] text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {t("heading")}
          </motion.h2>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
            className="mt-6 max-w-[820px] space-y-4 text-base leading-8 text-zinc-400"
          >
            <p>
              {t.rich("p1", {
                degree: strong,
                job: strong,
              })}
            </p>

            <p>
              {t.rich("p2", {
                stack: strong,
              })}
            </p>

            <p>
              {t.rich("p3", {
                projects: strong,
              })}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.25,
                },
              },
            }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {SKILLS.map((skill) => (
              <motion.div
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 12, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                whileHover={{ y: -2, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Chip
                  size="sm"
                  variant="bordered"
                  radius="full"
                  className="border-white/10 bg-white/4 font-medium text-zinc-300"
                >
                  {skill}
                </Chip>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.aside
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.12,
              },
            },
          }}
        >
          <div className="relative space-y-3">
            {ABOUT_ASIDE.map((item) => (
              <GlassIconRowCard
                key={item.key}
                icon={item.icon}
                title={t(`aside.${item.key}.title`)}
                description={t(`aside.${item.key}.description`)}
              />
            ))}
          </div>
        </motion.aside>
      </div>
    </motion.section>
  );
};
