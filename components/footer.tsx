"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const year = new Date().getFullYear();
  const t = useTranslations("footer");

  return (
    <motion.footer
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
      className="mx-auto w-full  border-t border-white/10 p-4 text-center"
    >
      <p className="text-sm text-zinc-500">{t("rights", { year })}</p>
    </motion.footer>
  );
};
