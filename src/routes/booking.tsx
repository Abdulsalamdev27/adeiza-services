import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/booking")({
    component: BookingPage,
});

function BookingPage() {
    return (
        <section className="mx-auto max-w-3xl px-6 py-20">
            <h1 className="text-4xl font-bold">
                Book a Consultation
            </h1>

            <p className="mt-4 text-gray-600">
                Choose a service and schedule a consultation
                with our team.
            </p>
        </section>
    );
}