
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
    ArrowDownRight,
    ArrowRight,
    CheckCircle2,
    Code2,
    MessageSquareText,
    Rocket,
    Search,
    Sparkles,
} from "lucide-react";

const processSteps = [
    {
        number: "01",
        icon: MessageSquareText,
        title: "Discovery & Strategy",
        label: "Understand",
        description:
            "We start by understanding your business, audience, challenges, and goals so we can define the right solution.",
        deliverables: [
            "Project requirements",
            "Goals and priorities",
            "Scope and direction",
        ],
    },
    {
        number: "02",
        icon: Search,
        title: "Planning & Design",
        label: "Plan",
        description:
            "We map out the user experience, plan the architecture, and shape a clear direction before development begins.",
        deliverables: [
            "Project roadmap",
            "Interface concepts",
            "Technical plan",
        ],
    },
    {
        number: "03",
        icon: Code2,
        title: "Development & Testing",
        label: "Build",
        description:
            "We build your solution using modern technologies, integrate the required features, and test it across devices.",
        deliverables: [
            "Working features",
            "API integrations",
            "Quality assurance",
        ],
    },
    {
        number: "04",
        icon: Rocket,
        title: "Launch & Improvement",
        label: "Deliver",
        description:
            "We prepare your solution for launch, help you get started, and identify opportunities for future improvements.",
        deliverables: [
            "Deployment support",
            "Launch preparation",
            "Next-step recommendations",
        ],
    },
];

export default function ProcessSection() {
    return (
        <section
            id="process"
            className="relative overflow-hidden bg-surface px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
        >
            {/* Background accents */}
            <div className="pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-primary/[0.05] blur-[120px]" />
            <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-accent/[0.07] blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary sm:text-sm">
                        <Sparkles size={14} />
                        How We Work
                    </span>

                    <h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl">
                        From first idea to
                        <span className="block text-primary">
                            successful launch.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                        A transparent, collaborative process that turns your
                        business requirements into practical digital solutions
                        with clear direction at every stage.
                    </p>
                </motion.div>

                {/* Process timeline */}
                <div className="relative mt-16 lg:mt-20">
                    {/* Desktop connecting line */}
                    <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-border lg:block">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.2,
                                ease: "easeInOut",
                            }}
                            className="h-full origin-left bg-primary/50"
                        />
                    </div>

                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.article
                                    key={step.number}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{
                                        once: true,
                                        amount: 0.15,
                                    }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.12,
                                        ease: "easeOut",
                                    }}
                                    className="group relative"
                                >
                                    {/* Step marker */}
                                    <div className="relative z-10 flex items-center justify-between lg:justify-start">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-surface text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                                            <Icon
                                                size={23}
                                                strokeWidth={1.7}
                                            />
                                        </div>

                                        <span className="font-mono text-sm tracking-wider text-muted-light lg:hidden">
                                            STEP {step.number}
                                        </span>

                                        <span className="hidden pl-4 font-mono text-xs tracking-wider text-muted-light lg:inline">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Step content */}
                                    <div className="mt-6">
                                        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                                            {step.label}
                                        </span>

                                        <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                                            {step.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-muted">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Deliverables */}
                                    <div className="mt-5 border-t border-border pt-5">
                                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground/70">
                                            Key outcomes
                                        </p>

                                        <ul className="space-y-2.5">
                                            {step.deliverables.map(
                                                (deliverable) => (
                                                    <li
                                                        key={deliverable}
                                                        className="flex items-start gap-2.5 text-sm text-muted"
                                                    >
                                                        <CheckCircle2
                                                            size={15}
                                                            className="mt-0.5 shrink-0 text-primary/70"
                                                        />
                                                        <span>
                                                            {deliverable}
                                                        </span>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>

                                    {/* Mobile-friendly directional cue */}
                                    {index < processSteps.length - 1 && (
                                        <div className="absolute -bottom-7 right-0 text-primary/40 sm:hidden">
                                            <ArrowDownRight size={18} />
                                        </div>
                                    )}
                                </motion.article>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55 }}
                    className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-background p-6 sm:p-8 lg:mt-20 lg:flex-row lg:items-center"
                >
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Sparkles size={22} />
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                                Have an idea? Let's make it happen.
                            </h3>

                            <p className="mt-2 max-w-xl text-sm leading-7 text-muted">
                                Tell us what you're planning, and we'll help
                                you identify the right next steps.
                            </p>
                        </div>
                    </div>

                    <Link
                        to="/booking"
                        className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-dark"
                    >
                        Start Your Project
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