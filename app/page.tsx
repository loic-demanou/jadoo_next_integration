import Image from 'next/image'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
    {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main> */}
    </>
  )
}
