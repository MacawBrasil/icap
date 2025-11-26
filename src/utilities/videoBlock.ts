import { Block } from 'payload'

export const VideoBlock: Block = {
  slug: 'Video',
  fields: [
    // required
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Dimensão 847x440 | Tamanho máximo 10MB',
      },
    },
  ],
}
