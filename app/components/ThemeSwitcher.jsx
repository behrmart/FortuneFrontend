// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div>
            Theme: {theme}
            <Button colorScheme="blue" variant="solid" size="sm" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} > Dark</Button>
        </div>
    )
};