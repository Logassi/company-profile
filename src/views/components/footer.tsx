import Link from "next/link";
import React from "react";

export default function Footer() {
  const current_year = new Date().getFullYear();

  return (
    <div className="bg-custom-orange w-full bottom-0">
      <div className="text-center py-4">
        <Link href={"/"} className="">
          Privacy Policy
        </Link>
        <span> | </span>
        <Link href={"/"}>Career</Link>
        <span> | </span>
        <Link href={"/"}>Contact</Link>
        <p className="">
          Copyright © {current_year}, Lomona Mutual Funds. All Right Reserved
        </p>
      </div>
    </div>
  );
}
