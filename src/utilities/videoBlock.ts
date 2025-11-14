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
    },
  ],
}
