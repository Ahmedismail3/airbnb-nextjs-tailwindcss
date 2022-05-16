
import Header from "../components/Header"
import Head from 'next/head'
import Image from 'next/image'



function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}  

export default Home