import {
  Briefcase,
  ChevronDown,
  Code,
  Code2,
  Coffee,
  FolderOpen,
  Home,
  Mail,
  Rocket,
  Send,
  Sparkles,
  Terminal,
  User,
} from "lucide-react";
import { SiGithub, SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { selfSketch } from "@/assets";

const navItems = [
  { label: "Home", icon: Home, active: true },
  { label: "About", icon: User },
  { label: "Projects", icon: Briefcase },
  { label: "Skills", icon: Code },
  { label: "Contact", icon: Mail },
];

const socials = [
  { label: "GitHub", icon: SiGithub, href: "https://github.com/iamabdulali" },
  { label: "Facebook", icon: SiFacebook, href: "https://www.facebook.com/ali.sweet.5872" },
  { label: "Instagram", icon: SiInstagram, href: "https://www.instagram.com/iamabdulali/" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50">
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col overflow-hidden">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 px-6 pb-6 pt-8 md:px-12">
          <div className="flex items-center gap-2">
            <div className="flex size-9 items-center justify-center rounded-xl bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900">
              <Terminal className="size-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">abdul.dev</span>
          </div>

          <nav className="flex items-center gap-6 md:gap-8">
            {navItems.map(({ label, icon: Icon, active }) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className={`hidden items-center gap-2 border-b-2 pb-1 text-sm transition-colors sm:flex ${active
                    ? "border-[#f54900] font-bold text-neutral-950 dark:text-neutral-50"
                    : "border-transparent font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  }`}
              >
                <Icon
                  className={`size-4 ${active ? "text-[#f54900]" : ""}`}
                />
                {label}
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </header>

        {/* Decorative blurred blobs */}
        <div className="pointer-events-none absolute left-24 top-32 size-24 rounded-full bg-[#f54900]/20 blur-2xl" />
        <div className="pointer-events-none absolute bottom-40 right-32 size-32 rounded-full bg-[#009689]/20 blur-2xl" />
        <div className="pointer-events-none absolute right-1/4 top-1/3 size-16 rounded-3xl bg-[#ffb900]/20 blur-xl" />

        {/* Hero */}
        <div className="relative flex flex-1 items-center px-6 py-12 md:px-12">
          <div className="flex w-full flex-col items-center justify-between gap-12 md:flex-row">
            {/* Left column */}
            <div className="flex max-w-xl flex-col gap-6">
              <div className="flex w-fit items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 dark:bg-neutral-800">
                <span className="size-2 rounded-full bg-[#009689]" />
                <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  Available for new projects
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-2xl font-medium text-neutral-500 dark:text-neutral-400">
                  Hey, I'm
                </span>
                <h1 className="text-6xl font-black tracking-tighter md:text-8xl">
                  Abdul<span className="text-[#f54900]"> Ali</span>
                </h1>
              </div>

              <p className="text-2xl font-medium leading-8 text-neutral-500 dark:text-neutral-400">
                Full-stack developer crafting{" "}
                <span className="font-bold text-neutral-950 dark:text-neutral-50">playful</span>,
                pixel-perfect experiences that actually ship.{" "}
                <Rocket className="inline size-6 text-[#fe9a00]" />
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button onClick={() =>
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
        } className="h-12 rounded-full bg-neutral-900 px-8 text-base cursor-pointer font-bold text-neutral-50 transition-all dark:bg-neutral-100 dark:text-neutral-900">
                  <FolderOpen className="size-5" />
                  See my work
                </Button>
                <Button onClick={() =>
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }
                  variant="outline"
                  className="h-12 cursor-pointer rounded-full border-2 border-neutral-200 px-8 text-base font-bold transition-all dark:border-neutral-800"
                >
                  <Send className="size-5" />
                  Get in touch
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Find me on
                </span>
                <div className="flex items-center gap-3">
                  {socials.map(({ label, icon: Icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex size-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-900 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — avatar */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_120deg,oklch(0.646_0.222_41.116/.35),oklch(0.6_0.118_184.704/.35),oklch(0.828_0.189_84.429/.35),oklch(0.646_0.222_41.116/.35))] blur-2xl" />
              <div className="relative size-72 overflow-hidden rounded-[40px] border-4 border-white shadow-2xl md:size-80 dark:border-neutral-800">
                 <img
                  src={selfSketch}
                  alt="Developer avatar"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute -right-4 -top-4 flex size-16 animate-bounce items-center justify-center rounded-2xl bg-[#ffb900] text-neutral-50 shadow-lg">
                <Code2 className="size-8" />
              </div>
              <div className="absolute -bottom-4 -left-6 flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
                <span className="flex size-8 items-center justify-center rounded-lg bg-[#009689]/20">
                  <Coffee className="size-4 text-[#009689]" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold leading-tight">
                    5+ years
                  </span>
                  <span className="text-xs leading-tight text-neutral-500 dark:text-neutral-400">
                    building stuff
                  </span>
                </div>
              </div>
              <div className="absolute -left-10 top-1/2 flex size-12 animate-pulse items-center justify-center rounded-full bg-[#f54900] text-neutral-50 shadow-lg">
                <Sparkles className="size-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        } className="flex flex-col items-center gap-2 pb-8 cursor-pointer">
          <span className="text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Scroll to explore
          </span>
          <div className="flex size-9 animate-bounce items-center justify-center rounded-full border-2 border-neutral-200 dark:border-neutral-800">
            <ChevronDown className="size-5 text-[#f54900]" />
          </div>
        </div>
      </div>
    </div>
  );
}