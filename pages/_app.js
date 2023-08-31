import 'nextra-theme-docs/style.css'
import Script from 'next/script'

export const metadata = {
  title: 'Andrés Moreno V. - Portfolio',
  description: 'GIS Analysis, Digital Twins, 3d Web Development And More.',
  image: 'https://i.imgur.com/6Tb6vMd.jpg',
  url: 'https://andresmoreno.vercel.app/',
}

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:type" content="website" />
        <meta itemProp="image" content={metadata.image} />
        <meta itemProp="name" content={metadata.description} />
        <meta itemProp="description" content={metadata.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <Script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id="ccaaeca6-9b78-4c2f-8daf-81b9b7e58cfd"
        />
      </head>
      <Component {...pageProps} />
    </>
  )
}
