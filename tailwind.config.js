/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Clean white/light color palette
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',  // Sky blue accent
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                    950: '#082f49',
                },
                secondary: {
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                },
                accent: {
                    300: '#6ee7b7',
                    400: '#34d399',
                    500: '#10b981',
                    600: '#059669',
                },
                // Light theme colors
                light: {
                    50: '#ffffff',
                    100: '#fafafa',
                    200: '#f5f5f5',
                    300: '#e5e5e5',
                    400: '#d4d4d4',
                    500: '#a3a3a3',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
                'gradient-secondary': 'linear-gradient(135deg, #8b5cf6, #10b981)',
                'gradient-accent': 'linear-gradient(135deg, #0ea5e9, #10b981)',
                'gradient-hero': 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #ffffff 100%)',
                'gradient-glow': 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(139, 92, 246, 0.1))',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease forwards',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.2)' },
                    '50%': { boxShadow: '0 0 40px rgba(14, 165, 233, 0.4)' },
                },
            },
            boxShadow: {
                'glow': '0 0 40px rgba(14, 165, 233, 0.2)',
                'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
                'card': '0 10px 40px rgba(0, 0, 0, 0.06)',
            },
        },
    },
    plugins: [],
}
