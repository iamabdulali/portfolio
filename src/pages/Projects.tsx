import { ArrowRight, ExternalLink, Lock, Play, Wrench } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { crypto, playwright, scalez, shopify } from "@/assets";

type Project = {
  title: string;
  blurb: string;
  overlay: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  note?: string;
};

const featured: Project[] = [
  {
    title: "Custom Shopify Storefront",
    blurb:
      "A bespoke e-commerce storefront with a fully custom design, built in React and wired into Shopify for products, cart, and checkout.",
    overlay:
      "Custom-designed storefront integrated with Shopify  live and serving real customers.",
    image: shopify,
    tags: ["React", "Shopify", "Tailwind", "Netlify"],
    liveUrl: "https://charmmebeauty.com",
  },
  {
    title: "Scalez",
    blurb:
      "A SaaS payment platform for value-based care operations  automating the full provider payment cycle that ops teams previously ran on spreadsheets and manual workarounds.",
    overlay: "Enterprise payments platform for value-based care, built with Angular and .NET.",
    image: scalez,
    tags: ["Angular", ".NET", "C#", "Azure", "NgRx"],
    note: "Enterprise product · access restricted, code private",
    liveUrl: "https://scalesz.com/"
  },
];

const projects: Project[] = [
  {
    title: "Crypto Dashboard",
    blurb: "Crypto web app with live market data and user accounts.",
    overlay: "Built with React and Supabase for auth and backend.",
    image: crypto,
    tags: ["React", "Supabase", "Netlify"],
    note: "Built during contract · since updated by client",
  },
  {
    title: "Message Automation Pipeline",
    blurb: "Scheduled automation that aggregates conversations into one dashboard.",
    overlay:
      "Fetches messages on a schedule, stores them centrally, and surfaces them to agents. Robust session handling.",
    image: playwright,
    tags: ["Playwright", "Node.js", "Railway", "Docker"],
    githubUrl: "https://github.com/iamabdulali/playwright-automation",
  },
];

function ProjectLinks({ p, size = "sm" }: { p: Project; size?: "sm" | "lg" }) {
  const hasLinks = p.liveUrl || p.githubUrl || p.videoUrl;

  if (!hasLinks && p.note) {
    return (
      <span className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400">
        <Lock className="size-3.5" />
        {p.note}
      </span>
    );
  }

  if (size === "lg") {
    return (
      <div>
        {p.liveUrl && (
          <Button className="gap-2 rounded-full bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900">
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 items-center">
              <ExternalLink className="size-4" />
              Live Demo
            </a>
          </Button>
        )}
        {p.githubUrl && (
          <Button variant="outline" className="gap-2 rounded-full">
            <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">
              <SiGithub className="size-4" />
              GitHub
            </a>
          </Button>
        )}
        {p.videoUrl && (
          <Button variant="outline" className="gap-2 rounded-full">
            <a href={p.videoUrl} target="_blank" rel="noopener noreferrer">
              <Play className="size-4" />
              Demo Video
            </a>
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="mt-auto flex items-center gap-3 border-t border-neutral-200 pt-4 dark:border-neutral-800">
      {p.liveUrl && (
        <a
          href={p.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium text-neutral-950 transition-colors hover:text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-300"
        >
          <ExternalLink className="size-4" />
          Live Demo
        </a>
      )}
      {p.githubUrl && (
        <a
          href={p.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          <SiGithub className="size-4" />
          GitHub
        </a>
      )}
      {p.videoUrl && (
        <a
          href={p.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          <Play className="size-4" />
          Demo Video
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <div
      id="projects"
      className="min-h-screen w-full scroll-mt-16 bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50"
    >
      <main className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-xs font-medium text-neutral-900 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
            <Wrench className="size-3.5 text-[#ffb900]" />
            Stuff I've built
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Projects &amp; <span className="text-neutral-900 dark:text-neutral-100">Case Studies</span>
          </h1>
          <p className="mt-4 max-w-md text-sm text-neutral-500 dark:text-neutral-400">
            A collection of products I've designed and built from custom
            storefronts to enterprise apps and automation tools.
          </p>
        </div>

        {/* Grid: 2 wide featured on top, 2 small below */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Two featured wide cards */}
          {featured.map((p) => (
            <Card
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-3xl p-0 shadow-sm transition-all duration-500 md:col-span-2 lg:col-span-1"
            >
              <div className="relative h-80 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {p.note && (
                  <div className="absolute right-4 top-4">
                    <Badge className="gap-1 rounded-full bg-neutral-900/80 px-3 py-1 text-neutral-50 backdrop-blur">
                      <Lock className="size-3" />
                      Private
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 flex translate-y-4 flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white/90">{p.overlay}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-bold">{p.title}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400">{p.blurb}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="rounded-full px-3 py-1 text-xs"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="mt-2">
                  <ProjectLinks p={p} size="lg" />
                </div>
              </div>
            </Card>
          ))}

          {/* Two small cards */}
          {projects.map((p) => (
            <Card
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-3xl p-0 shadow-sm transition-all duration-500"
            >
              <div className="relative h-80 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {p.note && (
                  <div className="absolute right-3 top-3">
                    <Badge className="gap-1 rounded-full bg-neutral-900/80 px-3 py-1 text-neutral-50 backdrop-blur">
                      <Lock className="size-3" />
                      Private
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 flex translate-y-4 flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs text-white/90">{p.overlay}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{p.blurb}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="rounded-full px-3 py-1 text-xs"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <ProjectLinks p={p} size="sm" />
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 rounded-full px-8"
          >
            <a
              href="https://github.com/iamabdulali"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              More on GitHub
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}