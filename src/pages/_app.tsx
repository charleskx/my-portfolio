import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import Script from 'next/script'

import '../../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-QDL7WSJ8RW" strategy="afterInteractive"></Script>
      <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: 
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-QDL7WSJ8RW');`
        }} />

      <ThemeProvider attribute='class' defaultTheme='light'>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
