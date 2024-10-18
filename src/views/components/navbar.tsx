import Link from "next/link";
import React from "react";
import Image from "next/image";
// import Logo from "/images/logo.jpg";

export default function NavBar() {
  return (
    <div>
      <nav className="w-full top-0 left-0 right-0 bg-custom-orange fixed z-index ">
        <div className="flex justify-between text-black lg:py-5 px-10 py-4">
          <div className="flex items-center flex-1 text-[18px]">
            <div>
              <Link href={"/"} className="font-bold">
                <Image
                  src="/images/logo.jpg"
                  alt="Logo Img"
                  width={80}
                  height={80}
                  className="mr-2"
                />
              </Link>
            </div>
            <div className="font-bold">Lomona Mutual Funds</div>
          </div>

          <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
            <div className="flex flex-10">
              <ul className="flex gap-8 mr-16 text-[18px]" role="menu">
                <li className="hover:bg-black hover:text-white rounded m-1 p-2">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="hover:bg-black hover:text-white rounded m-1 p-2">
                  <Link href={"/about-us"}>About Us</Link>
                </li>
                <li className="relative group">
                  <div className="hover:bg-black hover:text-white rounded m-1 p-2 cursor-pointer group-hover:block">
                    Products and Services
                  </div>

                  <div className="absolute hidden group-hover:block bg-custom-melon left-0 rounded-md p-2 shadow-lg">
                    <ul className="space-y-2" role="menu">
                      <li className="flex p-2 text-black rounded-md hover:bg-black hover:text-white">
                        <Link href={"/products-services/#Aezakmi"}>
                          Aezakmi
                        </Link>
                      </li>
                      <li className="flex p-2 text-black rounded-md hover:bg-black hover:text-white">
                        <Link href={"/products-services/#Hesoyam"}>
                          Hesoyam
                        </Link>
                      </li>
                      <li className="flex p-2 text-black rounded-md hover:bg-black hover:text-white">
                        <Link href={"/products-services/#Baguvix"}>
                          Baguvix
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hover:bg-black hover:text-white rounded m-1 p-2">
                  <Link href={"/team"}>Team</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
