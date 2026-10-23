// Images exported from Figma live in public/images so their paths stay stable after build.
export const asset = (path) => `${import.meta.env.BASE_URL}images/${path}`
