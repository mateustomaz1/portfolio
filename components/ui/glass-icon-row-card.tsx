"use client";

import { motion, type Transition, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const defaultVariants: Variants = {
  hidden: { opacity: 0, x: 18 },
  visible: { opacity: 1, x: 0 },
};

const defaultTransition: Transition = {
  duration: 0.4,
  ease: "easeOut",
};

export type GlassIconRowCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  variants?: Variants;
  transition?: Transition;
  /** Se definido, o cartão renderiza como `motion.a`. */
  href?: string;
  target?: string;
  rel?: string;
  whileTap?: { scale?: number } | false;
  /** Útil para email / URLs longas em linha única. */
  truncateDescription?: boolean;
};

export function GlassIconRowCard({
  icon: Icon,
  title,
  description,
  className,
  variants = defaultVariants,
  transition = defaultTransition,
  href,
  target,
  rel,
  whileTap = { scale: 0.99 },
  truncateDescription = false,
}: GlassIconRowCardProps) {
  const rootClass = cn(
    "group flex items-center gap-4 rounded-xl border border-white/10 bg-linear-to-b from-primary-100/10 to-white/3 p-4 backdrop-blur-md transition-colors duration-300 hover:border-primary/40 hover:from-primary-100/15 hover:to-white/5",
    className,
  );

  const iconWrapClass =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/15";

  const body = (
    <>
      <div className={iconWrapClass}>
        <Icon size={19} />
      </div>

      <div className={cn(truncateDescription && "min-w-0 flex-1")}>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p
          className={cn(
            "mt-1 text-sm text-zinc-400 transition-colors",
            href && "group-hover:text-zinc-300",
            truncateDescription && "truncate",
          )}
        >
          {description}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        variants={variants}
        whileHover={{ x: 4 }}
        whileTap={whileTap === false ? undefined : whileTap}
        transition={transition}
        className={rootClass}
      >
        {body}
      </motion.a>
    );
  }

  return (
    <motion.div
      variants={variants}
      whileHover={{ x: 4 }}
      transition={transition}
      className={rootClass}
    >
      {body}
    </motion.div>
  );
}
