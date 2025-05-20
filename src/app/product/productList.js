"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import axios from 'axios'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { Eye, ShoppingCart, ShoppingBag, SquarePlus, SquareMinus  } from 'lucide-react';
import Image from 'next/image'
import "../../app/globals.css"
import Link from 'next/link'
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger,} from "@/components/ui/dialog"
import { productLoading } from '../components/productSlider/topSellingSlice'

function ProductList() {

const{product} = useSelector((state)=>state.top)
  const [hoveredIndex, setHoveredIndex] = useState(null)

    const dispatch = useDispatch();

  const [counter,setCounter] =  useState(0);
  const increaseQuantity = () =>{
    setCounter(counter+1);
  }

  const decreaseQuantity = () =>{
    setCounter(counter-1);
  }

  const inputQuantity = () =>{

  }

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(function (response) {
        dispatch(productLoading(response.data.products))
      }).catch(function (error) {
        console.log(error)
      })
  }, [dispatch])

  return (
   <div className='product-list'>
         <div className='container max-w-[1349px]  mx-auto bg-white'>
            <div className="w-full text-center py-[50px] ">
                <h1 className="text-center text-4xl mb-3 font-bold">All Products</h1>
            </div>
            <div className='w-full grid grid-cols-4 gap-3'>
               {
                product.map((item,index)=>{
                    return (
                         <div key={index}
                  className="p-1 relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {hoveredIndex === index && (
                    <div  className="cartButtons absolute left-0 right-0 top-1/2 z-10 text-center">
                        <Button   aschild="true" data-slot="button" className="cursor-pointer mr-2 rounded-none border border-[#333] h4" variant="outline"><ShoppingCart /></Button>
                     <Dialog className="rounded-none">
                      
                        <DialogTrigger asChild>
                          <Button   data-slot="button"   className="cursor-pointer mr-2 rounded-none border border-[#333] h4" variant="outline"><Eye /></Button>
                       </DialogTrigger>
                      <DialogContent className="sm:max-w-[50%] ">
                        <DialogHeader>
                          <DialogTitle className="hidden"></DialogTitle>
                          <DialogDescription className="hidden"></DialogDescription>
                        </DialogHeader>
                        <div  className="grid grid-cols-2 gap-4 py-4">
                          <div className='a-section relative'>
                              <div className='item-image'>
                                <Link href="/" className='d-block'>
                                  <Image width={500} height={500} className='w-full' src={item.thumbnail} alt={item.title} />
                                </Link>
                              </div>
                            </div>
                          <div>
                               <h3 className='text-xl'>{item.title}</h3>
                                <p className='text-gray-600  my-1 fw-light'>{item.description}</p>
                                <div className='text-[black] block my-1'><span className='text-2xl  font-bold'>
                                  Rs.{Math.floor(item.price)}
                                </span>
                                  {
                                    item.discountPercentage > 1 ?
                                      <div className='text-md  text-slate-500 inline-block ml-2'>
                                        (<del>{Math.floor(item.discountPercentage)} % off</del>)</div>
                                      : null
                                  }
                                </div>
                                <div className='quantity flex justify-start items-center'>
                                  <button onClick={decreaseQuantity} data-slot="button" className='mr-2'><SquareMinus fill='gray' stroke='white' width={48} height={48} /></button>
                                  
                                  <input onChange={inputQuantity} data-slot="text" value={counter} name="price" id="price" className="w-[70px] block text-center py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border" placeholder="1"/>

                                  <button onClick={increaseQuantity} data-slot="button" className='mr-2'><SquarePlus fill='gray' stroke='white' width={48} height={48} /></button>
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
                  )}
                  <Card className="p-0 shadow-none border-0	">
                    <CardContent className="p-0  ">
                      <div className='a-section relative'>
                        <div className={item.availabilityStatus == "Low Stock" ? `absolute top-[10px] left-[20px] px-2 py-1 bg-[#ffe390] text-sm rounded` : `absolute top-[10px] left-[20px] px-2 py-1 bg-[#d1e7d1] text-sm rounded`}>{item.availabilityStatus}</div>
                        <div className='item-image'>
                          <Link href="/product/detail" className='d-block'>
                            <Image width={500} height={500} className='w-full' src={item.thumbnail} alt={item.title} />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                    <CardContent className="py-2 text-center">
                      <h3 className='text-md'>{item.title}</h3>
                      <div className='text-[black] block'>Rs. {Math.floor(item.price)}
                        {
                          item.discountPercentage > 1 ?
                            <div className='text-xs text-[grey] inline-block ml-2'>
                              (<del>{Math.floor(item.discountPercentage)} % off</del>)</div>
                            : null
                        }
                      </div>
                    </CardContent>
                  </Card>
                </div>
                    )
                })
               }
            </div>
        </div>
    </div>
  )
}

export default ProductList