import {useEffect, useState} from "react";

export const useMobileBreakpoint = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (window.innerWidth <= 768) setIsMobile(true);
        window.matchMedia('(max-width: 768px)').addEventListener('change', (e) => setIsMobile(e.matches))
    }, []);
    return isMobile;
}