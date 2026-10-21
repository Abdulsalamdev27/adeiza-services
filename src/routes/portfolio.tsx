import { createFileRoute } from "@tanstack/react-router";

import { PortfolioPage } from "../pages/portfolio/PortfolioPage";
import { createSEO } from "../lib/seo";
import { PageLoader } from "../components/ui/PageLoader";

export const Route = createFileRoute("/portfolio")({
    head: () =>
        createSEO({
            title: "Our Work — ADEIZA",
            description:
                "Explore selected websites, web applications, SaaS platforms, e-commerce solutions, and digital products designed and built by ADEIZA.",
            path: "/portfolio",
        }),

    pendingComponent: PageLoader,

    component: PortfolioPage,
});