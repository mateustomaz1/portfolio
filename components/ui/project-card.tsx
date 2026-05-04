"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useTranslations } from "use-intl";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: readonly string[];
  liveUrl: string;
  githubUrl: string;
};

export function ProjectCard({
  title,
  description,
  image,
  category,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  const t = useTranslations("projectCard");

  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition hover:border-blue-500/40 hover:bg-blue-500/[0.04]">
      <div className="relative h-[190px] overflow-hidden bg-zinc-950 sm:h-[210px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1152px) 50vw, 33vw"
          draggable={false}
          className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-md">
          {category}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold tracking-tight text-white">
            {title}
          </h3>

          <div className="flex shrink-0 gap-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={t("repo", { title })}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-blue-500/40 hover:text-blue-300"
            >
              <Github size={17} />
            </a>

            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={t("live", { title })}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-blue-500/40 hover:text-blue-300"
            >
              <ExternalLink size={17} />
            </a>
          </div>
        </div>

        <p className="mt-3 line-clamp-3 min-h-[72px] text-sm leading-6 text-zinc-400">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
