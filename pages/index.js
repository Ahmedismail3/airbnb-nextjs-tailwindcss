
import Header from "../components/Header"
import Head from 'next/head'
import Image from 'next/image'
import Banner from "../components/Banner"



function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner/>
    </div>
  )
}  

export default Home