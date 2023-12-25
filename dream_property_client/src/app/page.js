
import Head from "next/head"
import HomePage from "./homePage/page"

export default function Home() {
  return (
    <>
      <Head>
        <title> Dream Property </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePage />
      </main>
    </>
  )
}
