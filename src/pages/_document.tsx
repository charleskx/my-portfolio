import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br" itemScope itemType="https://schema.org/WebSite">
        <Head>
          <meta name="robots" content="index, follow" />
          <meta name="google-site-verification" content="CprDfDm6DiAE_Zo4lhpjXKgoMjn7Tr8oOE58MncKMFc" />
          <meta name="description" content="Olá, sou Charleston. Desenvolvedor Web Full Stack de sucesso com mais de 10 anos de experiência, formado em Analise e Desenvolvimento de sistemas pela Anhanguera." />
          <meta name="keywords" content="web, desenvolvedor, full stack, front end, back end, mobile, charleston, charleston amaral, currículo dev, internet, html, css, javascript, site, dev" />

          <meta itemProp="name" content="Charleston Amaral - Desenvolvedor Web Full Stack" />
          <meta itemProp="description" content="Olá, sou Charleston. Desenvolvedor Web Full Stack de sucesso com mais de 10 anos de experiência, formado em Analise e Desenvolvimento de sistemas pela Anhanguera." />
          <meta itemProp="image" content="https://user-images.githubusercontent.com/9272098/134539925-8b9f858e-00a2-48c9-9189-f3b0c17f15d2.jpg" />
          <meta itemProp="url" content="https://www.charlestonamaral.com.br" />

          <meta property="og:title" content="Charleston Amaral - Desenvolvedor Web Full Stack" />
          <meta property="og:description" content="Olá, sou Charleston. Desenvolvedor Web Full Stack de sucesso com mais de 10 anos de experiência, formado em Analise e Desenvolvimento de sistemas pela Anhanguera." />
          <meta property="og:image" content="https://user-images.githubusercontent.com/9272098/134539925-8b9f858e-00a2-48c9-9189-f3b0c17f15d2.jpg" />
          <meta property="og:image:alt" content="Foto de um homem sorridente" />
          <meta property="og:url" content="https://www.charlestonamaral.com.br" />
          <meta property="og:site_name" content="Charleston Amaral" />
          <meta property="og:locale" content="pt_BR" />

          <meta property="article:author" content="https://www.facebook.com/charleston.amaral" />
          <meta property="article:publisher" content="https://www.facebook.com/charleston.amaral" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="https://www.charlestonamaral.com.br" />
          <meta property="twitter:title" content="Charleston Amaral - Desenvolvedor Web Full Stack" />
          <meta property="twitter:description" content="Olá, sou Charleston. Desenvolvedor Web Full Stack de sucesso com mais de 10 anos de experiência, formado em Analise e Desenvolvimento de sistemas pela Anhanguera." />
          <meta property="twitter:image" content="https://user-images.githubusercontent.com/9272098/134539925-8b9f858e-00a2-48c9-9189-f3b0c17f15d2.jpg" />
          <meta property="twitter:url" content="https://www.charlestonamaral.com.br" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="base" href="https://www.charlestonamaral.com.br" />
          <link rel="canonical" href="https://www.charlestonamaral.com.br" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}