"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "use-intl";

import { GlassIconRowCard } from "@/components/ui/glass-icon-row-card";

const CONTACT_ROWS = [
  {
    id: "email" as const,
    icon: Mail,
    value: "mateustomaz147@gmail.com",
    href: "mailto:mateustomaz147@gmail.com",
  },
  {
    id: "phone" as const,
    icon: Phone,
    value: "(83) 99636-8197",
    href: "tel:+5583996368197",
  },
  {
    id: "location" as const,
    icon: MapPin,
    href: "https://www.google.com/maps/place/Esperan%C3%A7a,+PB,+58135-000/data=!4m2!3m1!1s0x7ac2890159d88db:0x1bb834a9c6a2f643?sa=X&ved=1t:242&ictx=111",
  },
] as const;

const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mateus-tomaz-270b30204/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/mateustomaz1",
  },
] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const Contact = () => {
  const t = useTranslations("contact");

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      variants={fadeUp}
      className="mx-auto mb-8 w-full scroll-mt-24"
    >
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
              className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            >
              {t("badge")}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="max-w-[620px] text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              {t("heading")}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
              className="mt-4 max-w-[620px] text-base leading-7 text-zinc-400"
            >
              {t("body")}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
              className="mt-7 flex flex-wrap gap-3"
            >
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-blue-500/40 hover:text-blue-300"
                  >
                    <Icon size={16} />
                    {link.label}
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.24,
                },
              },
            }}
            className="space-y-3"
          >
            {CONTACT_ROWS.map((info) => {
              const isLocation = info.id === "location";
              const description = isLocation
                ? t("fields.location.value")
                : info.value;

              return (
                <GlassIconRowCard
                  key={info.id}
                  icon={info.icon}
                  title={t(`fields.${info.id}.label`)}
                  description={description}
                  href={info.href}
                  target={isLocation ? "_blank" : undefined}
                  rel={isLocation ? "noreferrer" : undefined}
                  variants={fadeUp}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  truncateDescription
                />
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};
