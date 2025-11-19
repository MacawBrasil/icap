import React from 'react'
import './globals.css'
import { Wix_Madefor_Text } from 'next/font/google'
import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Metadata } from 'next'

const WixFont = Wix_Madefor_Text({
  subsets: ['latin'],
  style: ['normal'],
})

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

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const page = await payload.findGlobal({
    slug: 'page',
    depth: 2,
  })

  // Dados estruturados (JSON-LD) para SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'ICAP - Instituto de Citologia e Anatomia Patológica',
    description: page.seo?.description || '',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.icap.com.br',
    logo:
      page.header?.logo && typeof page.header.logo !== 'string' ? page.header.logo.url : undefined,
    image: page.seo?.image && typeof page.seo.image !== 'string' ? page.seo.image.url : undefined,
    telephone: page.contact?.phones?.[0]?.phone || '',
    email: page.contact?.email || '',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Novo Hamburgo',
      addressRegion: 'RS',
      addressCountry: 'BR',
    },
    sameAs: [page.social?.facebook, page.social?.instagram, page.social?.linkedin].filter(Boolean),
    medicalSpecialty: ['Pathology', 'Cytology'],
  }

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={WixFont.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
