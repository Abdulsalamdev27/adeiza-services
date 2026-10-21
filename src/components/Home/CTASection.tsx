
import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
    ArrowRight,
    Mail,
    Phone,
    MapPin,
    Code2,
    CalendarDays,
    MessageCircle,
    Sparkles,
    Send,
} from "lucide-react";

const interests = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "AI & Automation",
    "Custom Software",
    "API & Backend",
];

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const contactMethods = ["Email", "Phone", "WhatsApp"] as const;

type ContactMethod = (typeof contactMethods)[number];

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL as
    | string
    | undefined;

const contactPhone = import.meta.env.VITE_CONTACT_PHONE as
    | string
    | undefined;

const contactLocation = import.meta.env.VITE_CONTACT_LOCATION as
    | string
    | undefined;

const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as
    | string
    | undefined;

export default function CTASection() {
    const [selectedInterests, setSelectedInterests] = useState<string[]>([
        "Web Development",
    ]);

    const [selectedDay, setSelectedDay] = useState("Wednesday");

    const [preferredMethod, setPreferredMethod] =
        useState<ContactMethod>("Email");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState("");

    const toggleInterest = (interest: string) => {
        setSelectedInterests((current) =>
            current.includes(interest)
                ? current.filter((item) => item !== interest)
                : [...current, interest],
        );

        setFormStatus("");
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormStatus("");

        if (selectedInterests.length === 0) {
            setFormStatus("Please select at least one service.");
            return;
        }

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: String(formData.get("name") ?? ""),
            email: String(formData.get("email") ?? ""),
            phone: String(formData.get("phone") ?? ""),
            message: String(formData.get("message") ?? ""),
            interests: selectedInterests,
            preferredDay: selectedDay,
            preferredContactMethod: preferredMethod,
        };

        setIsSubmitting(true);

        try {
            if (contactEndpoint) {
                const response = await fetch(contactEndpoint, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(payload),
                });

                if (!response.ok) {
                    throw new Error("The request could not be completed.");
                }

                setFormStatus(
                    "Thank you! Your project enquiry has been submitted.",
                );

                form.reset();
                setSelectedInterests([]);
                setSelectedDay("Wednesday");
                setPreferredMethod("Email");

                return;
            }

            if (contactEmail) {
                const subject = `ADEIZA Project Enquiry - ${payload.name}`;

                const body = [
                    `Name: ${payload.name}`,
                    `Email: ${payload.email}`,
                    `Phone: ${payload.phone || "Not provided"}`,
                    `Interested in: ${payload.interests.join(", ")}`,
                    `Preferred day: ${payload.preferredDay}`,
                    `Preferred contact method: ${payload.preferredContactMethod}`,
                    "",
                    "Project details:",
                    payload.message,
                ].join("\n");

                const mailtoUrl =
                    `mailto:${contactEmail}` +
                    `?subject=${encodeURIComponent(subject)}` +
                    `&body=${encodeURIComponent(body)}`;

                window.location.href = mailtoUrl;

                setFormStatus(
                    "Your email draft is opening. Send it from your email app to complete your enquiry.",
                );

                return;
            }

            setFormStatus(
                "The contact form is not connected yet. Please configure a contact email or form endpoint before accepting enquiries.",
            );
        } catch {
            setFormStatus(
                "We couldn't submit your enquiry. Please try again later.",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden px-6 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28"
        >
            {/* Background glows matching the homepage hero */}
            <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/20 blur-[130px]" />

            <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary-light/15 blur-[130px]" />

            <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Heading — ADEIZA homepage style */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
                >
                    <div className="mb-6 flex items-center justify-center gap-3">
                        <span className="h-px w-10 bg-primary-light" />

                        <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary-light sm:text-xs">
                            Let's Work Together
                        </span>

                        <span className="h-1.5 w-1.5 rotate-45 bg-primary-light" />
                    </div>

                    <h2 className="text-3xl font-bold leading-[1.12] tracking-[-0.045em] text-black sm:text-5xl lg:text-6xl">
                        Let's build something.

                        <span className="relative mx-auto mt-2 block w-fit text-primary-light">
                            Great together.
                            <span className="absolute -bottom-3 left-0 h-1 w-1/3 rounded-full bg-primary-light" />
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-black sm:text-base sm:leading-8">
                        Have an idea, a business challenge, or a product
                        to build? Tell us what you have in mind, and let's
                        explore the right digital solution together.
                    </p>
                </motion.div>

                {/* Contact card */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-surface lg:grid-cols-[0.72fr_1.28fr]"
                >
                    {/* Left: Contact information */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark p-7 text-white sm:p-9 lg:p-10">
                        {/* Purple decorative circles */}
                        <div className="pointer-events-none absolute -right-16 bottom-16 h-48 w-48 rounded-full bg-primary-light/25 blur-sm" />

                        <div className="pointer-events-none absolute -right-20 bottom-0 h-48 w-48 rounded-full border-[24px] border-white/[0.07]" />

                        <div className="pointer-events-none absolute right-10 top-1/2 h-16 w-16 rounded-full bg-primary-light/20" />

                        <div className="relative">
                            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                                <span className="h-px w-6 bg-white/60" />
                                Get in touch
                            </span>

                            <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                                Contact
                                <span className="block text-white/75">
                                    Information
                                </span>
                            </h3>

                            <p className="mt-4 max-w-xs text-sm leading-7 text-white/75">
                                Tell us about your idea, ask a question,
                                or let us know what you'd like to build.
                            </p>

                            {/* Contact details */}
                            <div className="mt-9 space-y-6">
                                {contactEmail && (
                                    <a
                                        href={`mailto:${contactEmail}`}
                                        className="group flex items-start gap-3"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/[0.09] transition-colors group-hover:bg-white/[0.18]">
                                            <Mail size={17} />
                                        </div>

                                        <div className="min-w-0 pt-1">
                                            <p className="text-xs text-white/55">
                                                Email
                                            </p>

                                            <p className="mt-1 break-all text-sm font-medium text-white">
                                                {contactEmail}
                                            </p>
                                        </div>
                                    </a>
                                )}

                                {contactPhone && (
                                    <a
                                        href={`tel:${contactPhone.replace(/[^\d+]/g, "")}`}
                                        className="group flex items-start gap-3"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/[0.09] transition-colors group-hover:bg-white/[0.18]">
                                            <Phone size={17} />
                                        </div>

                                        <div className="min-w-0 pt-1">
                                            <p className="text-xs text-white/55">
                                                Phone
                                            </p>

                                            <p className="mt-1 text-sm font-medium text-white">
                                                {contactPhone}
                                            </p>
                                        </div>
                                    </a>
                                )}

                                {contactLocation && (
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/[0.09]">
                                            <MapPin size={17} />
                                        </div>

                                        <div className="min-w-0 pt-1">
                                            <p className="text-xs text-white/55">
                                                Location
                                            </p>

                                            <p className="mt-1 text-sm leading-6 text-white">
                                                {contactLocation}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {!contactEmail &&
                                    !contactPhone &&
                                    !contactLocation && (
                                        <>
                                            <div className="flex items-start gap-3">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/[0.09]">
                                                    <MessageCircle size={17} />
                                                </div>

                                                <div className="pt-1">
                                                    <p className="text-sm font-semibold">
                                                        Project enquiries
                                                    </p>

                                                    <p className="mt-1 text-xs leading-6 text-white/65">
                                                        Tell us about your
                                                        idea using the form.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/[0.09]">
                                                    <Code2 size={17} />
                                                </div>

                                                <div className="pt-1">
                                                    <p className="text-sm font-semibold">
                                                        What we build
                                                    </p>

                                                    <p className="mt-1 text-xs leading-6 text-white/65">
                                                        Web, mobile, software,
                                                        design, and AI.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/[0.09]">
                                                    <CalendarDays size={17} />
                                                </div>

                                                <div className="pt-1">
                                                    <p className="text-sm font-semibold">
                                                        Plan the next step
                                                    </p>

                                                    <p className="mt-1 text-xs leading-6 text-white/65">
                                                        Choose a preferred day
                                                        for us to connect.
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                            </div>

                            {/* Bottom panel note */}
                            <div className="mt-12 border-t border-white/20 pt-5">
                                <div className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-white" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
                                        ADEIZA SOFT WEB SERVICES
                                    </span>
                                </div>

                                <p className="mt-3 text-xs leading-6 text-white/55">
                                    Design. Engineering. Intelligence.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Project enquiry form */}
                    <div className="bg-surface p-6 text-foreground sm:p-9 lg:p-10">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            {/* Interest selection */}
                            <fieldset>
                                <legend className="text-sm font-semibold text-foreground">
                                    I'm interested in
                                </legend>

                                <p className="mt-1 text-xs text-muted">
                                    Select one or more services.
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {interests.map((interest) => {
                                        const isSelected =
                                            selectedInterests.includes(
                                                interest,
                                            );

                                        return (
                                            <button
                                                key={interest}
                                                type="button"
                                                aria-pressed={isSelected}
                                                onClick={() =>
                                                    toggleInterest(interest)
                                                }
                                                className={`rounded-md border px-3 py-2.5 text-xs font-medium transition-colors duration-200 sm:text-sm ${
                                                    isSelected
                                                        ? "border-primary bg-secondary text-primary-dark"
                                                        : "border-border bg-surface text-muted hover:border-primary/40 hover:bg-secondary/50 hover:text-primary"
                                                }`}
                                            >
                                                {interest}
                                            </button>
                                        );
                                    })}
                                </div>
                            </fieldset>

                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="cta-name"
                                    className="block text-xs font-semibold text-foreground"
                                >
                                    Full Name
                                </label>

                                <input
                                    id="cta-name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Enter your full name"
                                    required
                                    className="mt-2 w-full border-b border-border bg-transparent px-0 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-light focus:border-primary"
                                />
                            </div>

                            {/* Email and phone */}
                            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                                <div>
                                    <label
                                        htmlFor="cta-email"
                                        className="block text-xs font-semibold text-foreground"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        id="cta-email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="you@example.com"
                                        required
                                        className="mt-2 w-full border-b border-border bg-transparent px-0 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-light focus:border-primary"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="cta-phone"
                                        className="block text-xs font-semibold text-foreground"
                                    >
                                        Phone Number
                                        <span className="ml-1 font-normal text-muted-light">
                                            (Optional)
                                        </span>
                                    </label>

                                    <input
                                        id="cta-phone"
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        placeholder="+234 ..."
                                        className="mt-2 w-full border-b border-border bg-transparent px-0 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-light focus:border-primary"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="cta-message"
                                    className="block text-xs font-semibold text-foreground"
                                >
                                    Tell Us About Your Project
                                </label>

                                <textarea
                                    id="cta-message"
                                    name="message"
                                    rows={3}
                                    required
                                    placeholder="Describe your idea, requirements, or the problem you'd like to solve..."
                                    className="mt-2 w-full resize-y border-b border-border bg-transparent px-0 py-3 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-muted-light focus:border-primary"
                                />
                            </div>

                            {/* Preferred day */}
                            <fieldset>
                                <legend className="text-sm font-semibold text-foreground">
                                    When would you prefer to connect?
                                </legend>

                                <p className="mt-1 text-xs text-muted">
                                    Choose your preferred day.
                                </p>

                                <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7">
                                    {days.map((day) => {
                                        const isSelected =
                                            selectedDay === day;

                                        return (
                                            <button
                                                key={day}
                                                type="button"
                                                aria-pressed={isSelected}
                                                onClick={() =>
                                                    setSelectedDay(day)
                                                }
                                                className={`rounded-md border px-2 py-2.5 text-[10px] font-medium transition-colors duration-200 sm:px-1 sm:text-[11px] ${
                                                    isSelected
                                                        ? "border-primary bg-primary text-white"
                                                        : "border-border bg-surface text-muted hover:border-primary/40 hover:bg-secondary/50 hover:text-primary"
                                                }`}
                                            >
                                                {day.slice(0, 3)}
                                            </button>
                                        );
                                    })}
                                </div>
                            </fieldset>

                            {/* Preferred contact method */}
                            <fieldset>
                                <legend className="text-xs font-semibold text-foreground">
                                    Best way to reach you
                                </legend>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {contactMethods.map((method) => {
                                        const isSelected =
                                            preferredMethod === method;

                                        return (
                                            <button
                                                key={method}
                                                type="button"
                                                aria-pressed={isSelected}
                                                onClick={() =>
                                                    setPreferredMethod(method)
                                                }
                                                className={`rounded-md border px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                                                    isSelected
                                                        ? "border-primary/30 bg-secondary text-primary-dark"
                                                        : "border-border text-muted hover:border-primary/40 hover:bg-secondary/50 hover:text-primary"
                                                }`}
                                            >
                                                {method}
                                            </button>
                                        );
                                    })}
                                </div>
                            </fieldset>

                            {/* Submission status */}
                            {formStatus && (
                                <p
                                    role="status"
                                    aria-live="polite"
                                    className={`rounded-md border p-3 text-xs leading-6 ${
                                        formStatus.startsWith("Thank you!") ||
                                        formStatus.startsWith("Your email draft")
                                            ? "border-primary/15 bg-secondary text-primary-dark"
                                            : "border-danger/20 bg-danger/5 text-danger"
                                    }`}
                                >
                                    {formStatus}
                                </p>
                            )}

                            {/* Submit */}
                            <div className="flex justify-end border-t border-border pt-5">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group inline-flex min-w-40 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {isSubmitting
                                        ? "Submitting..."
                                        : "Send Message"}

                                    {!isSubmitting && (
                                        <ArrowRight
                                            size={16}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    )}

                                    {isSubmitting && (
                                        <Send
                                            size={15}
                                            className="animate-pulse"
                                        />
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>

                {/* Footer note */}
                <p className="mt-6 text-center text-[10px] tracking-wide text-white/40 sm:text-xs">
                    Have a vision? Let's find the right way to bring it to life.
                </p>
            </div>
        </section>
    );
}
