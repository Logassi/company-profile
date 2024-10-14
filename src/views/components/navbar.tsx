import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div className='bg-slate-600'>
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
                <div className="flex items-center flex-1 text-[18px]">
                    Logo
                </div>

                <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
                    <div className="flex flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link href={"/"}>
                                <li className='hover:bg-purple-400 rounded m-1 p-2'>Home</li>
                            </Link>
                            <Link href={"/about-us"}>
                                <li className='hover:bg-purple-400 rounded m-1 p-2'>About Us</li>
                            </Link>
                            <Link href={"/products-and-services"}>
                                <li className='hover:bg-purple-400 rounded m-1 p-2'>Products and Services</li>
                            </Link>
                            <Link href={"/team"}>
                                <li className='hover:bg-purple-400 rounded m-1 p-2'>Team</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            
        </nav>
    </div>
  )
}
