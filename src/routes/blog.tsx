import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
    component: BlogPage,
});

function BlogPage() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20">
            <h1 className="text-4xl font-bold">
                Blog
            </h1>

            <p className="mt-4 text-gray-600">
                Insights, ideas, and updates from our agency.
            </p>
        </section>
    );
}