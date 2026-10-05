import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
    component: ContactPage,
});

function ContactPage() {
    return (
        <section className="mx-auto max-w-3xl px-6 py-20">
            <h1 className="text-4xl font-bold">
                Contact Us
            </h1>

            <p className="mt-4 text-gray-600">
                Have a project in mind? Let's talk.
            </p>
        </section>
    );
}