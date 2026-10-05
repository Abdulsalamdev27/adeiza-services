import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
    component: PortfolioPage,
});

function PortfolioPage() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20">
            <h1 className="text-4xl font-bold">
                Our Work
            </h1>

            <p className="mt-4 text-gray-600">
                Explore some of our recent projects.
            </p>
        </section>
    );
}