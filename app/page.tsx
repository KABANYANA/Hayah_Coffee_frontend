'use client'

import Image from 'next/image'
import { SlideShow } from "./components/Slider/slider";
import Footer from './components/Footer/footer';
import NavigationBar from "./components/Navbar/coffee-search-form"
import CoffeeList from './components/coffee';

export default function Home() {
  return (
    <main className='bg-black'>
      <NavigationBar/>
<SlideShow/>
<CoffeeList /> 
<Footer/>
    </main>
  )
}
