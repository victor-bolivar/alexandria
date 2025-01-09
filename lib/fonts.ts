import { EB_Garamond, Inter } from 'next/font/google'

export const garamond = EB_Garamond({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
})

export const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
