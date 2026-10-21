import { motion } from "motion/react";

const projects = [
    {
        title: "E-Commerce Platform",
        category: "Web Development",
        description:
            "A modern e-commerce platform with product management, payments, and responsive customer experiences.",
    },
    {
        title: "SaaS Dashboard",
        category: "SaaS Development",
        description:
            "A scalable dashboard designed for managing business operations, users, analytics, and workflows.",
    },
    {
        title: "Business Website",
        category: "Web Design",
        description:
            "A modern corporate website focused on strong branding, performance, and conversion.",
    },
];

export function PortfolioGrid() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <motion.article
                    key={project.title}
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                    }}
                    className="group overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
                >
                    {/* Project Image Placeholder */}
                    <div className="flex aspect-[16/10] items-center justify-center bg-secondary">
                        <span className="text-sm font-medium text-primary">
                            {project.category}
                        </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                            {project.category}
                        </p>

                        <h2 className="mt-3 text-xl font-semibold text-foreground">
                            {project.title}
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-muted">
                            {project.description}
                        </p>
                    </div>
                </motion.article>
            ))}
        </div>
    );
}