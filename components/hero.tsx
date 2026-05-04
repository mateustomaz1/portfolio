"use client";

import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
export const Hero = () => {
  const t = useTranslations("hero");

  return (
    <motion.section
      id="inicio"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex w-full scroll-mt-24 flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          className="text-5xl font-bold sm:text-6xl"
        >
          {t("line1")}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
          className="text-5xl font-bold text-foreground-500 sm:text-6xl"
        >
          {t("line2")}
        </motion.h2>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.35, ease: "easeOut" }}
        className="max-w-2xl text-lg text-foreground-500"
      >
        {t("introBefore")}{" "}
        <span className="font-bold text-foreground-800">{t("introBold")}</span>{" "}
        {t("introMid")}{" "}
        <span className="text-foreground-800">{t("introSpan")}</span>
        {t("introAfter")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.72, ease: "easeOut" }}
        className="flex gap-2"
      >
        <motion.div
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
        >
          <Button
            size="md"
            color="primary"
            variant="flat"
            onPress={() => window.open("/MateusTomaz_CV.pdf", "_blank")}
          >
            <Icon
              icon="lucide:download"
              width={20}
              height={20}
              className="mr-2 transition-transform group-hover:-translate-y-0.5"
            />
            {t("downloadCv")}
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ y: -2, scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
        >
          <Button
            isIconOnly
            size="md"
            variant="flat"
            onPress={() =>
              window.open("https://github.com/mateustomaz1", "_blank")
            }
            aria-label="GitHub"
          >
            <Icon icon="mdi:github" width={24} height={24} />
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ y: -2, scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
        >
          <Button
            isIconOnly
            size="md"
            variant="flat"
            onPress={() =>
              window.open(
                "https://www.linkedin.com/in/mateus-tomaz-270b30204/",
                "_blank",
              )
            }
            aria-label="LinkedIn"
          >
            <Icon icon="mdi:linkedin" width={24} height={24} />
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
