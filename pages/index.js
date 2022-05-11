import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
// import styles from '../styles/Home.module.css'
// import BgImg from '../Images/BgImage.png'
import Section from '../components/Section'

export default function Home() {
  return (
    <div className="bg-[url('../Images/BgImage.png')] bg-cover bg-no-repeat w-full h-full pt-4">
      <Head>
        <title>1ClubCommunity</title>
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Wet+Paint&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
      </Head>

      {/* Header */}
      <Header />
      
      <Section />

      
    </div>
  )
}
