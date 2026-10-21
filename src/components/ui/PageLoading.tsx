import { useEffect, useState, type ReactNode } from "react";
import { PageLoader } from "./PageLoader";

interface PageLoadingProps {
    children: ReactNode;
}

export function PageLoading({ children }: PageLoadingProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        if (document.readyState === "complete") {
            setLoading(false);
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    if (loading) {
        return <PageLoader />;
    }

    return <>{children}</>;
}