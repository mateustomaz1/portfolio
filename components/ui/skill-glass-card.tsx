"use client";

import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type SkillGlassCardProps = {
  icon: string;
  title: string;
  description: string;
  className?: string;
  delay?: number;
};

export function SkillGlassCard({
  icon,
  title,
  description,
  className,
  delay = 0,
}: SkillGlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
    >
      <Card
        className={cn(
          "h-full rounded-2xl border border-white/10 bg-gradient-to-b from-primary-100/10 to-white/[0.03] backdrop-blur-md transition-colors duration-300 hover:border-primary/40 hover:from-primary-100/15 hover:to-white/[0.05]",
          className,
        )}
      >
        <CardBody className="bg-transparent p-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-lg bg-primary/10 p-2">
              <Icon
                icon={icon}
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
          </div>

          <h3 className="mb-2 font-geist text-xl font-bold tracking-tight">
            {title}
          </h3>

          <p className="line-clamp-6 text-sm leading-snug text-foreground-500">
            {description}
          </p>
        </CardBody>
      </Card>
    </motion.div>
  );
}
