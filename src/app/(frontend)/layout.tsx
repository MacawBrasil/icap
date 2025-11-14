import React from 'react'
import './globals.css'
import { Wix_Madefor_Text } from 'next/font/google'

const WixFont = Wix_Madefor_Text({
  subsets: ['latin'],
  style: ['normal'],
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={WixFont.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
