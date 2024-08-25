import daisyUi from 'daisyui'
import tailwindTypography from '@tailwindcss/typography'

export default {
  // content: ['./lib/components/*.{js,jsx,ts,tsx}'],
  // Toggle dark-mode based on .dark class or data-mode="dark"
  // darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {}
  },
  plugins: [tailwindTypography, daisyUi]
}
