
import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import {
    ArrowUpRight,
    ArrowRight,
    ExternalLink,
    Layers3,
    Sparkles,
} from "lucide-react";

type ProjectCategory =
    | "All"
    | "Web Development"
    | "Web Applications"
    | "SaaS"
    | "AI Automation";

type Project = {
    title: string;
    description: string;
    category: Exclude<ProjectCategory, "All">;
    image: string;
    technologies: string[];
    url?: string;
    featured?: boolean;
    number: string;
};

const categories: ProjectCategory[] = [
    "All",
    "Web Development",
    "Web Applications",
    "SaaS",
    "AI Automation",
];

const projects: Project[] = [
    {
        number: "01",
        title: "Business Website",
        description:
            "A polished digital presence designed to communicate a brand's value, engage visitors, and generate enquiries.",
        category: "Web Development",
        image: "/images/portfolio/business-website.jpg",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        featured: true,
    },
    {
        number: "02",
        title: "Management Dashboard",
        description:
            "A centralized workspace for managing operational data, monitoring activity, and simplifying everyday tasks.",
        category: "Web Applications",
        image: "/images/portfolio/admin-dashboard.jpg",
        technologies: ["React", "REST API", "Dashboard UI"],
    },
    {
        number: "03",
        title: "SaaS Platform",
        description:
            "A scalable software experience built around user accounts, business workflows, and streamlined management.",
        category: "SaaS",
        image: "/images/portfolio/saas-platform.jpg",
        technologies: ["React", "Node.js", "Database"],
        featured: true,
    },
    {
        number: "04",
        title: "AI Workflow Assistant",
        description:
            "An intelligent workflow concept designed to reduce repetitive tasks and help teams work more efficiently.",
        category: "AI Automation",
        image: "/images/portfolio/ai-automation.jpg",
        technologies: ["AI Integration", "APIs", "Automation"],
    },
    {
        number: "05",
        title: "E-Commerce Experience",
        description:
            "A responsive shopping experience focused on product discovery, usability, and a smooth customer journey.",
        category: "Web Development",
        image: "/images/portfolio/ecommerce.jpg",
        technologies: ["React", "Payments", "Responsive UI"],
    },
    {
        number: "06",
        title: "Client Portal",
        description:
            "A secure portal concept that brings client information, documents, and important activities into one place.",
        category: "Web Applications",
        image: "/images/portfolio/client-portal.jpg",
        technologies: ["TypeScript", "Authentication", "APIs"],
    },
];

export default function PortfolioSection() {
    const [activeCategory, setActiveCategory] =
        useState<ProjectCategory>("All");

    const filteredProjects = useMemo(
        () =>
            activeCategory === "All"
                ? projects
                : projects.filter(
                      (project) => project.category === activeCategory,
                  ),
        [activeCategory],
    );

    return (
        <section
            id="portfolio"
            className="relative overflow-hidden bg-background px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
        >
            <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-primary/[0.06] blur-[120px]" />
            <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-primary/[0.05] blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
                >
                    <div>
                        {/* Eyebrow — same accent-line design */}
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-primary" />

                            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary sm:text-xs">
                                Our Portfolio
                            </span>

                            <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
                        </div>

                        <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-[1.12] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl">
                            Ideas Into Reality.
                            <span className="relative mt-1 block w-fit text-primary">
                                Digital Experiences.
                                <span className="absolute -bottom-2 left-0 h-1 w-1/3 rounded-full bg-primary" />
                            </span>
                        </h2>
                    </div>

                    <div className="lg:pb-1">
                        <p className="text-sm leading-8 text-muted sm:text-base">
                            Explore the types of digital experiences ADEIZA
                            Soft Web Services creates, from responsive
                            websites and mobile applications to custom
                            software, product design, and AI-powered
                            solutions. Every project starts with a problem
                            worth solving.
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                            <span className="h-8 w-1 rounded-full bg-primary" />

                            <p className="text-xs font-medium uppercase tracking-[0.13em] text-foreground/70">
                                Strategy. Creativity. Engineering.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Portfolio heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="mt-14 flex flex-col justify-between gap-3 sm:mt-16 sm:flex-row sm:items-end"
                >
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                            A Look at Our Work
                        </p>

                        <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            Selected Projects
                        </h3>
                    </div>

                    <p className="max-w-md text-sm leading-7 text-muted">
                        Explore projects across our core capabilities and
                        discover what's possible for your business.
                    </p>
                </motion.div>

                {/* Category filters */}
                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-b border-border pb-5">
                    {categories.map((category) => {
                        const isActive = activeCategory === category;

                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                aria-pressed={isActive}
                                className={`relative pb-2 text-xs font-semibold transition-colors duration-200 sm:text-sm ${
                                    isActive
                                        ? "text-primary"
                                        : "text-muted hover:text-primary"
                                }`}
                            >
                                {category}

                                {isActive && (
                                    <motion.span
                                        layoutId="portfolio-active-filter"
                                        className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Project grid */}
                <motion.div
                    layout
                    className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.article
                                key={project.number}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.97 }}
                                transition={{
                                    duration: 0.35,
                                    delay: index * 0.04,
                                }}
                                className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-primary/30"
                            >
                                {/* Project preview */}
                                <div className="relative aspect-[4/3] overflow-hidden bg-[#100b16]">
                                    <img
                                        src={project.image}
                                        alt={`${project.title} preview`}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        onError={(event) => {
                                            event.currentTarget.style.display =
                                                "none";
                                        }}
                                    />

                                    {/* Fallback visual if image is missing */}
                                    <div className="absolute inset-0 -z-0 flex items-center justify-center bg-gradient-to-br from-[#21112e] via-[#3b1b53] to-[#100b16]">
                                        <div className="text-center">
                                            <Layers3
                                                size={42}
                                                strokeWidth={1.2}
                                                className="mx-auto text-white/70"
                                            />
                                            <p className="mt-3 text-xs tracking-[0.2em] text-white/50">
                                                ADEIZA / DIGITAL
                                            </p>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

                                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-md">
                                        {project.category}
                                    </span>

                                    {project.featured && (
                                        <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-primary">
                                            <Sparkles size={11} />
                                            Featured
                                        </span>
                                    )}

                                    <span className="absolute bottom-4 left-4 text-xs font-medium tracking-[0.15em] text-white/70">
                                        PROJECT {project.number}
                                    </span>

                                    {project.url && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`View ${project.title}`}
                                            className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary transition-transform duration-300 hover:scale-110"
                                        >
                                            <ExternalLink size={17} />
                                        </a>
                                    )}
                                </div>

                                {/* Project details */}
                                <div className="p-5 sm:p-6">
                                    <div className="flex items-start justify-between gap-3">
                                        <h3 className="text-lg font-semibold tracking-tight text-foreground">
                                            {project.title}
                                        </h3>

                                        <ArrowUpRight
                                            size={19}
                                            className="shrink-0 text-muted-light transition-colors group-hover:text-primary"
                                        />
                                    </div>

                                    <p className="mt-3 text-sm leading-7 text-muted">
                                        {project.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-md border border-border bg-background px-2.5 py-1.5 text-[10px] font-medium text-muted sm:text-[11px]"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:p-8"
                >
                    <div>
                        <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                            Have a project in mind?
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-muted">
                            Let's turn your next idea into something meaningful.
                        </p>
                    </div>

                    <Link
                        to="/booking"
                        className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-dark"
                    >
                        Start a Project
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}