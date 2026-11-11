// Resolves a public/ asset path so it works on Vercel root and on any sub-path.
export const asset = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`
