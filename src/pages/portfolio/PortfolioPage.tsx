import { lazy, Suspense } from "react";
import { motion } from "motion/react";

import { LoadingSpinner } from "../../components/ui/LoadingSpinner";

const PortfolioGrid = lazy(
    () => import("./PortfolioGrid").then((module) => ({
        default: module.PortfolioGrid,
    }))
);

export function PortfolioPage() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            {/* Header */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                }}
                className="max-w-3xl"
            >
                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                    Selected Work
                </p>

                <h1 className="mt-4 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                    Our Work
                </h1>

                <p className="mt-5 text-lg leading-8 text-muted">
                    Explore some of the digital products, websites, and
                    applications we've built.
                </p>
            </motion.div>

            {/* Portfolio */}
            <div className="mt-16">
                <Suspense fallback={<LoadingSpinner />}>
                    <PortfolioGrid />
                </Suspense>
            </div>
        </section>
    );
}