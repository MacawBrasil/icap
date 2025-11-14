import { Block } from 'payload'

export const ImageBlock: Block = {
  slug: 'Image',
  fields: [
    // required
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
