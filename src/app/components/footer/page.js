'use client'
import Link from 'next/link'
import React from 'react'
import logo from "../../../../public/assets/images/circle.png"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useSelector } from 'react-redux'

function Page() {
    const {product} = useSelector((state)=>state.top)
   const uniqueCategories1 = [...new Set(product.map(item => item.category))];
  return (
    <div className='footer w-full py-[100px]'>
        <div className='container w-[1340px] mx-auto '>
            <div className='grid grid-cols-4 gap-3'>
                <div>
                   <Link href="/" title="Logo">
                    <Image className="filter-gray" width={120} height={100} alt="Logo" src={logo}/>
                </Link>
                <div className='pt-4 text-slate-500 text-sm'>
                    <p className='mb-2'>Call us: 888.312.2456 - 666.010.1238</p>
                    <p  className='mb-2'>Text: 200.490.1520 - 666.010.1238</p>
                    <p  className='mb-2'>Email: support@domain.vn</p>
                </div>
                </div>
                <div>
                    <h5 className='h5'>Important Link</h5>
                    <ul className='pl-0'>
                        <li className='py-1'>
                            <Link className='inline-block text-slate-500 text-sm ' href="/" title='Home'>Home</Link>
                        </li>
                        <li className='py-1'>
                             <Link className='inline-block text-slate-500 text-sm ' href="/" title='About us'>About us</Link>
                        </li>
                        <li className='py-1'>
                             <Link className='inline-block text-slate-500 text-sm ' href="/" title='Service'>Service</Link>
                        </li>
                        <li className='py-1'>
                             <Link className='inline-block text-slate-500 text-sm ' href="/" title='Product'>Product</Link>
                        </li>
                        <li className='py-1'>
                             <Link className='inline-block text-slate-500 text-sm ' href="/" title='Blog'>Blog</Link>
                        </li>
                        <li className='py-1'>
                             <Link className='inline-block text-slate-500 text-sm ' href="/" title='Contact Us'>Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 className='h5'>Products</h5>
                    <ul className='pl-0'>
                        {
                            uniqueCategories1.map((category,index)=>{
                                return (
                                     <li key={index} className='py-1'>
                            <Link className='inline-block text-slate-500 text-sm capitalize' href="/" title={category}>{category}</Link>
                        </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <h5 className='h5 mb-4'>NewsLatter SignUp</h5>
                    <form>
                    <label className="block">
                        <span className="block text-sm  font-medium text-slate-500 mb-3">Sign up for the weekly newsletter and build better ecommerce stores.</span>
                        <input placeholder='Enter your email' className="border-slate-200 placeholder-slate-400 border p-2"/>
                        <Button className="cursom-pointer rounded-none py-4">Subscribe</Button>
                    </label>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page