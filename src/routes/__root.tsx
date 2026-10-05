import {
    createRootRoute,
    Outlet,
} from "@tanstack/react-router";

export const Route = createRootRoute({
    component: RootLayout,
});

function RootLayout() {
    return (
        <div className="min-h-screen">
            <header>
                <nav>
                    Agency Website
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                © 2026 Agency
            </footer>
        </div>
    );
}