
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
    ArrowRight,
    ArrowUpRight,
    Check,
    Code2,
    Lightbulb,
    Rocket,
    Sparkles,
} from "lucide-react";

const highlights = [
    "Business-focused digital solutions",
    "Modern, scalable application architecture",
    "AI-powered workflows and automation",
    "Responsive interfaces and user-centered design",
];

const principles = [
    {
        icon: Lightbulb,
        title: "Think strategically",
        description:
            "We understand your goals first, then identify the right technology to solve your business challenges.",
    },
    {
        icon: Code2,
        title: "Build with purpose",
        description:
            "We create reliable, maintainable digital products designed around real users and business needs.",
    },
    {
        icon: Rocket,
        title: "Grow with confidence",
        description:
            "We help businesses streamline operations, improve experiences, and prepare for what's next.",
    },
];

export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-surface px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
        >
            {/* Background accents */}
            <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/[0.06] blur-[120px]" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent/[0.08] blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">
                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                    {/* Left: Visual panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative mx-auto w-full max-w-xl"
                    >
                        <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-[#100b16] p-6 sm:min-h-[490px] sm:p-9">
                            {/* Decorative glow */}
                            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/40 blur-[90px]" />
                            <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-accent/15 blur-[90px]" />

                            <div className="relative flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#d9a441]" />
                                    <span className="text-xs font-medium tracking-[0.18em] text-white/60">
                                        OUR APPROACH
                                    </span>
                                </div>

                                <Sparkles
                                    size={20}
                                    className="text-accent"
                                />
                            </div>

                            <div className="relative mt-12 sm:mt-16">
                                <p className="text-sm font-medium text-white/50">
                                    Ideas are only the beginning.
                                </p>

                                <h3 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                                    We turn complex challenges into
                                    <span className="text-[#c49ae2]">
                                        {" "}digital opportunities.
                                    </span>
                                </h3>

                                <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
                                    Connecting thoughtful design, dependable
                                    engineering, and intelligent automation
                                    to create solutions that make a difference.
                                </p>
                            </div>

                            {/* Capability tags */}
                            <div className="relative mt-9 flex flex-wrap gap-2.5">
                                {[
                                    "Web & SaaS",
                                    "AI Automation",
                                    "Product Design",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-xs text-white/75"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            {/* Floating solution card */}
                            <motion.div
                                animate={{ y: [0, -7, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="relative mt-10 ml-auto max-w-xs rounded-2xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur-xl sm:mt-8"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                                        <Sparkles size={21} />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-white">
                                            Built around your goals
                                        </p>
                                        <p className="mt-1 text-xs text-white/50">
                                            Strategy meets technology
                                        </p>
                                    </div>

                                    <ArrowUpRight
                                        size={18}
                                        className="ml-auto text-accent"
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative outline */}
                        <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-3xl border border-primary/20" />
                    </motion.div>

                    {/* Right: About content */}
                    <motion.div
                        initial={{ opacity: 0, x: 28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.1,
                            ease: "easeOut",
                        }}
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary sm:text-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            About ADEIZA
                        </span>

                        <h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl">
                            More than technology.
                            <span className="mt-1 block text-primary">
                                A partner in your growth.
                            </span>
                        </h2>

                        <p className="mt-6 text-sm leading-8 text-muted sm:text-base">
                            ADEIZA is a digital solutions agency focused on
                            helping businesses turn ideas into useful,
                            high-quality digital products. We bring together
                            development, design, and intelligent automation
                            to solve problems and create better ways of working.
                        </p>

                        <p className="mt-4 text-sm leading-8 text-muted sm:text-base">
                            From business websites and custom web applications
                            to SaaS platforms and AI-powered workflows, our
                            approach combines practical thinking with modern
                            technology to deliver solutions built around your
                            needs.
                        </p>

                        <div className="mt-7 space-y-4">
                            {highlights.map((highlight, index) => (
                                <motion.div
                                    key={highlight}
                                    initial={{ opacity: 0, x: 12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.08,
                                    }}
                                    className="flex items-start gap-3"
                                >
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <Check size={13} strokeWidth={2.5} />
                                    </span>

                                    <span className="text-sm leading-6 text-foreground/80">
                                        {highlight}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-9 flex flex-wrap items-center gap-5">
                            <Link
                                to="/services"
                                className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-dark"
                            >
                                Explore Our Services
                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                            >
                                Talk to our team
                                <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Principles */}
                <div className="mt-20 border-t border-border pt-12 sm:mt-24 sm:pt-16">
                    <div className="mb-9 max-w-2xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                            What guides us
                        </p>
                        <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            Our approach to better digital solutions.
                        </h3>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3 md:gap-10">
                        {principles.map((principle, index) => {
                            const Icon = principle.icon;

                            return (
                                <motion.article
                                    key={principle.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="group"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/15 bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                                        <Icon size={22} strokeWidth={1.8} />
                                    </div>

                                    <h4 className="mt-5 text-lg font-semibold text-foreground">
                                        {principle.title}
                                    </h4>

                                    <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                                        {principle.description}
                                    </p>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}