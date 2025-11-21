import Link from 'next/link'
import { Container } from './container'
import RichText from './RichText'
import { Page } from '@/payload-types'
import { Header } from './Header'
import Image from 'next/image'

export function Hero({ data }: { data: Page }) {
  return (
    <div className="bg-[radial-gradient(67.18%_67.18%_at_50%_0%,_#78B7B8_0%,_#FFF_100%)]">
      <Header data={data} />
      <Container className="relative h-[850px] overflow-hidden max-[1376px]:h-[700px] max-[600px]:h-[600px]">
        <div className="flex flex-col items-start h-full pt-64 gap-2.5 max-[768px]:pt-0  max-[768px]:justify-center">
          <RichText
            data={data.hero.heroTitle}
            className="text-6xl text-[#27233F] max-[1280px]:max-w-5xl mx-0 max-sm:text-4xl [&_strong]:font-normal [&_strong]:text-[#4EB8B9] max-w-[800px] max-[1376px]:max-w-[665px]"
          />
          <p className="text-[#666666]">{data.hero.heroDescription}</p>

          <Link
            href={'contato'}
            className="text-white font-semibold text-xl px-20 py-3 bg-[#4EB8B9] rounded-[50px] mt-5 max-sm:text-base max-sm:px-10"
          >
            Entre em contato
          </Link>
        </div>

        <div className="absolute bottom-0 -right-12 w-[825px] h-[685px] max-[1376px]:w-[725px] max-[1376px]:h-[573px] max-[1376px]:bottom-0  max-[1376px]:right-0  max-[1280px]:hidden">
          {data.hero.heroImage && typeof data.hero.heroImage !== 'string' && (
            <Image src={data.hero.heroImage.url!} alt={data.hero.heroImage.alt} priority fill />
          )}
        </div>
      </Container>
    </div>
  )
}
