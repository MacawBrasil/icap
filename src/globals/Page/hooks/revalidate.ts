import type { GlobalAfterChangeHook } from 'payload'

import { revalidatePath } from 'next/cache'

export const revalidatePage: GlobalAfterChangeHook = ({ context, data }) => {
  if (!context.disableRevalidate) {
    revalidatePath('/')
  }
  return data
}
