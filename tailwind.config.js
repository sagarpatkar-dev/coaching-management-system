/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "oklch(0.13 0.01 260)",
                foreground: "oklch(0.95 0 0)",

                card: "oklch(0.17 0.01 260)",
                "card-foreground": "oklch(0.95 0 0)",

                popover: "oklch(0.17 0.01 260)",
                "popover-foreground": "oklch(0.95 0 0)",

                primary: "oklch(0.65 0.2 160)",
                "primary-foreground": "oklch(0.13 0.01 260)",

                secondary: "oklch(0.22 0.01 260)",
                "secondary-foreground": "oklch(0.95 0 0)",

                muted: "oklch(0.22 0.01 260)",
                "muted-foreground": "oklch(0.65 0 0)",

                accent: "oklch(0.65 0.2 160)",
                "accent-foreground": "oklch(0.13 0.01 260)",

                destructive: "oklch(0.55 0.22 25)",
                "destructive-foreground": "oklch(0.95 0 0)",

                warning: "oklch(0.75 0.18 75)",
                "warning-foreground": "oklch(0.2 0 0)",

                success: "oklch(0.65 0.2 160)",
                "success-foreground": "oklch(0.13 0.01 260)",

                border: "oklch(0.28 0.01 260)",
                input: "oklch(0.22 0.01 260)",
                ring: "oklch(0.65 0.2 160)",

                chart: {
                    1: "oklch(0.65 0.2 160)",
                    2: "oklch(0.6 0.15 200)",
                    3: "oklch(0.75 0.18 75)",
                    4: "oklch(0.55 0.22 25)",
                    5: "oklch(0.6 0.15 280)",
                },

                sidebar: "oklch(0.15 0.01 260)",
                "sidebar-foreground": "oklch(0.95 0 0)",
                "sidebar-primary": "oklch(0.65 0.2 160)",
                "sidebar-primary-foreground": "oklch(0.13 0.01 260)",
                "sidebar-accent": "oklch(0.22 0.01 260)",
                "sidebar-accent-foreground": "oklch(0.95 0 0)",
                "sidebar-border": "oklch(0.28 0.01 260)",
                "sidebar-ring": "oklch(0.65 0.2 160)",
            },
            borderRadius: {
                sm: "calc(0.5rem - 4px)",
                md: "calc(0.5rem - 2px)",
                lg: "0.5rem",
                xl: "calc(0.5rem + 4px)",
            },
            fontFamily: {
                sans: ["Geist", "Geist Fallback", "sans-serif"],
                mono: ["Geist Mono", "Geist Mono Fallback", "monospace"],
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
    ],
};
