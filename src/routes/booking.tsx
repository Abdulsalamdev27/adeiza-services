import { createFileRoute } from "@tanstack/react-router";

import { BookingPage } from "../pages/booking/BookingPage";
import { createSEO } from "../lib/seo";
import { PageLoader } from "../components/ui/PageLoader";

export const Route = createFileRoute("/booking")({
    head: () =>
        createSEO({
            title: "Book a Call — ADEIZA",
            description:
                "Book a consultation with ADEIZA to discuss your website, web application, SaaS platform, e-commerce solution, or digital product.",
            path: "/booking",
        }),

    pendingComponent: PageLoader,

    component: BookingPage,
});