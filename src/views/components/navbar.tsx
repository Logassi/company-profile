"use client";
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import React from 'react'

export default function NavBar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    }


    // Reference for the dropdown div
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Close dropdown when clicking outside
    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false) // Close the dropdown
      }
    }

    // Attach event listener
    document.addEventListener('mousedown', handleClickOutside)

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <div className='bg-custom-orange'>
        <nav>
            <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4">
                <div className="flex items-center flex-1 text-[18px]">
                    <Link href={"/"} className='font-bold'>
                        Logo
                    </Link>
                </div>

                <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
                    <div className="flex flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link href={"/"}>
                                <li className='hover:bg-black hover:text-white rounded m-1 p-2'>Home</li>
                            </Link>
                            <Link href={"/about-us"}>
                                <li className='hover:bg-black hover:text-white rounded m-1 p-2'>About Us</li>
                            </Link>
                            {/* Dropdown on hover */}
                <li className='relative group'>
                  <div className='hover:bg-black hover:text-white rounded m-1 p-2 cursor-pointer group-hover:block'>
                    Products and Services
                  </div>

                  {/* Dropdown Menu */}
                  <div className='absolute hidden group-hover:block bg-custom-melon left-0 rounded-md p-2 shadow-lg'>
                    <ul className='space-y-2'>
                      <li className='flex p-2 text-black rounded-md hover:bg-black hover:text-white'>
                        Aezakmi
                      </li>
                      <li className='flex p-2 text-black rounded-md hover:bg-black hover:text-white'>
                        Hesoyam
                      </li>
                      <li className='flex p-2 text-black rounded-md hover:bg-black hover:text-white'>
                        Baguvix
                      </li>
                    </ul>
                  </div>
                </li>
                            <Link href={"/team"}>
                                <li className='hover:bg-black hover:text-white rounded m-1 p-2'>Team</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            
        </nav>
    </div>
  )
}
