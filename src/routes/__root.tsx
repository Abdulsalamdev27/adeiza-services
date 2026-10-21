import { createRootRoute } from "@tanstack/react-router";

import { PublicLayout } from "../components/layout/PublicLayout";

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                title: "ADEIZA — Digital Agency",
            },
            {
                name: "description",
                content:
                    "ADEIZA is a digital agency building modern websites, web applications, SaaS platforms, and digital experiences for ambitious businesses.",
            },
            {
                name: "viewport",
                content:
                    "width=device-width, initial-scale=1",
            },
            {
                name: "theme-color",
                content: "#662D91",
            },
            {
                name: "robots",
                content: "index, follow",
            },

            // Open Graph
            {
                property: "og:title",
                content: "ADEIZA — Digital Agency",
            },
            {
                property: "og:description",
                content:
                    "ADEIZA builds modern websites, web applications, SaaS platforms, and digital experiences for ambitious businesses.",
            },
            {
                property: "og:type",
                content: "website",
            },
            {
                property: "og:site_name",
                content: "ADEIZA",
            },

            // Twitter / X
            {
                name: "twitter:card",
                content: "summary_large_image",
            },
            {
                name: "twitter:title",
                content: "ADEIZA — Digital Agency",
            },
            {
                name: "twitter:description",
                content:
                    "ADEIZA builds modern websites, web applications, SaaS platforms, and digital experiences for ambitious businesses.",
            },
        ],

        links: [
            {
                rel: "icon",
                type: "image/svg+xml",
                href: "/favicon.svg",
            },
        ],
    }),

    component: PublicLayout,
});