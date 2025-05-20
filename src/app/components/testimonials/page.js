import * as React from "react"
 import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from 'lucide-react';

import testimonilIc from "../../../../public/assets/images/testimonial-ic.png"
import Image from "next/image"

function Testimonial() {
    console.log(testimonilIc)
  return (
    <div className='testimonial py-[100px] relative'>
        <div className='container max-w-[1349px] mx-auto'>
            <div className='w-full'>
                <Carousel className="w-full max-w-xl mx-auto">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                
                                <div className="flex justify-center mb-4">
                                    <Image src={testimonilIc} alt=""/>
                                </div>
                             <p className="text-[grey] text-md fw-light">“ Congue condimentum et non eu arcu sociis aenean vivamus quisque. Porta purus urna. Massa id blandit enim cursus ante. Nec consectetuer imperdiet ipsum. Magnis rutrum tristique rutrum lobortis nulla nec hendrerit convallis suspendisse... ”</p>

                             <div className="flex justify-center items-center">
                                <Star fill="gold" stroke="transparent" />
                                <Star fill="gold" stroke="transparent"/>
                                <Star fill="gold" stroke="transparent"/>
                                <Star fill="gold" stroke="transparent"/>
                                <Star fill="gold" stroke="transparent"/>
                            </div>
                            <div className="user_name text-center py-3">
                                <h5 className="testimonial__name mb-0 text-2xl">Mason Robinson</h5>
                                <div className="testimonial__name mb-1 text-[gray] fw-light">Marketing Company Director</div>
                            </div>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    </Carousel>
            </div>
        </div>
    </div>
  )
}

export default Testimonial