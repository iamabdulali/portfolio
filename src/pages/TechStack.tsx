import {
  Atom,
  Cloud,
  Container,
  Cpu,
  Database,
  FileType,
  Flame,
  GitBranch,
  Hexagon,
  LayoutDashboard,
  Leaf,
  Server,
  Sparkles,
  TerminalSquare,
  Triangle,
  Wind,
  Wrench,
} from "lucide-react";
import { SiAngular, SiClaude, SiDotnet, SiFigma, SiMysql, SiRedux, SiSupabase } from "@icons-pack/react-simple-icons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const categories = [
  {
    title: "Frontend",
    subtitle: "Interfaces & interactions",
    icon: LayoutDashboard,
    glow: "bg-[#009689]/10",
    skills: [
      { name: "React", icon: Atom, color: "text-[#104e64] dark:text-[#5dcaa5]" },
      { name: "Next.js", icon: Triangle, color: "text-neutral-950 dark:text-neutral-100" },
      { name: "Tailwind", icon: Wind, color: "text-[#009689]" },
      { name: "TypeScript", icon: FileType, color: "text-[#104e64] dark:text-[#5dcaa5]" },
      { name: "Angular", icon: SiAngular, color: "text-[#fe9a00]" },
      { name: "Redux", icon: SiRedux, color: "text-[#fe9a00]" },
    ],
  },
  {
    title: "Backend",
    subtitle: "Logic & data flow",
    icon: Server,
    glow: "bg-[#f54900]/10",
    skills: [
      { name: "Node.js", icon: Hexagon, color: "text-[#009689]" },
      { name: "Supabase", icon: SiSupabase, color: "text-[#104e64] dark:text-[#5dcaa5]" },
      { name: "MongoDB", icon: Leaf, color: "text-[#009689]" },
      { name: ".Net", icon: SiDotnet, color: "text-[#ffb900]" },
      { name: "Firebase", icon: Flame, color: "text-[#f54900]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#f54900]" },
    ],
  },
  {
    title: "Tools",
    subtitle: "Workflow & shipping",
    icon: Wrench,
    glow: "bg-[#ffb900]/10",
    skills: [
      { name: "Git", icon: GitBranch, color: "text-[#f54900]" },
      { name: "Docker", icon: Container, color: "text-[#104e64] dark:text-[#85b7eb]" },
      { name: "Claude", icon: SiClaude, color: "text-[#104e64] dark:text-[#d97757]" },
      { name: "Figma", icon: SiFigma, color: "text-[#f54900]" },
      { name: "AWS", icon: Cloud, color: "text-[#fe9a00]" },
      { name: "Vercel", icon: TerminalSquare, color: "text-neutral-950 dark:text-neutral-100" },
    ],
  },
];

const orbit = [
  { icon: Atom, color: "text-[#104e64] dark:text-[#5dcaa5]" },
  { icon: Database, color: "text-[#009689]" },
  { icon: GitBranch, color: "text-[#f54900]" },
  { icon: Wind, color: "text-[#009689]" },
];

export default function Skills() {
  return (
    <div
      id="skills"
      className="relative w-full scroll-mt-16 overflow-hidden bg-white text-neutral-950 min-h-screen dark:bg-neutral-950 dark:text-neutral-50"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-20 top-40 size-72 rounded-full bg-neutral-900/5 blur-3xl dark:bg-neutral-100/5" />
      <div className="pointer-events-none absolute -right-24 bottom-20 size-96 rounded-full bg-[#f54900]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 size-8 rotate-12 rounded-full border-2 border-dashed border-neutral-200 dark:border-neutral-800" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/4 size-4 rounded-full bg-[#ffb900]/40" />

      <main className="mx-auto w-full max-w-7xl px-6 py-12 md:p-12 min-h-screen flex flex-col justify-center">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-xs font-medium text-neutral-900 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
            <Sparkles className="size-3.5 text-[#ffb900]" />
            My Playground
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            The Tech<span className="text-neutral-900 dark:text-neutral-100">Stack</span>
          </h1>
          <p className="mt-4 max-w-md text-sm text-neutral-500 dark:text-neutral-400">
            A living cluster of tools I love building with hover around and
            watch them come alive.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <Card
                key={cat.title}
                className="group relative gap-4 overflow-hidden p-6 transition-colors"
              >
                <div
                  className={`absolute -right-6 -top-6 size-24 rounded-full blur-2xl ${cat.glow}`}
                />
                <CardHeader className="gap-2 p-0">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-neutral-900 text-neutral-50 transition-transform group-hover:scale-105 dark:bg-neutral-100 dark:text-neutral-900">
                      <CatIcon className="size-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold tracking-tight">
                        {cat.title}
                      </span>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">
                        {cat.subtitle}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 p-0">
                  {cat.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-2 text-xs font-medium transition-transform duration-200 hover:-translate-y-0.5 dark:border-neutral-800 dark:bg-neutral-800"
                      >
                        <SkillIcon className={`size-4 ${skill.color}`} />
                        {skill.name}
                      </span>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Orbiting central chip */}
        <div className="relative mt-12 flex items-center justify-center">
          {/* Dashed rings */}
          <div className="orbit-ring absolute size-64 animate-[spin_30s_linear_infinite] rounded-full border border-dashed border-neutral-200 dark:border-neutral-800" />
          <div className="orbit-ring absolute size-40 animate-[spin_20s_linear_infinite_reverse] rounded-full border border-dashed border-neutral-200/60 dark:border-neutral-800/60" />

          <div className="relative flex size-64 items-center justify-center">
            {/* Central chip */}
            <div className="z-10 flex size-20 items-center justify-center rounded-full bg-neutral-900 text-neutral-50 shadow-lg dark:bg-neutral-100 dark:text-neutral-900">
              <Cpu className="size-8" />
            </div>

            {/* Orbiting icons */}
            {orbit.map(({ icon: Icon, color }, i) => {
              const delay = -(18 / orbit.length) * i;
              return (
                <div
                  key={i}
                  className="orbit-item absolute inset-0"
                  style={{ animation: `orbit 18s linear infinite`, animationDelay: `${delay}s` }}
                >
                  <div className="absolute left-1/2 top-0 -translate-x-1/2">
                    <div
                      className="flex size-11 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
                      style={{ animation: `counter 18s linear infinite`, animationDelay: `${delay}s` }}
                    >
                      <Icon className={`size-5 ${color}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}