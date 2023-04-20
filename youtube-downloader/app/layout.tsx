import './globals.css'

export const metadata = {
  title: 'Youtube Downloader',
  description: 'Download youtube video for free',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
