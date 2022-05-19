
import Header from "../components/Header"
import Head from 'next/head'
import Image from 'next/image'
import Banner from "../components/Banner"



function Home(props) {
  props.exploreData
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner/>
<main className="max-w-7xl mx-auto px-8 sm:p-16 "> 
<section className="pt-6">

<h2 className="text-4xl font-semibold pb-5">
  Explore Nearby
</h2>


{/* {pull api data} */}


</section>


</main>


    </div>
  )
}  

export default Home
export async function getStaticProps (params) {
const exploreData = await fetch ('https://links.papareact.com/pyp').then(res => res.json());

return {
  props:{
    exploreData
  }
}

}