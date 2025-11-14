import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './globals.css'
import { Container } from '@/components/container'
import { Media } from '@/components/Media'
import Link from 'next/link'
import RichText from '@/components/RichText'
import { Exames } from '@/components/Exames'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FormContact } from '@/components/FormContact'
import { StructureCarousel } from '@/components/StructureCarousel'
import { Hero } from '@/components/Hero'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const page = await payload.findGlobal({
    slug: 'page',
    depth: 1000,
  })

  return (
    <>
      <Hero data={page} />

      <section className="relative w-full pb-10">
        <div className="absolute top-0 left-0 h-[1080px] w-full -z-10">
          <Image src={'/fundo.png'} fill alt="Fundo" className=" object-cover" />
        </div>
        <Exames data={page} />
        <section className="mt-28 pt-24 max-[768px]:mt-0">
          <Container className="flex justify-between max-[1135px]:flex-col max-[1135px]:items-center max-[1135px]:gap-10">
            <div className="max-w-[300px] max-[1135px]:max-w-full max-[1135px]:w-full">
              <h2 className="text-[#4EB8B9] text-4xl font-extrabold max-[768px]:text-2xl">
                {page.about.aboutTitle}
              </h2>
              <RichText data={page.about.aboutDescription} className="text-[#333333] mt-4 mx-0" />
              <div className="mt-9">
                <div className="relative w-[50px] h-[50px]">
                  {page.about.items[0].image && typeof page.about.items[0].image !== 'string' && (
                    <Media fill priority resource={page.about.items[0].image} />
                  )}
                </div>
                <span className="text-[#4EB8B9] font-medium text-2xl max-[768px]:text-xl">
                  {page.about.items[0].title}
                </span>
              </div>
            </div>

            <div className="relative max-[1135px]:hidden w-[627px] h-[627px] max-[1280px]:w-[500px] max-[1280px]:h-[500px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(78,_184,_185,_0.80)_0%,_rgba(78,_184,_185,_0.00)_100%)]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white w-[561px] h-[561px] max-[1280px]:w-[461px] max-[1280px]:h-[461px] rounded-full border border-[#BFBFBF]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[467px] h-[467px] max-[1280px]:w-[367px] max-[1280px]:h-[367px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(78,_184,_185,_0.80)_0%,_rgba(78,_184,_185,_0.00)_100%)]">
                  <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[432px] h-[427px] max-[1280px]:w-[332px] max-[1280px]:h-[332px]">
                    {page.about.aboutImage && typeof page.about.aboutImage !== 'string' && (
                      <Media fill priority resource={page.about.aboutImage} />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[300px] mt-20 max-[1135px]:max-w-full max-[1135px]:mt-0 max-[1135px]:w-full">
              <div className="max-[1135px]:w-full">
                <div className="relative w-[50px] h-[50px]">
                  {page.about.items[1].image && typeof page.about.items[1].image !== 'string' && (
                    <Media fill priority resource={page.about.items[1].image} />
                  )}
                </div>
                <span className="text-[#4EB8B9] font-medium text-2xl max-[768px]:text-xl">
                  {page.about.items[1].title}
                </span>
              </div>
              <div className="mt-60 max-[1135px]:mt-10">
                <div className="relative w-[50px] h-[50px]">
                  {page.about.items[2].image && typeof page.about.items[2].image !== 'string' && (
                    <Media fill priority resource={page.about.items[2].image} />
                  )}
                </div>
                <span className="text-[#4EB8B9] font-medium text-2xl max-[768px]:text-xl">
                  {page.about.items[2].title}
                </span>
              </div>
            </div>
          </Container>
        </section>
        <section className="w-full mt-16">
          <Container>
            <h3 className="text-[#4EB8B9] text-4xl font-extrabold max-[768px]:text-2xl">
              Nossa Estrutura
            </h3>
          </Container>
          <StructureCarousel structure={page.about.structure} />
        </section>
      </section>

      {/* Section que o designer me fodeu */}

      {/*convenios*/}
      <section className="w-full mt-16">
        <Container>
          <span className="text-[#4EB8B9] text-2xl font-medium max-[768px]:text-base">
            Atendemos aos principais
          </span>
          <h4 className="text-[#4EB8B9] text-4xl font-extrabold max-[768px]:text-2xl">Convênios</h4>
        </Container>
        <Carousel
          className="mt-10"
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent>
            {page.about.agreements.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-[calc(100%/2.5)] sm:basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6 2xl:basis-[calc(100%/6.5)] bg-white"
              >
                <div className="relative w-full h-[164px] flex items-center justify-center">
                  {item.image && typeof item.image !== 'string' && (
                    <Image
                      src={item.image.url!}
                      alt={'Convenio'}
                      width={164}
                      height={164}
                      className="object-contain"
                    />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/*Certificados*/}
      <Container className="grid grid-cols-3 gap-5 mt-20 max-[768px]:grid-cols-1 max-[768px]:gap-0 max-[768px]:gap-y-5">
        <div className="bg-linear-to-r from-[#4EB8B9] to-[#3F77EE] col-span-2 p-10 rounded-[30px] flex flex-col gap-5">
          <span className="text-white text-2xl">Certificações</span>
          <RichText data={page.certifications.certificationDescription} className="text-white" />
        </div>
        <div className="bg-linear-to-r from-[#4EB8B9] to-[#3F77EE] col-span-1 p-10 rounded-[30px] flex items-center justify-center">
          <Image src="/certificado.png" width={197} height={188} alt="" />
        </div>
      </Container>

      {/*FAQ*/}
      <Container className="mt-32">
        <span className="text-[#4EB8B9] text-2xl font-medium max-[768px]:text-xl">FAQ</span>
        {page.faq.section.map((section, index) => (
          <div key={index}>
            <h4 className="text-[#4EB8B9] text-4xl font-extrabold max-[768px]:text-2xl">
              {section.title}
            </h4>
            <Accordion type="single" collapsible className="w-full space-y-4 mt-6">
              {section.aswersAndQuestions.map((item, index) => (
                <AccordionItem
                  key={item.id || index}
                  value={`item-${index + 1}`}
                  className="border-none bg-white rounded-[10px] shadow-[0_5px_30px_0_rgba(78,184,185,0.50)] overflow-hidden"
                >
                  <AccordionTrigger className="py-5 px-8 hover:no-underline data-[state=open]:rounded-b-none">
                    <div className="flex items-center gap-2.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        className="max-[768px]:hidden"
                      >
                        <g clipPath="url(#clip0_0_236)">
                          <mask
                            id="mask0_0_236"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="30"
                            height="30"
                          >
                            <path d="M30 0H0V30H30V0Z" fill="white" />
                          </mask>
                          <g mask="url(#mask0_0_236)">
                            <path
                              d="M1.17191 25.6639C0.873087 25.6639 0.579094 25.5497 0.355853 25.3335C0.0135208 25.0017 -0.0937053 24.495 0.0851513 24.0529L2.28988 18.5993C1.6351 17.731 1.11171 16.7888 0.729826 15.7908C0.245551 14.5252 -0.000102203 13.1972 -0.000102203 11.8436C-0.000102203 10.2322 0.344427 8.66905 1.02426 7.19821C1.67728 5.78537 2.60936 4.51887 3.79588 3.43299C6.21461 1.21904 9.42348 0 12.8319 0C16.2402 0 19.4491 1.21948 21.8679 3.43299C23.0539 4.51844 23.9865 5.78537 24.639 7.19821C25.3189 8.66905 25.6634 10.2322 25.6634 11.8436C25.6634 13.9895 25.0354 16.0918 23.8471 17.9226C23.4947 18.4653 22.7692 18.62 22.226 18.2675C21.6833 17.9151 21.5286 17.1896 21.881 16.6464C22.8223 15.1962 23.3194 13.5351 23.3194 11.8432C23.3194 6.60495 18.6142 2.34315 12.831 2.34315C7.04781 2.34315 2.34349 6.60539 2.34349 11.8436C2.34349 13.9627 3.09803 15.9675 4.52536 17.6422C4.80881 17.9744 4.88352 18.4367 4.72004 18.8415L3.33973 22.2556L7.43892 20.4485C7.73555 20.3176 8.07305 20.3158 8.37144 20.4428C9.77197 21.0405 11.2727 21.3437 12.8319 21.3437C14.6257 21.3437 16.3958 20.9262 17.9506 20.137C18.528 19.8438 19.2329 20.0741 19.526 20.6511C19.8191 21.2281 19.5889 21.9334 19.0119 22.2266C17.1301 23.1824 14.9931 23.6877 12.8319 23.6877C11.1312 23.6877 9.48545 23.3871 7.93155 22.793L1.64432 25.5646C1.49227 25.6314 1.33143 25.6644 1.17191 25.6644V25.6639Z"
                              fill="#4EB8B9"
                            />
                            <path
                              d="M28.8275 30C28.668 30 28.5072 29.9675 28.3551 29.9002L23.4197 27.7245C22.1782 28.1864 20.866 28.4206 19.5112 28.4206C18.8639 28.4206 18.3392 27.8959 18.3392 27.2486C18.3392 26.6013 18.8639 26.0766 19.5112 26.0766C20.725 26.0766 21.8926 25.841 22.9824 25.3757C23.2808 25.2482 23.6183 25.2504 23.9149 25.3814L26.6593 26.5912L25.7738 24.4014C25.6103 23.9967 25.685 23.5344 25.9685 23.2021C27.0719 21.9075 27.6555 20.3584 27.6555 18.7219C27.6555 16.2737 26.3104 13.9926 24.0573 12.6197C23.5045 12.2831 23.3296 11.562 23.6662 11.0091C24.0028 10.4563 24.724 10.2814 25.2768 10.618C28.2339 12.4198 29.9991 15.4489 29.9991 18.7215C29.9991 20.6858 29.3804 22.55 28.2022 24.154L29.9139 28.3881C30.0927 28.8302 29.9855 29.3369 29.6432 29.6687C29.4199 29.8849 29.1259 29.9991 28.8271 29.9991L28.8275 30Z"
                              fill="#4EB8B9"
                            />
                            <path
                              d="M19.5116 28.418C17.5218 28.418 15.5851 27.9008 13.9113 26.9221C12.2677 25.9615 10.9472 24.6022 10.092 22.9912C9.78833 22.4195 10.0059 21.7102 10.5776 21.4065C11.1493 21.1029 11.8586 21.3204 12.1622 21.8921C13.5109 24.4326 16.3959 26.0744 19.5121 26.0744C20.1594 26.0744 20.6841 26.5991 20.6841 27.2464C20.6841 27.8937 20.1594 28.4184 19.5121 28.4184L19.5116 28.418Z"
                              fill="#4EB8B9"
                            />
                            <path
                              d="M12.7735 16.6991C12.1262 16.6991 11.6015 17.2238 11.6015 17.8711C11.6015 18.5184 12.1262 19.0431 12.7735 19.0431C13.4208 19.0431 13.9455 18.5184 13.9455 17.8711C13.9455 17.2238 13.4208 16.6991 12.7735 16.6991Z"
                              fill="#4EB8B9"
                            />
                            <path
                              d="M12.8315 15.2929C12.1842 15.2929 11.6595 14.7682 11.6595 14.1209V14.0453C11.6595 12.7252 12.4351 11.5409 13.6357 11.0285C14.3832 10.7094 14.8697 9.98391 14.8824 9.17356C14.8824 9.16258 14.882 9.15115 14.882 9.14016C14.882 8.00946 13.9622 7.08969 12.8315 7.08969C11.7008 7.08969 10.7811 8.00946 10.7811 9.14016C10.7811 9.78748 10.2563 10.3122 9.60904 10.3122C8.96172 10.3122 8.43702 9.78748 8.43702 9.14016C8.43702 6.71703 10.4084 4.74609 12.8311 4.74609C15.2538 4.74609 17.1988 6.69066 17.2252 9.09138C17.226 9.10764 17.226 9.12346 17.226 9.13972C17.226 10.9037 16.1784 12.4914 14.5559 13.184C14.2202 13.3273 14.0031 13.6656 14.0031 14.0453V14.1209C14.0031 14.7682 13.4784 15.2929 12.8311 15.2929H12.8315Z"
                              fill="#4EB8B9"
                            />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_0_236">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="font-semibold text-[#27233F] text-xl max-[600px]:text-base">
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-5 pt-0">
                    <RichText data={item.answer} className="text-[#27233F] mx-0" />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </Container>

      {/* Contato */}

      <section className="relative w-full h-[750px] bg-custom-gradient max-[900px]:h-fit max-[900px]:py-10 max-[900px]:mt-10">
        <Container className="flex w-full justify-between mt-36 max-[900px]:flex-col max-[900px]:mt-0 max-[900px]:gap-10 max-[900px]:items-center">
          <div className="flex flex-col items-start max-w-[413px] max-[900px]:max-w-full">
            <h5 className="text-[#4EB8B9] text-4xl font-extrabold max-w-[350px] max-[900px]:max-w-full max-[768px]:text-2xl">
              Entre em contato com ICAP
            </h5>
            <p className="text-[#333] mt-7">{page.contact.contactDescription}</p>
            <div className="flex items-center gap-3.5 mt-11">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="30"
                viewBox="0 0 19 30"
                fill="none"
              >
                <path
                  d="M14.0454 26.0016C14.0454 27.0592 11.9755 28.2422 9.2053 28.2422C6.43516 28.2422 4.36528 27.0592 4.36528 26.0016C4.36528 25.2431 5.43016 24.4202 7.05438 24.0154L8.44276 26.4386C8.59938 26.7119 8.8903 26.8805 9.2053 26.8805C9.52035 26.8805 9.81127 26.7119 9.96789 26.4386L11.3563 24.0154C12.9805 24.4202 14.0454 25.2431 14.0454 26.0016ZM9.2053 24.2337L2.76514 12.9938C1.43108 10.6653 1.42475 7.8757 2.74826 5.5316C4.04834 3.22898 6.39104 1.81904 9.01504 1.75992C9.07832 1.75852 9.14178 1.75781 9.2053 1.75781C9.26887 1.75781 9.33227 1.75852 9.39561 1.75992C12.0196 1.81904 14.3623 3.22898 15.6624 5.5316C16.9859 7.8757 16.9796 10.6653 15.6455 12.9938L9.2053 24.2337ZM17.1931 4.66734C15.5852 1.81957 12.6851 0.0757618 9.43516 0.00257874C9.28229 -0.00082016 9.12836 -0.00082016 8.97549 0.00257874C5.72559 0.0757618 2.82543 1.81957 1.21756 4.66734C-0.413747 7.55666 -0.405368 10.996 1.24 13.8676L6.15186 22.4402C5.64291 22.5962 5.1676 22.7913 4.74051 23.0242C3.36502 23.7745 2.60746 24.8319 2.60746 26.0016C2.60746 27.1713 3.36502 28.2287 4.74051 28.979C5.9476 29.6374 7.53321 30 9.2053 30C10.8774 30 12.463 29.6374 13.6701 28.979C15.0456 28.2287 15.8032 27.1713 15.8032 26.0016C15.8032 24.8319 15.0456 23.7745 13.6701 23.0242C13.243 22.7913 12.7677 22.5962 12.2588 22.4402L17.1706 13.8676C18.816 10.996 18.8244 7.55666 17.1931 4.66734Z"
                  fill="#27233F"
                />
              </svg>
              <RichText data={page.contact.address} className="text-[#333]" />
            </div>

            <div className="flex items-center gap-3.5 mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.8462 1C18.4447 1 23 5.55537 23 11.1538"
                  stroke="#27233F"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.8462 4.38477C16.579 4.38477 19.6154 7.42122 19.6154 11.154"
                  stroke="#27233F"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.8462 8.61523C14.2481 8.61523 15.3847 9.75177 15.3847 11.1537"
                  stroke="#27233F"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.75924 8.54348L6.98259 10.3201C7.87058 11.4811 8.91561 12.7182 10.0987 13.9013C11.2811 15.0838 12.5176 16.1283 13.6802 17.0172L15.4565 15.2408C16.1963 14.5011 17.3957 14.5011 18.1355 15.2408L22.1538 19.2592L20.1447 21.2684L19.5205 21.8926C18.2627 23.1504 16.3089 23.357 14.8039 22.4086C12.8205 21.1586 10.0173 19.1778 7.41979 16.5803C4.82226 13.9828 2.84155 11.1796 1.59151 9.19611C0.643047 7.69115 0.849618 5.73738 2.10752 4.47953L2.73168 3.85536L4.74085 1.84619L8.75924 5.86458C9.499 6.6043 9.499 7.80372 8.75924 8.54348Z"
                  stroke="#27233F"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex items-center gap-1">
                {page.contact.phones.map((item, index) => (
                  <a href={`tel:${item.phone.replace(/\D/g, '')}`} key={index}>
                    {index !== 0 && '- '}
                    {item.phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3.5 mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.52989 8.15213C4.06155 7.85942 3.4446 8.0018 3.15189 8.47013C2.85918 8.93847 3.00155 9.55542 3.46989 9.84813L10.4099 14.1856C11.3827 14.7936 12.6171 14.7936 13.5899 14.1856L20.5299 9.84813C20.9982 9.55542 21.1406 8.93847 20.8479 8.47013C20.5552 8.0018 19.9382 7.85942 19.4699 8.15213L12.5299 12.4896C12.2056 12.6923 11.7942 12.6923 11.4699 12.4896L4.52989 8.15213Z"
                  fill="#27233F"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34314 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H3ZM2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44771 22 6V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18V6Z"
                  fill="#27233F"
                />
              </svg>
              <a href={`mailto:${page.contact.email}`}>{page.contact.email}</a>
            </div>

            <div className="flex items-center gap-3.5 mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_0_46)">
                  <path
                    d="M20.4338 3.48523C18.1793 1.23907 15.18 0.00128174 11.9879 0C8.80298 0 5.79895 1.23669 3.52954 3.4823C1.2561 5.73175 0.00292969 8.72113 0 11.8889V11.8925V11.8947C0.000366211 13.812 0.504089 15.7462 1.46027 17.5117L0.0327759 24L6.59583 22.5071C8.25806 23.3448 10.1127 23.7865 11.9833 23.7872H11.9881C15.1725 23.7872 18.1765 22.5504 20.4463 20.3046C22.7217 18.0533 23.9755 15.0677 23.9769 11.898C23.9778 8.75061 22.7197 5.76288 20.4338 3.48523ZM11.9879 21.9141H11.9837C10.3041 21.9133 8.63983 21.4916 7.17114 20.6942L6.86078 20.5258L2.49664 21.5184L3.44458 17.2103L3.26184 16.8951C2.35327 15.3283 1.87317 13.5987 1.87317 11.8927C1.87665 6.37079 6.41364 1.87317 11.9875 1.87317C14.6803 1.87427 17.2104 2.91815 19.1118 4.81219C21.0419 6.73553 22.1045 9.25177 22.1036 11.8975C22.1014 17.4207 17.5635 21.9141 11.9879 21.9141Z"
                    fill="#27233F"
                  />
                  <path
                    d="M8.72577 6.6499H8.20026C8.01733 6.6499 7.72034 6.71838 7.46912 6.99176C7.21771 7.26532 6.50928 7.92651 6.50928 9.27124C6.50928 10.616 7.492 11.9153 7.62897 12.0978C7.76611 12.2802 9.52594 15.1279 12.3132 16.2234C14.6296 17.1338 15.1011 16.9527 15.6038 16.9071C16.1066 16.8617 17.2263 16.2461 17.4548 15.608C17.6833 14.9698 17.6833 14.4227 17.6148 14.3085C17.5461 14.1946 17.3632 14.1263 17.0891 13.9897C16.8148 13.8529 15.4708 13.1805 15.2194 13.0892C14.968 12.9982 14.7853 12.9526 14.6024 13.2263C14.4194 13.4995 13.8809 14.1316 13.7209 14.314C13.561 14.4965 13.401 14.5194 13.1267 14.3826C12.8524 14.2455 11.9783 13.9518 10.9307 13.0209C10.1154 12.2963 9.54956 11.3724 9.38953 11.0988C9.22968 10.8254 9.3725 10.6775 9.51001 10.5411C9.63324 10.4188 9.79968 10.2514 9.93683 10.0919C10.0738 9.93225 10.1128 9.81836 10.2043 9.63599C10.2957 9.45361 10.2499 9.29395 10.1815 9.15735C10.1128 9.02057 9.58655 7.66907 9.34265 7.12854H9.34283C9.13739 6.67334 8.92114 6.65796 8.72577 6.6499Z"
                    fill="#27233F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_46">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <a href={`https://wa.me/${page.contact.whatsapp.replace(/\D/g, '')}`}>
                {page.contact.whatsapp}
              </a>
            </div>

            <div className="flex items-end gap-3.5 mt-8">
              <a href={page.social.facebook} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.9991 0.0049936L14.8868 0C11.3904 0 9.13078 2.31828 9.13078 5.90643V8.62969H6.00158C5.73117 8.62969 5.51221 8.84891 5.51221 9.11932V13.065C5.51221 13.3354 5.73142 13.5544 6.00158 13.5544H9.13078V23.5106C9.13078 23.781 9.34975 24 9.62015 24H13.7029C13.9733 24 14.1922 23.7808 14.1922 23.5106V13.5544H17.851C18.1214 13.5544 18.3404 13.3354 18.3404 13.065L18.3419 9.11932C18.3419 8.98948 18.2902 8.86514 18.1986 8.77326C18.1069 8.68138 17.9821 8.62969 17.8523 8.62969H14.1922V6.32115C14.1922 5.21157 14.4567 4.64829 15.902 4.64829L17.9986 4.64755C18.2687 4.64755 18.4877 4.42833 18.4877 4.15817V0.494367C18.4877 0.224462 18.269 0.00549296 17.9991 0.0049936Z"
                    fill="#27233F"
                  />
                </svg>
              </a>

              <a href={page.social.instagram} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.5 1C3.46243 1 1 3.46243 1 6.5V17.5C1 20.5376 3.46243 23 6.5 23H17.5C20.5376 23 23 20.5376 23 17.5V6.5C23 3.46243 20.5376 1 17.5 1H6.5ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12ZM18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4Z"
                    fill="#27233F"
                  />
                </svg>
              </a>

              <a href={page.social.linkedin} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_0_8)">
                    <path
                      d="M5.58648 7.72119H0.768444C0.554612 7.72119 0.381348 7.89453 0.381348 8.10829V23.5866C0.381348 23.8004 0.554612 23.9737 0.768444 23.9737H5.58648C5.80032 23.9737 5.97358 23.8004 5.97358 23.5866V8.10829C5.97358 7.89453 5.80032 7.72119 5.58648 7.72119Z"
                      fill="#27233F"
                    />
                    <path
                      d="M3.1793 0.0263672C1.42622 0.0263672 0 1.45104 0 3.20219C0 4.95411 1.42622 6.37932 3.1793 6.37932C4.93099 6.37932 6.35605 4.95403 6.35605 3.20219C6.35613 1.45104 4.93099 0.0263672 3.1793 0.0263672Z"
                      fill="#27233F"
                    />
                    <path
                      d="M17.8415 7.33643C15.9064 7.33643 14.4759 8.1683 13.6083 9.11351V8.10822C13.6083 7.89446 13.435 7.72112 13.2212 7.72112H8.60707C8.39324 7.72112 8.21997 7.89446 8.21997 8.10822V23.5865C8.21997 23.8003 8.39324 23.9736 8.60707 23.9736H13.4146C13.6284 23.9736 13.8017 23.8003 13.8017 23.5865V15.9283C13.8017 13.3477 14.5026 12.3424 16.3015 12.3424C18.2607 12.3424 18.4164 13.9541 18.4164 16.0611V23.5866C18.4164 23.8004 18.5897 23.9737 18.8035 23.9737H23.6128C23.8266 23.9737 23.9999 23.8004 23.9999 23.5866V15.0965C23.9999 11.2592 23.2682 7.33643 17.8415 7.33643Z"
                      fill="#27233F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_8">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              <span className="text-[#333333]">/patologiaicap</span>
            </div>

            {page.footer.privacyPolicy && typeof page.footer.privacyPolicy !== 'string' && (
              <a
                href={page.footer.privacyPolicy.url!}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#27233F] mt-16"
              >
                Política de privacidade
              </a>
            )}

            <Link href={'/'} className="mt-16">
              <Image src={'/logo-icap-branco.svg'} alt="" width={219} height={50} />
            </Link>
          </div>

          <FormContact
            terms={
              page.footer.privacyPolicy &&
              typeof page.footer.privacyPolicy !== 'string' &&
              page.footer.privacyPolicy.url
            }
          />
        </Container>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.84865574813!2d-51.18321432373391!3d-29.16913179124218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ea3288145e5b3%3A0xac564fc6a53935e0!2sICAP%20-%20Instituto%20de%20Citologia%20e%20Anatomia%20Patol%C3%B3gica%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1762863717060!5m2!1spt-BR!2sbr"
        className="border-none w-full h-[458px]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  )
}
