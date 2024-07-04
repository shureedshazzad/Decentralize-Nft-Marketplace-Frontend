
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {MoralisProvider} from "react-moralis"
import Head from 'next/head';
import { NotificationProvider } from "web3uikit"


import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"


import Header from '../components/Header'


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.NEXT_PUBLIC_SUBGRAPH_URL,
})




function MyApp({ Component,pageProps }){

  return(
    <div>
     <Head>
       <title>
         Nft MarketPlace
       </title>
       <meta name="decription" content='Nft MarketPlace'/>
       <link rel="icon" href="/favicon.ico"/>
      </Head>
      <MoralisProvider initializeOnMount = {false}>
        <ApolloProvider client={client}>
         <NotificationProvider>
           <Header/>
           <Component {...pageProps} />
         </NotificationProvider>
        </ApolloProvider>
     </MoralisProvider>
    </div>
  )

}

export default MyApp