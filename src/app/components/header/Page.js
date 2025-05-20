import Link from "next/link"
import Image from "next/image"
import logo from "../../../../public/assets/images/circle.png"
import { Search,User,ShoppingCart   } from 'lucide-react';

function Header() {
  return (
    <div className="header  py-3">
        <div className="container max-w-[1340px] mx-auto">
            <div className="w-full py-2 rounded">
                <div className="flex justify-between">
                    <div className=" w-[15%]">
                        <Link href="/" title="Logo">
                            <Image className="filter-gray" width={120} height={100} alt="Logo" src={logo}/>
                        </Link>
                    </div>
                    <div className="w-[65%]  flex justify-center items-center">
                        <ul className="nav">
                            <li className="inline-block pe-2">
                                <Link  className="p-2 text-dark" title="Home" href="/">Home</Link>
                            </li>
                            <li className="inline-block pe-2">
                                <Link className="p-2 text-dark" title="About us" href="/about-us">About us</Link>
                            </li>
                            <li className="inline-block pe-2">
                                <Link className="p-2 text-dark" title="Service" href="/service">Service</Link>
                            </li>
                            <li className="inline-block pe-2">
                                <Link  className="p-2 text-dark" title="Product" href="/product">Product</Link>
                            </li>
                            <li className="inline-block pe-2">
                                <Link className="p-2 text-dark" title="Blog" href="/blogs">Blog</Link>
                            </li>
                            <li className="inline-block pe-2">
                                <Link className="p-2 text-dark" title="Contact Us" href="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[20%] contact-btn flex justify-end">
                        <Link href="/contact-us" className="rounded px-4 py-2 text-dark"><Search  size={22}  /></Link>
                        <Link href="/contact-us" className="rounded px-4 py-2 text-dark"><User  size={22}  /></Link>
                        <Link href="/contact-us" className="rounded px-4 py-2 text-dark"><ShoppingCart   size={22}  /></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header