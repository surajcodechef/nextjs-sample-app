'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../../components/slider/style.css"
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import slider1 from "../../../../public/assets/images/slider-1.jpg"
import slider2 from "../../../../public/assets/images/slider-2.jpg"
import slider3 from "../../../../public/assets/images/slider-3.jpg"
import Link from 'next/link'

function Slider() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide imageOverlay">
          <div className='banner-content absolute top-[40%] left-[15%]'>
            <div className='container'>
                <h2 className='text-6xl text-center font-bold text-dark leading-snug  mb-1'>Spray <br></br> Moisturizing</h2>
                <p className='text-[#4e4e4e] text-center fw-light'>Unique as the coffee beans is intended for this little scoop will  <br></br> make your morning ritual a special.</p>
                <div className='flex justify-center pt-4'>
                  <Link href="" className='border-1 border-[#525252] p-3 mr-3  text-[#4e4e4e] capitalize fw-light rounded-[2vw]'>DISCOVER NOW</Link>
                </div>
            </div>
          </div>
          <Image className='w-full imageOverlay ' src={slider1} alt="slider 1"/>
        </div>
        <div className="embla__slide imageOverlay">
          <div className='banner-content absolute top-[40%] left-[15%]'>
            <div className='container'>
                <h2 className='text-6xl text-center font-bold text-dark leading-snug  mb-1'>Skin <br></br> Anti-aging</h2>
                <p className='text-[#4e4e4e] text-center fw-light'>Unique as the coffee beans is intended for this little scoop <br></br> will make your morning ritual a special</p>
                <div className='flex justify-center pt-4'>
                   <Link href="" className='border-1 border-[#525252] p-3 mr-3  text-[#4e4e4e] capitalize fw-light rounded-[2vw]'>DISCOVER NOW</Link>
                </div>
            </div>
          </div>
           <Image className='w-full' src={slider2} alt=""/>
        </div>
        <div className="embla__slide imageOverlay">
          <div className='banner-content absolute top-[40%] left-[15%]'>
            <div className='container'>
                <h2 className='text-6xl text-center font-bold text-dark leading-snug  mb-1'>Skin <br></br> lightening cream</h2>
                <p className='text-[#4e4e4e] text-center fw-light'>Unique as the coffee beans is intended for this little scoop will  <br></br> make your morning ritual a special</p>
                <div className='flex justify-center pt-4'>
                   <Link href="" className='border-1 border-[#525252] p-3 mr-3  text-[#4e4e4e] capitalize fw-light rounded-[2vw]'>DISCOVER NOW</Link>
                </div>
            </div>
          </div>
           <Image className='w-full' src={slider3} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Slider