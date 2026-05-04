"use client";

import type { AbstractIntlMessages } from "next-intl";
import { NextIntlClientProvider } from "next-intl";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import enMessages from "@/messages/en.json";
import ptMessages from "@/messages/pt.json";

export type AppLocale = "pt" | "en";

const messages: Record<AppLocale, AbstractIntlMessages> = {
  pt: ptMessages as unknown as AbstractIntlMessages,
  en: enMessages as unknown as AbstractIntlMessages,
};

const STORAGE_KEY = "portfolio-locale";

type LocaleContextValue = {
  locale: AppLocale;
  setLocale: (locale: AppLocale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export const useAppLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useAppLocale deve ser usado dentro de LocaleProvider");
  }
  return ctx;
};

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<AppLocale>("pt");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as AppLocale | null;
    if (stored === "en" || stored === "pt") {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = useCallback((next: AppLocale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return (
    <LocaleContext.Provider value={value}>
      <NextIntlClientProvider
        locale={locale}
        messages={messages[locale]}
        timeZone="America/Fortaleza"
      >
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
