import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Soyam Kapoor | Python Developer • Innovator • Creator",
    description: "Explore projects, skills, and creative work by Soyam Kapoor. From AI to Arduino, it's all here!",
  icons: {
    icon: [
      { url: '/favicon.ico' }, // Default favicon, often .ico in public folder
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    appleTouchIcon: '/apple-touch-icon.png', // For iOS devices in public folder
    // You can add other icon types if needed (e.g., 'shortcut')
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}