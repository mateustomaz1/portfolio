"use client";

import { Icon } from "@iconify/react";
import { useTranslations } from "use-intl";

import { type AppLocale, useAppLocale } from "@/components/locale-provider";

const LANGUAGES = [
  {
    key: "pt" as const,
    label: "PT",
    fullLabel: "Português",
    flagIcon: "openmoji:flag-brazil",
  },
  {
    key: "en" as const,
    label: "EN",
    fullLabel: "English",
    flagIcon: "openmoji:flag-united-states",
  },
];

export function LanguageSelect() {
  const t = useTranslations("languageSelect");
  const { locale, setLocale } = useAppLocale();

  const currentLang =
    LANGUAGES.find((l) => l.key === locale) ?? LANGUAGES[0];

  return (
    <label className="relative flex w-[150px] items-center">
      <span className="pointer-events-none absolute left-2.5 z-10 flex items-center">
        <Icon
          icon={currentLang.flagIcon}
          width={20}
          height={20}
          className="shrink-0"
          aria-hidden
        />
      </span>
      <select
        aria-label={t("ariaLabel")}
        value={locale}
        onChange={(e) => {
          const v = e.target.value;
          if (v === "pt" || v === "en") setLocale(v as AppLocale);
        }}
        className="h-10 w-full cursor-pointer appearance-none rounded-2xl border border-white/10 bg-white/[0.04] py-2 pr-8 pl-10 text-xs font-semibold text-zinc-200 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-primary/30 hover:bg-primary/[0.06] focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/25"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.key} value={lang.key}>
            {lang.fullLabel}
          </option>
        ))}
      </select>
      <Icon
        icon="lucide:chevron-down"
        className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-zinc-500"
        aria-hidden
      />
    </label>
  );
}
