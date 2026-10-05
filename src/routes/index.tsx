import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: HomePage,
});

function HomePage() {
    return (
        <section className="flex min-h-[80vh] items-center justify-center">
            <div className="text-center">
                <p className="mb-4 text-sm font-medium uppercase tracking-wider">
                    Digital Agency
                </p>

                <h1 className="text-5xl font-bold">
                    We build digital
                    <br />
                    experiences.
                </h1>

                <p className="mx-auto mt-6 max-w-xl text-gray-600">
                    We design and build modern websites,
                    applications, and digital products.
                </p>
            </div>
        </section>
    );
}