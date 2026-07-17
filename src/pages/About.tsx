import {
  Coffee,
  FileText,
  FolderGit2,
  Heart,
  Mail,
  Rocket,
  Smile,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { self } from "@/assets";

const stats = [
  { icon: Rocket, value: "5+", label: "Years building" },
  { icon: FolderGit2, value: "40+", label: "Projects shipped" },
  { icon: Smile, value: "∞", label: "Ideas brewing" },
];

export default function About() {
  return (
    <div id="about" className="w-full bg-white text-neutral-950 min-h-screen dark:bg-neutral-950 dark:text-neutral-50">

      {/* Hero / About */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 p-6 md:flex-row md:p-12 min-h-screen">
        {/* Decorative floating icons */}
        <Star className="absolute left-8 top-36 size-6 rotate-12 text-neutral-900/30 dark:text-neutral-100/30" />
        <Heart className="absolute right-16 top-36 size-5 -rotate-12 text-neutral-900/25 dark:text-neutral-100/25" />

        {/* Portrait */}
        <div className="relative w-full shrink-0 md:w-[42%]">
          <div className="group relative mx-auto aspect-3/4 w-full max-w-sm overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-xl dark:border-neutral-800 dark:bg-neutral-800">
            <img
              src={self}
              alt="Developer portrait"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-4 left-6 flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
            <span className="size-2 rounded-full bg-neutral-900 dark:bg-neutral-100" />
            <span className="text-sm font-semibold">Available for work</span>
          </div>
          <div className="absolute -right-2 -top-3 rotate-6 rounded-full border border-neutral-200 bg-neutral-900 px-4 py-2 text-sm font-bold text-neutral-50 shadow-lg dark:border-neutral-700 dark:bg-neutral-100 dark:text-neutral-900">
            Hi there! 👋
          </div>
        </div>

        {/* Text column */}
        <div className="flex w-full flex-col gap-6 md:w-[58%]">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-semibold text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
              <Coffee className="size-4" />
              About Me
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            I turn coffee and curiosity into{" "}
            <span className="text-neutral-900 dark:text-neutral-100">delightful web things</span>.
          </h1>

          <div className="flex flex-col gap-4 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
            <p>
              Hey, I'm Abdul Ali, a developer who genuinely lights up when a blank
              screen becomes something people love to use. I've spent the last
              few years crafting interfaces on the web, obsessing over the tiny
              details that make a product feel{" "}
              <span className="font-semibold text-neutral-950 dark:text-neutral-50">alive</span>.
            </p>
            <p>
              I'm at my happiest building playful, human products: things with
              personality, smooth animations, and just the right amount of
              whimsy. Give me a gnarly UI puzzle or an ambitious idea and I'll
              happily disappear into it for hours.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            {stats.map(({ icon: Icon, value, label }) => (
              <Card key={label} className="p-4">
                <CardContent className="flex flex-col gap-1 p-0">
                  <Icon className="size-5 text-neutral-900 dark:text-neutral-100" />
                  <span className="text-2xl font-extrabold">{value}</span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">{label}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            } className="gap-2 bg-neutral-900 cursor-pointer text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900">
              <Mail className="size-4" />
              Let's chat
            </Button>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Resume-Abdul-Ali.pdf";
                link.download = "Resume-Abdul-Ali.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <FileText className="size-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}