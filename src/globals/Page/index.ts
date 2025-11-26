import { GlobalConfig } from 'payload'
import { revalidatePage } from './hooks/revalidate'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { VideoBlock } from '@/utilities/videoBlock'
import { ImageBlock } from '@/utilities/imageBlock'
import { VideoUrlBlock } from '@/utilities/videoUrlBlock'

export const Page: GlobalConfig = {
  slug: 'page',
  access: {
    read: () => true,
  },
  label: 'Página Inicial',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'header',
          label: 'Cabeçalho',
          fields: [
            {
              name: 'doctorAccess',
              label: 'Acesso do Médico',
              type: 'text',
              required: true,
            },
            {
              name: 'patientAccess',
              label: 'Acesso do Paciente',
              type: 'text',
              required: true,
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Dimensão 219x50',
              },
            },
          ],
        },
        {
          name: 'hero',
          label: 'Hero',
          fields: [
            {
              name: 'heroTitle',
              label: 'Título do Hero',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [...rootFeatures]
                },
              }),
              required: true,
            },
            {
              name: 'heroDescription',
              label: 'Descrição do Hero',
              type: 'textarea',
              required: true,
            },
            {
              name: 'heroImage',
              label: 'Imagem do Hero',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Dimensão 825x685',
              },
            },
          ],
        },
        {
          name: 'exams',
          label: 'Exames',
          fields: [
            {
              name: 'examsDescription',
              label: 'Descrição da seção de exames',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [...rootFeatures]
                },
              }),
              required: true,
            },
            {
              name: 'itens',
              label: 'Itens',
              type: 'array',
              required: true,
              fields: [
                {
                  name: 'icon',
                  label: 'Ícone',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  admin: {
                    description: 'Dimensão 32x32',
                  },
                },
                {
                  name: 'title',
                  label: 'Título',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  label: 'Descrição',
                  type: 'richText',
                  editor: lexicalEditor({
                    features: ({ rootFeatures }) => {
                      return [...rootFeatures]
                    },
                  }),
                  required: true,
                },
                {
                  name: 'mediaLayout', // required
                  required: true,
                  type: 'blocks', // required
                  label: 'Layout de mídia (Imagem, Vídeo ou URL)',
                  maxRows: 1,
                  blocks: [
                    // required
                    VideoBlock,
                    ImageBlock,
                    VideoUrlBlock,
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'about',
          label: 'Sobre',
          fields: [
            {
              name: 'aboutTitle',
              label: 'Título do Sobre',
              type: 'textarea',
              required: true,
            },
            {
              name: 'aboutDescription',
              label: 'Descrição do Sobre',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [...rootFeatures]
                },
              }),
              required: true,
            },
            {
              name: 'aboutImage',
              label: 'Imagem do Sobre',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Dimensão 432x427',
              },
            },
            {
              name: 'items',
              type: 'array',
              required: true,
              minRows: 3,
              maxRows: 3,
              fields: [
                { name: 'title', label: 'Título', type: 'text', required: true },
                {
                  name: 'image',
                  label: 'Imagem',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  admin: {
                    description: 'Dimensão 50x50',
                  },
                },
              ],
            },
            {
              name: 'structure',
              type: 'array',
              label: 'Nossa Estrutura',
              required: true,
              fields: [
                {
                  name: 'image',
                  label: 'Imagem',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  admin: {
                    description: 'Dimensão 413x250',
                  },
                },
              ],
            },
            {
              name: 'agreements',
              type: 'array',
              label: 'Convênios',
              required: true,
              fields: [
                {
                  name: 'image',
                  label: 'Imagem',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  admin: {
                    description: 'Dimensão 164x164',
                  },
                },
              ],
            },
          ],
        },
        {
          name: 'aboutDoctor',
          label: 'Sobre a Doutora',
          fields: [
            {
              name: 'image',
              label: 'Imagem',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Dimensão 584x862',
              },
            },
            {
              name: 'description',
              label: 'Descrição',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [...rootFeatures]
                },
              }),
              required: true,
            },
            {
              name: 'description2',
              label: 'Descrição 2',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [...rootFeatures]
                },
              }),
              required: true,
            },
          ],
        },
        {
          name: 'certifications',
          label: 'Certificações',
          fields: [
            {
              name: 'certificationDescription',
              label: 'Descrição da Certificação',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [...rootFeatures]
                },
              }),
              required: true,
            },
          ],
        },
        {
          name: 'faq',
          label: 'Perguntas Frequentes',
          fields: [
            {
              name: 'section',
              label: 'Seção',
              type: 'array',
              required: true,
              fields: [
                {
                  name: 'title',
                  label: 'Título',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'aswersAndQuestions',
                  label: 'Perguntas e Respostas',
                  type: 'array',
                  required: true,
                  fields: [
                    {
                      name: 'question',
                      label: 'Pergunta',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'answer',
                      label: 'Resposta',
                      type: 'richText',
                      editor: lexicalEditor({
                        features: ({ rootFeatures }) => {
                          return [...rootFeatures]
                        },
                      }),
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'footer',
          label: 'Rodapé',
          fields: [
            {
              name: 'footerLogo',
              label: 'Logo do Rodapé',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Dimensão 220x50',
              },
            },
            {
              name: 'footerTitle',
              label: 'Título do Rodapé',
              type: 'textarea',
              required: true,
            },
            {
              name: 'footerDescription',
              label: 'Descrição do Rodapé',
              type: 'textarea',
              required: true,
            },
            {
              name: 'privacyPolicy',
              label: 'Política de Privacidade',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'terms',
              label: 'Termos de Uso',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        {
          name: 'contact',
          label: 'Contato',
          fields: [
            {
              name: 'contactDescription',
              label: 'Descrição do Contato',
              type: 'textarea',
              required: true,
            },
            {
              name: 'address',
              label: 'Endereço',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [...rootFeatures]
                },
              }),
              required: true,
            },
            {
              name: 'email',
              label: 'Email',
              type: 'email',
              required: true,
            },
            {
              name: 'recipientEmail',
              label: 'Email do destinatário',
              type: 'email',
              required: true,
            },
            {
              name: 'phones',
              label: 'Telefones',
              type: 'array',
              fields: [
                {
                  name: 'phone',
                  label: 'Telefone',
                  type: 'text',
                  required: true,
                },
              ],
              required: true,
            },
            {
              name: 'whatsapp',
              label: 'WhatsApp',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'social',
          label: 'Redes Sociais',
          fields: [
            {
              name: 'facebook',
              label: 'Facebook',
              type: 'textarea',
              required: true,
            },
            {
              name: 'instagram',
              label: 'Instagram',
              type: 'textarea',
              required: true,
            },
            {
              name: 'linkedin',
              label: 'LinkedIn',
              type: 'textarea',
              required: true,
            },
          ],
        },
        {
          name: 'seo',
          label: 'SEO',
          fields: [
            {
              name: 'title',
              label: 'Título',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              label: 'Descrição',
              type: 'textarea',
              required: true,
            },
            {
              name: 'keywords',
              label: 'Palavras-chave',
              type: 'array',
              fields: [
                {
                  name: 'keyword',
                  label: 'Palavra-chave',
                  type: 'text',
                  required: true,
                },
              ],
              required: true,
            },
            {
              name: 'image',
              label: 'Imagem de Compartilhamento (Open Graph)',
              type: 'upload',
              relationTo: 'media',
              required: false,
              admin: {
                description:
                  'Imagem que será exibida quando o site for compartilhado nas redes sociais. Tamanho recomendado: 1200x630px',
              },
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidatePage],
  },
}
