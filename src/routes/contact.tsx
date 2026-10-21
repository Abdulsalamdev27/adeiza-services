import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "../pages/contact/ContactPage";
import { createSEO } from "../lib/seo";
import { PageLoader } from "../components/ui/PageLoader";

export const Route = createFileRoute("/contact")({
    head: () =>
        createSEO({
            title: "Contact ADEIZA — Let's Work Together",
            description:
                "Get in touch with ADEIZA to discuss your website, web application, SaaS platform, e-commerce project, or digital solution.",
            path: "/contact",
        }),

    pendingComponent: PageLoader,

    component: ContactPage,
});