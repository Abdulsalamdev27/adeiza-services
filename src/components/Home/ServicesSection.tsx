
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
    ArrowRight,
    Bot,
    Code2,
    Palette,
    Smartphone,
    Database,
    Workflow,
    Sparkles,
    CheckCircle2,
} from "lucide-react";

const services = [
    {
        number: "01",
        icon: Code2,
        title: "Web Development",
        description:
            "Modern, responsive websites and powerful web applications tailored to your business needs, goals, and customers.",
        tags: ["Business Websites", "Web Applications"],
    },
    {
        number: "02",
        icon: Smartphone,
        title: "Mobile App Development",
        description:
            "Seamless, high-performance mobile applications that connect businesses with customers across Android and iOS.",
        tags: ["Android", "iOS Applications"],
    },
    {
        number: "03",
        icon: Palette,
        title: "UI/UX Design",
        description:
            "Intuitive interfaces and user-centered experiences that make digital products engaging, accessible, and easy to use.",
        tags: ["Product Design", "Prototyping"],
    },
    {
        number: "04",
        icon: Bot,
        title: "AI & Business Automation",
        description:
            "Intelligent AI solutions, AI agents, chatbots, and automated workflows that improve productivity and reduce repetitive tasks.",
        tags: ["AI Agents", "Workflow Automation"],
        featured: true,
    },
    {
        number: "05",
        icon: Workflow,
        title: "Custom Software Development",
        description:
            "Scalable software systems, business dashboards, SaaS platforms, and management solutions built around your unique processes.",
        tags: ["SaaS Platforms", "Business Systems"],
    },
    {
        number: "06",
        icon: Database,
        title: "API Integration & Backend Engineering",
        description:
            "Secure backend systems, database architecture, payment integrations, and third-party services that power reliable digital products.",
        tags: ["REST APIs", "Database & Payments"],
    },
];

const approachPoints = [
    "Strategic thinking aligned with your business goals",
    "Creative design focused on real user needs",
    "Modern engineering built for reliability and scale",
    "Intelligent solutions that deliver practical value",
];

export default function ServicesSection() {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-background px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
        >
            {/* Background accents */}
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
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-primary" />

                            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary sm:text-xs">
                                What We Do
                            </span>

                            <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
                        </div>

                        <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-[1.12] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl">
                            We Turn Ideas Into
                            <span className="relative mt-1 block w-fit text-primary">
                                Powerful Digital Experiences
                                <span className="absolute -bottom-2 left-0 h-1 w-1/3 rounded-full bg-primary" />
                            </span>
                        </h2>
                    </div>

                    <div className="lg:pb-1">
                        <p className="text-sm leading-8 text-muted sm:text-base">
                            At ADEIZA Soft Web Services, we help businesses
                            transform ideas into innovative digital solutions.
                            From designing intuitive user experiences to
                            building scalable web and mobile applications,
                            we combine creativity, engineering, and artificial
                            intelligence to solve real-world problems,
                            streamline operations, and accelerate business
                            growth.
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                            <span className="h-8 w-1 rounded-full bg-primary" />

                            <p className="text-xs font-medium uppercase tracking-[0.13em] text-foreground/70">
                                Design. Engineering. Intelligence.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Our expertise heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="mt-14 flex flex-col justify-between gap-3 sm:mt-16 sm:flex-row sm:items-end"
                >
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                            What We Bring to the Table
                        </p>

                        <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            Our Expertise
                        </h3>
                    </div>

                    <p className="max-w-md text-sm leading-7 text-muted">
                        The strategy, design, engineering, and intelligence
                        needed to take your ideas from concept to reality.
                    </p>
                </motion.div>

                {/* Services grid */}
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.article
                                key={service.number}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{
                                    once: true,
                                    amount: 0.1,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: (index % 3) * 0.08,
                                    ease: "easeOut",
                                }}
                                className={`group relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 sm:p-7 ${
                                    service.featured
                                        ? "border-primary/25 bg-primary/[0.06]"
                                        : "border-border bg-surface hover:border-primary/35 hover:bg-secondary/30"
                                }`}
                            >
                                {/* Service number and icon */}
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-xs tracking-wider text-muted-light">
                                        {service.number}
                                    </span>

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/[0.09] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                                        <Icon
                                            size={22}
                                            strokeWidth={1.8}
                                        />
                                    </div>
                                </div>

                                {/* Service details */}
                                <h4 className="mt-6 text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl">
                                    {service.title}
                                </h4>

                                <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                                    {service.description}
                                </p>

                                {/* Service tags */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-md border border-primary/[0.12] bg-secondary/60 px-2.5 py-1.5 text-[10px] font-medium text-primary-dark sm:text-[11px]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Service CTA */}
                                <Link
                                    to="/booking"
                                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors duration-300 hover:text-primary-light"
                                >
                                    Discuss your project

                                    <ArrowRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </Link>

                                {/* Featured badge */}
                                {service.featured && (
                                    <span className="absolute right-4 top-4 rounded-full bg-primary px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-white shadow-sm shadow-primary/20">
                                        Featured
                                    </span>
                                )}
                            </motion.article>
                        );
                    })}
                </div>

                {/* Our approach */}
                <div className="mt-20 grid gap-10 border-t border-border pt-12 sm:mt-24 sm:pt-16 lg:grid-cols-2 lg:items-center lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-primary" />

                            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary sm:text-xs">
                                Our approach
                            </span>

                            <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
                        </div>


                        <h3 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.04em] text-foreground sm:text-4xl">
                            Technology with purpose.
                            <span className="block text-primary">
                                Solutions built for growth.
                            </span>
                        </h3>

                        <p className="mt-5 text-sm leading-8 text-muted sm:text-base">
                            We combine strategic thinking, creative design,
                            and modern technology to deliver digital products
                            that work seamlessly, scale confidently, and
                            create measurable value for your business.
                        </p>

                        <Link
                            to="/booking"
                            className="group mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-dark"
                        >
                            Let's Build Together

                            <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </motion.div>

                    {/* Approach principles */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                        }}
                        className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
                    >
                        <div className="flex items-center gap-3 border-b border-border pb-5">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                                <Sparkles size={21} />
                            </div>

                            <div>
                                <h4 className="font-semibold text-foreground">
                                    How We Create Value
                                </h4>

                                <p className="mt-1 text-xs text-muted">
                                    Our guiding principles
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 space-y-5">
                            {approachPoints.map((point, index) => (
                                <motion.div
                                    key={point}
                                    initial={{ opacity: 0, x: 12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.08,
                                    }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2
                                        size={19}
                                        className="mt-0.5 shrink-0 text-primary"
                                    />

                                    <p className="text-sm leading-6 text-foreground/80">
                                        {point}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mt-14 flex flex-col items-start justify-between gap-5 rounded-2xl border border-primary/10 bg-secondary/40 p-6 sm:flex-row sm:items-center sm:p-8"
                >
                    <div>
                        <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                            Have an idea worth building?
                        </h3>

                        <p className="mt-2 max-w-xl text-sm leading-7 text-muted">
                            Let's discuss your goals and find the right
                            digital solution for your business.
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