
import Header from "../components/Header"
import Head from 'next/head'
import Image from 'next/image'
import Banner from "../components/Banner"
import Smallcard from "../components/Smallcard"


function Home({exploreData}) {
exploreData

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


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >  
{exploreData?.map(({img, distance, location}) =>(
<Smallcard 
key={img}
img={img} 
distance={distance} 
location={location}
  />
  
))}



</div>




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