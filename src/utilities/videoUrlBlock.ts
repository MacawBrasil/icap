import { Block } from 'payload'

export const VideoUrlBlock: Block = {
  slug: 'VideoUrl',
  fields: [
    // required
    {
      name: 'url',
      type: 'text',
      required: true,
    },
  ],
}
