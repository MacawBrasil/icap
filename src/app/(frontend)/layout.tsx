import React from 'react'
import './globals.css'
import { Wix_Madefor_Text } from 'next/font/google'
import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/sonner'

const WixFont = Wix_Madefor_Text({
  subsets: ['latin'],
  style: ['normal'],
})

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const page = await payload.findGlobal({
    slug: 'page',
    depth: 2,
  })

  const keywords = page.seo?.keywords?.map((k) => k.keyword).join(', ') || ''
  const ogImage =
    page.seo?.image && typeof page.seo.image !== 'string' ? page.seo.image.url : undefined

  return {
    title: page.seo?.title || 'ICAP - Instituto de Citologia e Anatomia Patológica',
    description:
      page.seo?.description ||
      'Instituto especializado em exames de citologia e anatomia patológica',
    keywords,
    openGraph: {
      title: page.seo?.title || 'ICAP - Instituto de Citologia e Anatomia Patológica',
      description:
        page.seo?.description ||
        'Instituto especializado em exames de citologia e anatomia patológica',
      type: 'website',
      locale: 'pt_BR',
      siteName: 'ICAP',
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: page.seo?.title || 'ICAP',
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.seo?.title || 'ICAP - Instituto de Citologia e Anatomia Patológica',
      description:
        page.seo?.description ||
        'Instituto especializado em exames de citologia e anatomia patológica',
      images: ogImage ? [ogImage] : undefined,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  }
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="pt-BR">
      <body className={WixFont.className}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
