'use client'

import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Media as MediaPayload } from '@/payload-types'
import Image from 'next/image'

interface StructureItem {
  image: string | MediaPayload
  id?: string | null
}

interface StructureCarouselProps {
  structure: StructureItem[]
}

export function StructureCarousel({ structure }: StructureCarouselProps) {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleImageClick = (index: number) => {
    setCurrentIndex(index)
    setOpen(true)
  }

  // Prepara as imagens para o lightbox
  const slides = structure.map((item) => {
    if (item.image && typeof item.image !== 'string') {
      return {
        src: item.image.url || '',
        alt: item.image.alt || '',
      }
    }
    return { src: '', alt: '' }
  })

  return (
    <>
      <Carousel
        className="mt-10"
        opts={{
          align: 'center',
          loop: true,
        }}
      >
        <CarouselContent>
          {structure.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-[calc(100%/4.5)] max-[1280px]:basis-[calc(100%/3.5)] max-[1024px]:basis-[calc(100%/2.5)] max-[768px]:basis-[calc(100%/1.5)]"
            >
              <div
                className="relative w-full h-[250px] group cursor-pointer overflow-hidden rounded-[10px]"
                onClick={() => handleImageClick(index)}
              >
                {item.image && typeof item.image !== 'string' && (
                  <Image
                    src={item.image.url!}
                    alt={'image'}
                    fill
                    priority
                    className="object-cover"
                  />
                )}
                {/* Overlay com gradiente no hover */}
                <div className="rounded-[10px] absolute inset-0 bg-linear-to-b from-[rgba(39,35,63,0.6)] to-[rgba(39,35,63,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                  >
                    <path
                      d="M43.7 46C43.1114 46 42.5227 45.7756 42.0737 45.3263L29.6833 32.9361C28.3905 33.941 26.9705 34.7662 25.4415 35.3996C23.1972 36.3289 20.8283 36.8002 18.4001 36.8002C15.9718 36.8002 13.6028 36.3289 11.3589 35.3996C9.11495 34.4702 7.10652 33.1281 5.38927 31.4107C3.67201 29.6934 2.33001 27.685 1.40081 25.4415C0.471264 23.1977 0 20.8286 0 18.4001C0 13.4853 1.9139 8.86472 5.38918 5.38927C8.86463 1.9139 13.4853 0 18.4001 0C23.3149 0 27.9355 1.9139 31.4107 5.38918C34.886 8.86455 36.8001 13.4852 36.8001 18.4C36.8001 20.8282 36.3288 23.1971 35.3996 25.4412C34.7661 26.9704 33.9409 28.3905 32.936 29.6833L45.3263 42.0737C45.7755 42.5227 46 43.1113 46 43.7C46 44.2887 45.7756 44.8774 45.3263 45.3264C44.8773 45.7756 44.2887 46 43.7 46ZM18.4001 4.60008C14.714 4.60008 11.2485 6.03548 8.64194 8.64203C6.03548 11.2485 4.60008 14.714 4.60008 18.4001C4.60008 20.2215 4.95346 21.9984 5.65056 23.6811C6.34756 25.3638 7.35404 26.8701 8.64203 28.1581C9.92992 29.4461 11.4362 30.4527 13.1191 31.1498C14.802 31.8467 16.5789 32.2001 18.4001 32.2001C20.2212 32.2001 21.9982 31.8466 23.6814 31.1496C25.3639 30.4527 26.8701 29.4462 28.1582 28.1582C29.4463 26.87 30.4529 25.3638 31.1499 23.6811C31.8468 21.9981 32.2002 20.2212 32.2002 18.4001C32.2002 14.7139 30.7646 11.2485 28.1582 8.64194C25.5516 6.03548 22.0861 4.60008 18.4001 4.60008ZM18.4001 27.6001C17.1298 27.6001 16.1 26.5703 16.1 25.3001V20.7H11.5C10.2297 20.7 9.19998 19.6703 9.19998 18.4C9.19998 17.1297 10.2297 16.0999 11.5 16.0999H16.1V11.4999C16.1 10.2296 17.1298 9.19989 18.4001 9.19989C19.6703 9.19989 20.7001 10.2296 20.7001 11.4999V16.0999H25.3002C26.5705 16.0999 27.6002 17.1297 27.6002 18.4C27.6002 19.6703 26.5704 20.7 25.3002 20.7H20.7001V25.3001C20.7 26.5704 19.6703 27.6001 18.4001 27.6001Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={currentIndex}
        carousel={{ finite: true }}
      />
    </>
  )
}
