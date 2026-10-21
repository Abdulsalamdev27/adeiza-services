import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
];

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const closeMenu = () => {
        setMobileOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-0">
                {/* Logo */}
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="text-2xl font-bold tracking-[-0.04em] text-primary"
                >
                    ADEIZA
                </Link>

                {/* Desktop Navigation - Right Side */}
                <div className="hidden items-center gap-8 md:flex">
                    <nav className="flex items-center gap-7">
                        {navigation.map((item) => (
                            <Link
                                key={item.label}
                                to={item.to}
                                activeProps={{
                                    className: "text-primary",
                                }}
                                inactiveProps={{
                                    className:
                                        "text-muted hover:text-primary",
                                }}
                                className="text-sm font-medium transition-colors duration-200"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <Link
                        to="/booking"
                        className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
                    >
                        Book a Call
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setMobileOpen((open) => !open)}
                    className="rounded-lg p-2 text-foreground transition hover:bg-secondary md:hidden"
                    aria-label={
                        mobileOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileOpen && (
                <div className="border-t border-border bg-white md:hidden">
                    <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5">
                        {navigation.map((item) => (
                            <Link
                                key={item.label}
                                to={item.to}
                                onClick={closeMenu}
                                className="border-b border-border py-4 text-sm font-medium text-muted transition-colors hover:text-primary"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Link
                            to="/booking"
                            onClick={closeMenu}
                            className="mt-5 rounded-full bg-primary px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-primary-dark"
                        >
                            Book a Call
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}