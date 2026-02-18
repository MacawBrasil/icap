import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function youtubeEmbed(url: string) {
  const youtubeUrl = new URL(url)
  let videoId: string | undefined

  if (youtubeUrl.hostname.endsWith('youtube.com')) {
    if (youtubeUrl.pathname.includes('/shorts/')) {
      videoId = youtubeUrl.pathname.split('/')[2]
    } else {
      videoId = youtubeUrl.searchParams.get('v') ?? undefined
    }
  } else if (youtubeUrl.hostname === 'youtu.be') {
    videoId = youtubeUrl.pathname.substring(1)
  }

  if (videoId) {
    return `https://www.youtube-nocookie.com/embed/${videoId}`
  }

  return url
}
