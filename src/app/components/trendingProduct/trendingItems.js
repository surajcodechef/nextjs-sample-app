'use client'

import React, { useEffect } from 'react'
import { useState } from "react"
 import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { Eye, ShoppingCart, ShoppingBag, SquarePlus, SquareMinus  } from 'lucide-react';
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import {loadingITems} from "./trendingSlice"
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger,} from "@/components/ui/dialog"
function TrendingProduct() {
  const{trendingItems} = useSelector((state)=>state.fregrance)

  const [hoveredIndex, setHoveredIndex] = useState(null)

 const [counter,setCounter] =  useState(0);
  const increaseQuantity = () =>{
    setCounter(counter+1);
  }

  const decreaseQuantity = () =>{
    setCounter(counter-1);
  }

  const inputQuantity = () =>{

  }

  const dispatch =  useDispatch();
     useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then(function(response){
         dispatch(loadingITems(response.data.products));
    }).catch(function(error){
        console.log(error)
    })
   },[])

  return (
    <div className='trendingProduct  relative left-0 right-0 -bottom-[-100px]'>
        <div className='container max-w-[1349px]  mx-auto bg-white'>
            <div className="w-full text-center py-[50px] ">
                <h1 className="text-center text-4xl mb-3 font-bold">Trending Products</h1>
                <p className="text-[grey] fw-light text-sm">Commodo sociosqu venenatis cras dolor sagittis integer luctus maecenas</p>
            </div>
             <div className="w-full px-8">
          <Carousel opts={{ align: "start", }}className="w-full">
      <CarouselContent className="p-0">
        {Array.from(trendingItems).map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1 relative" 
             onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            >
              {
                hoveredIndex === index && (
                  <div className="cartButtons absolute left-0 right-0 top-1/2 z-10 text-center">
                         <Button  aschild="true" className="cursor-pointer mr-2 rounded-none border border-[#333] h4" variant="outline">
                          <ShoppingCart stroke='black' />
                        </Button>
                     <Dialog>
                       
                       
                      <DialogTrigger asChild>
                        <Button  data-slot="button"  className="cursor-pointer mr-2 rounded-none border border-[#333] h4" variant="outline">
                          <Eye stroke='black' />
                        </Button>
                      </DialogTrigger>
                      
                      <DialogContent className="sm:max-w-[50%]">
                        <DialogHeader>
                          <DialogTitle className="hidden"></DialogTitle>
                          <DialogDescription className="hidden"></DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-2 gap-4 py-4">
                          <div className='a-section relative'>
                              <div className='item-image'>
                                <Link href="/" className='d-block'>
                                  <Image width={500} height={500} className='w-full' src={item.thumbnail} alt={item.title} />
                                </Link>
                              </div>
                            </div>
                          <div>
                               <h3 className='text-xl'>{item.title}</h3>
                                <p className='text-gray-600 fw-light my-1'>{item.description}</p>
                                <div className='text-[black] block my-1'><span className='text-2xl  font-bold'>
                                  Rs. {Math.floor(item.price)}
                                </span>
                                  {
                                    item.discountPercentage > 1 ?
                                      <div className='text-md  text-slate-500 inline-block ml-2 fw-light'>
                                        (<del>{Math.floor(item.discountPercentage)} % off</del>)</div>
                                      : null
                                  }
                                </div>
                                <div className='quantity flex justify-start items-center'>
                                  <button onClick={decreaseQuantity} data-slot="button" className='mr-2'><SquareMinus fill='gray' stroke='white' width={48} height={48} />
                                  </button>
                                  
                                  <input onChange={inputQuantity} data-slot="text" value={counter} name="price" id="price" className="w-[70px] block text-center py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border" placeholder="1"/>

                                  <button onClick={increaseQuantity} data-slot="button" className='mr-2'><SquarePlus fill='gray' stroke='white' width={48} height={48} />
                                  </button>
                                </div>
                              <div className='grid grid-cols-2 gap-2 py-4'>
                                   <Button  aschild="true"  data-slot="button" className='mr-2 rounded-none'>
                                    <ShoppingCart   size={22}   /> Add to Cart
                                  </Button>
                                    <Button  aschild="true"  data-slot="button" className="rounded-none bg-[#95928F]" >
                                     <ShoppingBag    size={22}  /> Buy Now
                                  </Button>
                              </div>
                               
                                <p className=' my-1 text-sm '><span className='text-slate-500 inline-block my-1'>Stock</span> : {item.stock}</p>
                                <p className=' my-1 text-sm '><span className='text-slate-500 inline-block my-1'>SKU</span> : {item.sku}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    </div>
                )
                }
                
              <Card className="p-0 shadow-none border-0">
                <CardContent className="p-0">
                  <div className='a-section relative'>
                    <div className={item.availabilityStatus == "Low Stock" ? `absolute top-[10px] left-[20px] px-2 py-1 bg-[#ffe390] text-sm rounded`:`absolute top-[10px] left-[20px] px-2 py-1 bg-[#d1e7d1] text-sm rounded` }>{item.availabilityStatus}</div>
                    <Link className='item-image' href="/" title={item.title}>
                      <Image src={item.thumbnail} alt={item.title} className='w-full' width={1000} height={1000}/>
                    </Link>
                  </div>
                </CardContent>
                 <CardContent className="py-2 text-center">
                      <h3 className='text-md'>{item.title}</h3>
                      <div className='text-[black] block'>Rs. {Math.floor(item.price)}
                        {
                          item.discountPercentage > 1 ? 
                          <div className='text-xs text-[grey] inline-block ml-2'>
                            (<del>{Math.floor(item.discountPercentage)} % off</del>)</div>
                            :null
                        }
                      </div>
                    </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
        </div>
    </div>
    </div>
  )
}

export default TrendingProduct;