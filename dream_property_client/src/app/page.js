import Banner from "@/components/banner"
import PropertyItems from "@/components/property-items"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title> Dream Property </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container flex">
          <div className="py-5"> Real Estate </div>
          
          <div className="flex">
            <div> Home </div>
            <button className="btn-1 ml-3 px-4 py-1"> Add Property </button>
          </div>
        </div>

        <Banner />
        <PropertyItems />
      </main>
    </>
  )
}
