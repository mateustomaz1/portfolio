"use client";

import NextLink from "next/link";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";

import { LanguageSelect } from "@/components/language-select";

const NAV_LINKS = [
  { href: "/#inicio", key: "home" as const },
  { href: "/#habilidades", key: "skills" as const },
  { href: "/#projects", key: "projects" as const },
];

const linkClassName =
  "text-[11px] font-medium uppercase tracking-wider text-foreground-500 transition-colors hover:text-primary";

export const Navigation = () => {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-4 py-3">
        <div className="flex min-w-0 flex-1 items-center gap-4">
          <button
            type="button"
            className="inline-flex shrink-0 rounded-lg p-2 text-foreground-600 transition-colors hover:bg-white/5 hover:text-primary sm:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </button>

          <nav
            className="hidden items-center gap-6 sm:flex"
            aria-label={t("aria")}
          >
            {NAV_LINKS.map(({ href, key }) => (
              <NextLink key={key} href={href} className={linkClassName}>
                {t(key)}
              </NextLink>
            ))}
          </nav>
        </div>

        <div className="shrink-0">
          <LanguageSelect />
        </div>
      </div>

      {mobileOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 px-4 py-3 sm:hidden"
          aria-label={t("aria")}
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ href, key }) => (
              <li key={key}>
                <NextLink
                  href={href}
                  className={`${linkClassName} block py-2.5`}
                  onClick={closeMobile}
                >
                  {t(key)}
                </NextLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
};
