export const getVideoID = (url: string): string | undefined => {
  const match = url.match(/(?:\/|%3D|v=)([0-9A-Za-z_-]{11})(?:[%#?&]|$)/)
  return match ? match[1] : undefined
}
