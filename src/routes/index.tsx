import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "../pages/home/HomePage";
import { createSEO } from "../lib/seo";

export const Route = createFileRoute("/")({
    head: () =>
        createSEO({
            title: "ADEIZA — Digital Agency",
            description:
                "ADEIZA is a digital agency building modern websites, web applications, SaaS platforms, and digital experiences for ambitious businesses.",
            path: "/",
        }),

    component: HomePage,
});