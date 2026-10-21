
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
    ArrowRight,
    ArrowUpRight,
    Quote,
    MessageSquareQuote,
    Sparkles,
} from "lucide-react";

const testimonials = [
    {
        number: "01",
        quote:
            "ADEIZA helped us turn our initial idea into a clear digital experience. The focus on usability, design, and our business goals made the development process easier to navigate.",
        name: "Client Name",
        role: "Founder, Company Name",
        initials: "CN",
        project: "Web Development",
        featured: false,
    },
    {
        number: "02",
        quote:
            "The team approached our project with a strong understanding of how design and technology work together. The result reflects the importance of planning, communication, and thoughtful execution.",
        name: "Client Name",
        role: "Business Owner, Company Name",
        initials: "CN",
        project: "Custom Software",
        featured: true,
    },
    {
        number: "03",
        quote:
            "We wanted a more effective way to manage our digital processes. ADEIZA's focus on practical solutions and modern technology gave us a solid direction for the next stage of our business.",
        name: "Client Name",
        role: "Project Lead, Company Name",
        initials: "CN",
        project: "Digital Solutions",
        featured: false,
    },
];

export default function TestimonialsSection() {
    return (
        <section
            id="testimonials"
            className="relative overflow-hidden bg-background px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
        >
            {/* Background accents — matching ADEIZA's other sections */}
            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/[0.06] blur-[120px]" />

            <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-primary/[0.05] blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Section introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
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
                                Client Experiences
                            </span>

                            <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
                        </div>

                        <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-[1.12] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl">
                            Good Work.
                            <span className="relative mt-1 block w-fit text-primary">
                                Meaningful Impact.
                                <span className="absolute -bottom-2 left-0 h-1 w-1/3 rounded-full bg-primary" />
                            </span>
                        </h2>
                    </div>

                    <div className="lg:pb-1">
                        <p className="text-sm leading-8 text-muted sm:text-base">
                            Great digital products begin with collaboration.
                            Our goal is to understand each client's vision
                            and turn it into thoughtful digital solutions
                            designed around real business needs.
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                            <span className="h-8 w-1 rounded-full bg-primary" />

                            <p className="text-xs font-medium uppercase tracking-[0.13em] text-foreground/70">
                                Collaboration. Craft. Results.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Testimonials heading */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="mt-14 flex flex-col justify-between gap-3 sm:mt-16 sm:flex-row sm:items-end"
                >
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                            Words From Our Clients
                        </p>

                        <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            Experiences That Matter
                        </h3>
                    </div>

                    <p className="max-w-md text-sm leading-7 text-muted">
                        Every project is an opportunity to build trust,
                        solve problems, and create something valuable.
                    </p>
                </motion.div>

                {/* Testimonial cards */}
                <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.article
                            key={testimonial.number}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                            className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 sm:p-7 ${
                                testimonial.featured
                                    ? "border-primary/25 bg-primary/[0.06]"
                                    : "border-border bg-surface hover:border-primary/35 hover:bg-secondary/30"
                            }`}
                        >
                            {/* Top row */}
                            <div className="flex items-center justify-between">

                                <Quote
                                    size={30}
                                    strokeWidth={1.5}
                                    className={`transition-transform duration-300 group-hover:scale-110 ${
                                        testimonial.featured
                                            ? "text-primary"
                                            : "text-primary/45"
                                    }`}
                                />
                            </div>

                            {/* Testimonial text */}
                            <blockquote className="mt-7 flex-1">
                                <p className="text-base leading-8 text-foreground/85 sm:text-[17px]">
                                    “{testimonial.quote}”
                                </p>
                            </blockquote>

                            {/* Project category */}
                            <div className="mt-6 border-t border-border pt-4">
                                <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary sm:text-[11px]">
                                    <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
                                    {testimonial.project}
                                </span>
                            </div>

                            {/* Client information */}
                            <div className="mt-5 flex items-center gap-3">
                                <div
                                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                                        testimonial.featured
                                            ? "bg-primary text-white"
                                            : "bg-secondary text-primary"
                                    }`}
                                >
                                    {testimonial.initials}
                                </div>

                                <div className="min-w-0">
                                    <h4 className="text-sm font-semibold text-foreground">
                                        {testimonial.name}
                                    </h4>

                                    <p className="mt-1 text-xs leading-5 text-muted">
                                        {testimonial.role}
                                    </p>
                                </div>

                                <ArrowUpRight
                                    size={17}
                                    className="ml-auto shrink-0 text-muted-light transition-colors duration-300 group-hover:text-primary"
                                />
                            </div>

                            {/* Featured card accent */}
                            {testimonial.featured && (
                                <span className="absolute bottom-0 left-0 h-1 w-full bg-primary" />
                            )}
                        </motion.article>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55 }}
                    className="mt-14 flex flex-col items-start justify-between gap-5 rounded-2xl border border-primary/10 bg-secondary/40 p-6 sm:flex-row sm:items-center sm:p-8"
                >
                    <div>
                        <div className="flex items-center gap-2">
                            <MessageSquareQuote
                                size={17}
                                className="text-primary"
                            />

                            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                                Your Story Could Be Next
                            </span>
                        </div>

                        <h3 className="mt-3 text-lg font-semibold text-foreground sm:text-xl">
                            Have a vision worth bringing to life?
                        </h3>

                        <p className="mt-2 max-w-xl text-sm leading-7 text-muted">
                            Let's collaborate on a digital solution that
                            moves your business forward.
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

                {/* Small closing note */}
                <p className="mt-6 text-center text-[10px] tracking-wide text-muted-light sm:text-xs">
                    ADEIZA SOFT WEB SERVICES · Design. Engineering. Intelligence.
                </p>
            </div>
        </section>
    );
}
