
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

function HeroSection() {
    const specialties = [
        "Web Development",
        "Software Engineering",
        "AI Automation",
        "Mobile Development",
    ];

    return (
        <section className="relative min-h-[720px] overflow-hidden bg-[#080609] text-white lg:min-h-screen">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="/images/hero-bg.jpg"
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover opacity-25"
                />

                <div className="absolute inset-0 bg-[#080609]/80" />

                {/* Purple glow */}
                <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-primary/15 blur-[120px]" />

                <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />

                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
            </div>

            {/* Animated background particles */}
            <motion.div
                animate={{
                    opacity: [0.2, 0.6, 0.2],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-[10%] top-[25%] h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_15px_4px_rgba(102,45,145,0.5)]"
            />

            <motion.div
                animate={{
                    opacity: [0.2, 0.6, 0.2],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="pointer-events-none absolute right-[18%] top-[30%] h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_15px_4px_rgba(102,45,145,0.5)]"
            />

            <motion.div
                animate={{
                    opacity: [0.15, 0.5, 0.15],
                    scale: [1, 1.4, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="pointer-events-none absolute bottom-[20%] left-[45%] h-1 w-1 rounded-full bg-primary-light shadow-[0_0_12px_3px_rgba(139,75,181,0.5)]"
            />

            {/* Main content — consistent with ServicesSection container */}
            <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-20 sm:px-8 sm:py-24 lg:min-h-screen lg:px-0 lg:py-20">
                <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
                    {/* Left content */}
                    <div className="max-w-2xl">
                        {/* Main heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.1,
                                ease: "easeOut",
                            }}
                            className="text-4xl font-bold leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
                        >
                            We Build Digital

                            <span className="block text-primary-light">
                                Solutions That Move
                            </span>

                            <span className="block text-white">
                                Businesses Forward.
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.25,
                                ease: "easeOut",
                            }}
                            className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8"
                        >
                            We design and develop modern websites, powerful
                            software applications, mobile experiences, and
                            intelligent AI automation solutions that help
                            businesses work smarter, grow faster, and stay
                            ahead.
                        </motion.p>

                        {/* Call-to-action buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.4,
                                ease: "easeOut",
                            }}
                            className="mt-7 flex flex-col gap-3 sm:flex-row"
                        >
                            <Link
                                to="/booking"
                                className="group inline-flex items-center justify-center gap-2.5 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-[#111] transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30"
                            >
                                Start a Project

                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>

                            <Link
                                to="/services"
                                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary/10"
                            >
                                Explore Our Services
                            </Link>
                        </motion.div>

                        {/* Service specialties */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.5,
                                ease: "easeOut",
                            }}
                            className="mt-6 flex max-w-2xl flex-wrap items-center gap-x-2.5 gap-y-2 text-xs font-medium text-white/55 sm:gap-x-3 sm:text-sm"
                        >
                            {specialties.map((specialty, index) => (
                                <span
                                    key={specialty}
                                    className="inline-flex items-center gap-2"
                                >
                                    <span>{specialty}</span>

                                    {index < specialties.length - 1 && (
                                        <span
                                            aria-hidden="true"
                                            className="text-primary-light"
                                        >
                                            ·
                                        </span>
                                    )}
                                </span>
                            ))}
                        </motion.div>

                        {/* Trust indicators */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.65,
                                ease: "easeOut",
                            }}
                            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/10 pt-5"
                        >
                            <div>
                                <p className="text-base font-semibold text-white">
                                    5+
                                </p>

                                <p className="mt-1 text-[11px] text-white/40">
                                    Years Experience
                                </p>
                            </div>

                            <div className="hidden h-7 w-px bg-white/10 sm:block" />

                            <div>
                                <p className="text-base font-semibold text-white">
                                    50+
                                </p>

                                <p className="mt-1 text-[11px] text-white/40">
                                    Projects Delivered
                                </p>
                            </div>

                            <div className="hidden h-7 w-px bg-white/10 sm:block" />

                            <div>
                                <p className="text-base font-semibold text-white">
                                    Modern
                                </p>

                                <p className="mt-1 text-[11px] text-white/40">
                                    Technology Stack
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right visual */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 40,
                            scale: 0.95,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        className="relative flex min-h-[320px] items-center justify-center sm:min-h-[400px] lg:min-h-[450px]"
                    >
                        {/* Main glow */}
                        <motion.div
                            animate={{
                                scale: [1, 1.06, 1],
                                opacity: [0.18, 0.3, 0.18],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute h-64 w-64 rounded-full bg-primary blur-[90px] sm:h-80 sm:w-80"
                        />

                        {/* Agency logo */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative z-10 flex items-center justify-center"
                        >
                            <div className="absolute inset-0 rounded-full bg-primary/15 blur-3xl" />

                            <img
                                src="/images/bog.jpg"
                                alt="ADEIZA Soft Web Services"
                                className="relative w-48 object-contain sm:w-60 lg:w-72"
                            />
                        </motion.div>

                        {/* Rotating ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute h-56 w-56 rounded-full border border-primary/20 sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem]"
                        >
                            <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_12px_4px_rgba(102,45,145,0.7)]" />

                            <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary-light shadow-[0_0_12px_4px_rgba(139,75,181,0.7)]" />

                            <span className="absolute left-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-primary-light shadow-[0_0_10px_3px_rgba(139,75,181,0.6)]" />
                        </motion.div>

                        {/* Floating information card */}
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                            }}
                            className="absolute bottom-0 left-0 z-20 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 backdrop-blur-md sm:bottom-3 sm:left-2"
                        >
                            <p className="text-[9px] font-medium tracking-wider text-white/40">
                                DIGITAL SOLUTIONS
                            </p>

                            <p className="mt-0.5 text-xs font-semibold text-white">
                                Built for growth
                            </p>
                        </motion.div>

                        {/* Floating status */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.9,
                            }}
                            className="absolute right-0 top-5 z-20 hidden rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 backdrop-blur-md sm:block"
                        >
                            <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary-light shadow-[0_0_8px_3px_rgba(139,75,181,0.6)]" />

                                <span className="text-[11px] font-medium text-white/70">
                                    Building the future
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
