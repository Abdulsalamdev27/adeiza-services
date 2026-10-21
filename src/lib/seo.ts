export interface SEOConfig {
    title: string;
    description: string;
    path: string;
}

const siteUrl = "https://adeiza.com";

export function createSEO({
    title,
    description,
    path,
}: SEOConfig) {
    const url = `${siteUrl}${path}`;

    return {
        meta: [
            {
                title,
            },
            {
                name: "description",
                content: description,
            },
            {
                name: "robots",
                content: "index, follow",
            },

            // Open Graph
            {
                property: "og:title",
                content: title,
            },
            {
                property: "og:description",
                content: description,
            },
            {
                property: "og:type",
                content: "website",
            },
            {
                property: "og:url",
                content: url,
            },
            {
                property: "og:site_name",
                content: "ADEIZA",
            },

            // Twitter/X
            {
                name: "twitter:card",
                content: "summary_large_image",
            },
            {
                name: "twitter:title",
                content: title,
            },
            {
                name: "twitter:description",
                content: description,
            },
        ],

        links: [
            {
                rel: "canonical",
                href: url,
            },
        ],
    };
}