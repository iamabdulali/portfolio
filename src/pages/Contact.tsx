import { useRef, useState } from "react";
import {
    ArrowUpRight,
    Download,
    FileText,
    Hand,
    Loader2,
    Mail,
    Send,
} from "lucide-react";
import {
    SiGithub,
    SiInstagram,
    SiFacebook,
    SiFiverr,
} from "@icons-pack/react-simple-icons";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Status } from "@/types";

const socials = [
    { name: "GitHub", handle: "@iamabdulali", icon: SiGithub, href: "https://github.com/iamabdulali" },
    { name: "Instagram", handle: "@iamabdulali", icon: SiInstagram, href: "https://www.instagram.com/iamabdulali" },
    { name: "Fiverr", handle: "@abdulalli", icon: SiFiverr, href: "https://www.fiverr.com/abdulalli" },
    { name: "Facebook", handle: "/iamabdulali", icon: SiFacebook, href: "https://www.facebook.com/ali.sweet.5872" },
];

const CONTACT_EMAIL = "iamabdulali@gmail.com";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<Status>("idle");

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus("sending");
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
            );
            setStatus("success");
            formRef.current.reset();
        } catch (err) {
            console.error("Failed to send email:", err);
            setStatus("error");
        }
    };

    return (
        <div
            id="contact"
            className="w-full scroll-mt-16 bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50"
        >
            <main className="px-6 py-12 md:p-12">
                {/* Heading */}
                <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1 text-xs font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
                        <Hand className="size-4" />
                        Let's connect
                    </span>
                    <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Say hello, I'd love to hear from you
                    </h1>
                    <p className="max-w-xl text-base text-neutral-500 dark:text-neutral-400">
                        Have a project in mind, a question, or just want to chat? Drop me a
                        message below or reach out directly. I'm always happy to talk.
                    </p>
                </div>

                {/* Two-column grid */}
                <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
                    {/* Message form */}
                    <Card className="gap-6 p-8">
                        <CardHeader className="gap-2 p-0">
                            <CardTitle className="text-xl">Send a message</CardTitle>
                            <CardDescription>
                                Fill out the form and I'll get back within 24 hours.
                            </CardDescription>
                        </CardHeader>

                        <form ref={formRef} onSubmit={sendEmail}>
                            <CardContent className="p-0">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell me about your project..."
                                            className="min-h-32"
                                            required
                                        />
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="flex-col items-start gap-4 border-none px-0">
                                <div className="flex flex-wrap gap-4">
                                    <Button
                                        type="submit"
                                        disabled={status === "sending"}
                                        className="gap-2 bg-neutral-900 text-neutral-50 disabled:opacity-60 dark:bg-neutral-100 dark:text-neutral-900"
                                    >
                                        {status === "sending" ? (
                                            <>
                                                <Loader2 className="size-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="size-4" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                    >
                                        <a className="flex items-center gap-2" href={`mailto:${CONTACT_EMAIL}`}>
                                            <Mail className="size-4" />
                                            Email me directly
                                        </a>
                                    </Button>
                                </div>

                                {status === "success" && (
                                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                        ✓ Thanks! Your message has been sent — I'll get back to you soon.
                                    </p>
                                )}
                                {status === "error" && (
                                    <p className="text-sm font-medium text-red-600 dark:text-red-400">
                                        ✕ Something went wrong. Please try again or email me directly.
                                    </p>
                                )}
                            </CardFooter>
                        </form>
                    </Card>

                    {/* Right column */}
                    <div className="flex flex-col gap-8">
                        <Card className="gap-6 p-8">
                            <CardHeader className="gap-2 p-0">
                                <CardTitle className="text-xl">Find me online</CardTitle>
                                <CardDescription>
                                    Connect with me on your favorite platform.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="flex flex-col gap-4">
                                    {socials.map(({ name, handle, icon: Icon, href }) => (
                                        <a
                                            key={name}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-4 rounded-xl border border-neutral-200 p-4 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
                                        >
                                            <span className="flex size-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900 transition-transform duration-200 group-hover:scale-105 dark:bg-neutral-800 dark:text-neutral-100">
                                                <Icon className="size-5" />
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium">{name}</span>
                                                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                                                    {handle}
                                                </span>
                                            </div>
                                            <ArrowUpRight className="ml-auto size-4 text-neutral-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-neutral-400" />
                                        </a>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="gap-4 bg-neutral-900 p-8 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900">
                            <CardContent className="flex flex-col items-center gap-4 p-0 text-center">
                                <span className="flex size-12 items-center justify-center rounded-full bg-neutral-50/10 dark:bg-neutral-900/10">
                                    <FileText className="size-6" />
                                </span>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-lg font-semibold">
                                        Want the full story?
                                    </h3>
                                    <p className="text-sm text-neutral-50/70 dark:text-neutral-900/70">
                                        Grab my resume for experience, skills, and more.
                                    </p>
                                </div>
                                <Button
                                    onClick={() => {
                                        const link = document.createElement("a");
                                        link.href = "/Resume-Abdul-Ali.pdf";
                                        link.download = "Resume-Abdul-Ali.pdf";
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                    className="cursor-pointer gap-2 rounded-xl bg-neutral-50 px-6 text-neutral-900 shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-50 dark:hover:bg-neutral-800"
                                >
                                    <Download className="size-4" />
                                    Download Resume
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Footer note */}
                <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center gap-2 text-center">
                    <span className="flex size-14 items-center justify-center rounded-full bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
                        <Hand className="size-7" />
                    </span>
                    <p className="text-lg font-semibold">
                        Thanks for stopping by talk soon!
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        Made with care by Abdul · 2026
                    </p>
                </div>
            </main>
        </div>
    );
}