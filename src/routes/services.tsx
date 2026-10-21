import { createFileRoute } from "@tanstack/react-router";

import { ServicesPage } from "../pages/services/ServicesPage";
import { createSEO } from "../lib/seo";
import { PageLoader } from "../components/ui/PageLoader";

export const Route = createFileRoute("/services")({
    head: () =>
        createSEO({
            title: "Digital Services — ADEIZA",
            description:
                "Explore ADEIZA's digital services including web development, UI/UX design, SaaS development, e-commerce solutions, web applications, and digital strategy.",
            path: "/services",
        }),

    pendingComponent: PageLoader,

    component: ServicesPage,
});