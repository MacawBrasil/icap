import { Page } from '@/payload-types'
import { Container } from './container'
import RichText from './RichText'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { Media } from './Media'
import Image from 'next/image'

interface ExamesProps {
  data: Page
}

export function Exames({ data }: ExamesProps) {
  return (
    <div className="pb-12" id="exames">
      <Container className="flex justify-between max-[1079px]:flex-col max-[1079px]:gap-10">
        <div className="max-w-[370px] flex flex-col gap-3">
          <span className="text-[#4EB8B9] text-4xl font-extrabold max-[768px]:text-2xl">
            Exames
          </span>
          <RichText data={data.exams.examsDescription} className="text-[#666666]" />
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4 max-w-[847px] max-[1279px]:max-w-[647px] max-[1079px]:max-w-full"
          defaultValue="item-1"
        >
          {data.exams.itens.map((item, index) => (
            <AccordionItem
              key={item.id || index}
              value={`item-${index + 1}`}
              className="border-none bg-white rounded-[10px] shadow-[0_5px_30px_0_rgba(78,184,185,0.50)] overflow-hidden"
            >
              <AccordionTrigger className="py-5 px-8 hover:no-underline data-[state=open]:rounded-b-none font-semibold text-[#27233F] text-xl max-[768px]:text-base">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-5 pt-0">
                <RichText data={item.description} className="text-[#666666] mb-4" />

                {/* Media Layout Blocks */}
                {item.mediaLayout && item.mediaLayout.length > 0 && (
                  <div className="mt-4 ">
                    {item.mediaLayout.map((block, blockIndex) => {
                      switch (block.blockType) {
                        case 'Image':
                          return (
                            <div
                              key={block.id || blockIndex}
                              className="relative w-full h-[441px] rounded-lg overflow-hidden max-[1280px]:h-80 max-[1079px]:h-[441px] max-[768px]:h-[300px]"
                            >
                              {typeof block.file !== 'string' && (
                                <Image
                                  src={block.file.url!}
                                  alt={block.file.alt}
                                  fill
                                  className="object-cover"
                                />
                              )}
                            </div>
                          )

                        case 'Video':
                          return (
                            <div
                              key={block.id || blockIndex}
                              className="relative w-full h-[441px] rounded-lg overflow-hidden"
                            >
                              {typeof block.file !== 'string' && block.file.url && (
                                <video
                                  controls
                                  className="w-full h-full object-cover"
                                  src={block.file.url}
                                >
                                  Seu navegador não suporta o elemento de vídeo.
                                </video>
                              )}
                            </div>
                          )

                        case 'VideoUrl':
                          return (
                            <div
                              key={block.id || blockIndex}
                              className="relative w-full h-[441px] rounded-lg overflow-hidden"
                            >
                              <iframe
                                src={block.url}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          )

                        default:
                          return null
                      }
                    })}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </div>
  )
}
