import { createFileRoute } from "@tanstack/react-router";

import { BlogPage } from "../pages/blog/BlogPage";
import { createSEO } from "../lib/seo";
import { PageLoader } from "../components/ui/PageLoader";

export const Route = createFileRoute("/blog")({
    head: () =>
        createSEO({
            title: "Blog — ADEIZA",
            description:
                "Explore insights, ideas, and practical articles about web development, UI/UX design, SaaS, technology, and digital growth.",
            path: "/blog",
        }),

    pendingComponent: PageLoader,

    component: BlogPage,
});