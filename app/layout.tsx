import "./globals.css"
import { inter } from './fonts'

export const metadata = {
  title: "Raagul Nagendran",
  description: "Portfolio of Raagul Nagendran.",
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
