import '../styles/globals.css'
import {ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Mumbai}
      chainRpc={{
        [ChainId.Mumbai]:'https://polygon-mumbai.infura.io/v3/4fa55521d0f647f28c1a179e85f454da'
      }}
    >
      <ThemeProvider enableSystem={true} attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
