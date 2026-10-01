import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          "Everyday Sans UI",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      colors: {
        walmart: {
          blue: "#0053E2",
          "blue-dark": "#003cb3",
          "blue-tint": "#e6edfa",
          yellow: "#ffc220",
          "yellow-dark": "#f0a500",
          rollback: "#de1c24",
          ink: "#16191f",
          slate: "#46474a",
          "gray-line": "#e4e6ea",
          "gray-bg": "#f5f6f7",
        },
        ld: {
          brand: "var(--ld-fill-brand)",
          "text-brand": "var(--ld-text-brand)",
          spark: "var(--ld-spark)",
          "text-default": "var(--ld-text-default)",
          "base-subtle": "var(--ld-base-subtle)",
          "warning-max": "var(--ld-warning-max)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "ai-reveal": {
          from: { transform: "translateY(0%)" },
          to: { transform: "translateY(100%)" },
        },
        "ai-ring-spin": {
          from: { strokeDashoffset: "var(--ring-start-offset)" },
          to: { strokeDashoffset: "var(--ring-end-offset)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ai-reveal": "ai-reveal 2.2s ease-out forwards",
        "ai-ring": "ai-ring-spin 20s linear forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
