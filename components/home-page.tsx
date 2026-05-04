"use client";

import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { MySkills } from "@/components/my-skills";
import { Projects } from "@/components/projects";
import { Divider } from "@heroui/react";

export const HomePage = () => {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="
      pointer-events-none absolute inset-0 z-0
      bg-[url('/3d-render-flowing-particles-modern-techno-design.jpg')]
      bg-size-[1600px_auto]
      opacity-80
      sm:bg-size-[1800px_auto]
      sm:bg-position-[center_90px]
      lg:bg-size-[2100px_auto]
      lg:bg-position-[center_60px]
    "
      />

      <div
        aria-hidden
        className="
      pointer-events-none absolute inset-0 z-0
      bg-linear-to-r
      from-background
      via-background/90
      to-background/55
    "
      />

      <div
        aria-hidden
        className="
      pointer-events-none absolute inset-0 z-0
      bg-linear-to-b
      from-background
      via-transparent
      to-background/70
    "
      />

      <div className="relative z-10 mx-auto mt-20 mb-10 flex max-w-6xl flex-col gap-20 px-4">
        <Hero />
        <MySkills />
        <Divider className="my-4" />

        <About />
        <Divider className="my-4" />

        <Projects />
        <Divider className="my-4" />

        <Contact />
      </div>
    </main>
  );
};
