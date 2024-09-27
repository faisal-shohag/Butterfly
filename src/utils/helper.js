export const getURL = (path='') => {
    let url = process?.env?.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.trim() !== ''
    ? process.env.NEXT_PUBLIC_SITE_URL 
    :
    process?.env.NEXT_PUBLIC_VERCEL_URL &&
    process.env.NEXT_PUBLIC_VERCEL_URL.trim() !== ''
    ? process.env.NEXT_PUBLIC_VERCEL_URL
    : 'http://localhost:3000/'

    url = url.replace(/\/+$/, '')
    url = url.includes('http') ? url : `https://${url}`
    path = path.replace(/^\/+/, '')
    return  path ? `${url}/${path}` : url 
}