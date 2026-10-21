import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import {
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";

const companyLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Blog", to: "/blog" },
];

const getStartedLinks = [
    { label: "Book a Consultation", to: "/booking" },
    { label: "Contact Us", to: "/contact" },
];

export function Footer() {
    return (
        <footer className="bg-foreground text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-2">
                {/* Main Footer */}
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link
                            to="/"
                            className="text-2xl font-bold tracking-[-0.04em] text-white"
                        >
                            ADEIZA
                        </Link>

                        <p className="mt-6 max-w-md text-sm leading-7 text-gray-400">
                            We design and build modern digital experiences,
                            websites, and applications for ambitious
                            businesses and organizations.
                        </p>

                        {/* Social Links */}
                        <div className="mt-7 flex items-center gap-3">
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                <FaInstagram size={17} />
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                <FaLinkedinIn size={17} />
                            </a>

                            <a
                                href="#"
                                aria-label="X"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                <FaXTwitter size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-white">
                            Company
                        </h3>

                        <div className="mt-5 flex flex-col gap-4">
                            {companyLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.to}
                                    className="text-sm text-gray-400 transition hover:text-white"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Get Started */}
                    <div>
                        <h3 className="text-sm font-semibold text-white">
                            Get Started
                        </h3>

                        <div className="mt-5 flex flex-col gap-4">
                            {getStartedLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.to}
                                    className="group flex items-center gap-1 text-sm text-gray-400 transition hover:text-white"
                                >
                                    {item.label}

                                    <ArrowUpRight
                                        size={14}
                                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} ADEIZA. All rights
                        reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link
                            to="/"
                            className="text-sm text-gray-500 transition hover:text-white"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            to="/"
                            className="text-sm text-gray-500 transition hover:text-white"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}