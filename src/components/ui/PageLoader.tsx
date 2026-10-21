import { motion } from "motion/react";

export function PageLoader() {
    return (
        <div className="flex min-h-[60vh] items-center justify-center bg-background">
            <div className="flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-2xl font-bold tracking-[-0.04em] text-primary"
                >
                    ADEIZA
                </motion.div>

                <div className="mt-5 h-1 w-28 overflow-hidden rounded-full bg-primary/10">
                    <motion.div
                        className="h-full w-1/2 rounded-full bg-primary"
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}