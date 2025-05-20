'use client'
import React, { useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {blogLoading} from "./blogSlice"
import { ThumbsUp,ThumbsDown } from 'lucide-react';

function BlogList() {
    const dispatch = useDispatch();
    const {blog} = useSelector((state)=>state.blogshow)

     useEffect(()=>{
    axios.get('https://dummyjson.com/posts')
    .then(function(response){
         dispatch(blogLoading(response.data.posts))
    }).catch(function(error){
        console.log(error)
    })
   },[])


  return (
    <div className='trendingProduct'>
        <div className='container max-w-[1349px]  mx-auto bg-white'>
            <div className="w-full text-center py-[50px] ">
                <h1 className="text-center text-4xl mb-3 font-bold">Blog</h1>
                <p className="text-[grey] fw-light text-sm">Commodo sociosqu venenatis cras dolor sagittis integer luctus maecenas</p>
            </div>
             <div className="w-full px-8 grid grid-cols-3 gap-3">
                   {
                    blog.slice(0,3).map((item,index)=>{
                        return (
                            <Card key={index}>
                            <CardContent>
                                    <div className='blog-image'></div>
                                    <div className='blog-info'>
                                        <p>{item.title}</p>
                                        <div className='flex around pt-3'>
                                            <div className='flex pr-3 text-sm'>
                                                <ThumbsUp  stroke='#4CB8E7' width="20" className='mr-2' />  {item.reactions.likes}
                                            </div>
                                            <div className='flex text-sm'>
                                                <ThumbsDown stroke='gray' width="20" className='mr-2' /> {item.reactions.dislikes}
                                            </div>
                                        </div>
                                        <p className='text-sm text-[grey] fw-light mt-3'>
                                            {item.body.substring(0,150)+"..."}
                                        </p>
                                        <Link href='/blog-detail' className='mt-3 text-blue-500 text-xs fw-light' title="Read More">Read More</Link>
                                        <div>
                                            <p className='text-sm my-2'>Tags : </p>
                                                {
                                                    item.tags.map((tags,index)=>{
                                                        return (
                                                            <div key={index} className='fw-light capitalize text-xs px-2 mr-2 py-1 inline-block rounded bg-[#f3f3f3] text-[#7b7b7b]'>{tags}</div>
                                                        )
                                                    })
                                                }
                                            
                                        </div>
                                    </div>
                            </CardContent>
                        </Card>
                        )
                    })
                   }
            </div>
        </div>
    </div>
  )
}

export default BlogList