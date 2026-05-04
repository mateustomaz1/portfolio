"use client";

import { motion } from "framer-motion";
import { useTranslations } from "use-intl";

import { SkillGlassCard } from "@/components/ui/skill-glass-card";

const SKILL_ICONS = [
  "lucide:code",
  "lucide:layers",
  "lucide:git-branch",
  "lucide:palette",
] as const;

type SkillCardCopy = { title: string; description: string };

export const MySkills = () => {
  const t = useTranslations("mySkills");
  const cards = t.raw("cards") as SkillCardCopy[];

  return (
    <motion.div
      id="habilidades"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="grid scroll-mt-24 gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {SKILL_ICONS.map((icon, index) => (
        <SkillGlassCard
          key={icon}
          icon={icon}
          title={cards[index]?.title ?? ""}
          description={cards[index]?.description ?? ""}
          delay={index * 0.08}
        />
      ))}
    </motion.div>
  );
};
