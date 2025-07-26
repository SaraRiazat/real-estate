import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./lib/**/*.{ts,tsx}",
        "./hooks/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "var(--primary)",
                "primary-foreground": "var(--primary-foreground)",
                secondary: "var(--secondary)",
                "secondary-foreground": "var(--secondary-foreground)",
                border: "var(--border)",
                input: "var(--input)",
                ring: "var(--ring)",
            },
            borderRadius: {
                sm: "var(--radius-sm)",
                md: "var(--radius-md)",
                lg: "var(--radius-lg)",
                xl: "var(--radius-xl)",
            },
            fontFamily: {
                sans: ["var(--font-sans)"],
                mono: ["var(--font-mono)"],
            },
        },
    },
    darkMode: ["class", "string"],
    plugins: [
        require("tailwindcss-animate"),
    ],
}

export default config
