import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				icecream: {
					pink: '#FFDEE2',
					blue: '#D3E4FD',
					vanilla: '#FEF7CD',
					chocolate: '#8B4513',
					mint: '#98D8C8',
				},
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'confetti': {
					'0%': { transform: 'translateY(0) rotate(0)' },
					'100%': { transform: 'translateY(100vh) rotate(720deg)' }
				},
				'bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'scale': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' },
					'100%': { transform: 'scale(1)' }
				},
				'scoop': {
					'0%': { transform: 'translateY(0) rotate(0)' },
					'50%': { transform: 'translateY(-15px) rotate(5deg)' },
					'100%': { transform: 'translateY(0) rotate(0)' }
				},
				'drip': {
					'0%': { height: '0', opacity: '0' },
					'50%': { height: '15px', opacity: '1' },
					'100%': { height: '0', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'confetti': 'confetti 3s linear forwards',
				'bounce': 'bounce 0.6s ease-in-out',
				'fade-in': 'fade-in 0.4s ease-in-out',
				'fade-out': 'fade-out 0.4s ease-in-out',
				'scale': 'scale 0.3s ease-in-out',
				'scoop': 'scoop 1s ease-in-out infinite',
				'drip': 'drip 2s ease-in-out infinite',
			},
			backgroundImage: {
				'waffle-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z' fill='%23f9e8d2' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E\")",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
