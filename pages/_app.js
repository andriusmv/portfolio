import 'nextra-theme-docs/style.css'
import Head from 'next/head'
import Script from 'next/script'

export default function Nextra({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  <Head>
    <title>Andrés Moreno Portfolio</title>
        <Script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id="ccaaeca6-9b78-4c2f-8daf-81b9b7e58cfd"
        />
</Head>
  )
}
