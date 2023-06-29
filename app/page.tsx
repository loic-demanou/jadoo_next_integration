import Image from 'next/image'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Category from './components/category/Category'
import TopSelling from './components/topSelling/TopSelling'
import EasyAndFast from './components/easyAndFast/EasyAndFast'

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Category />
      <TopSelling />
      <EasyAndFast />
    {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main> */}
    </>
  )
}
