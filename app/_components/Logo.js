import Image from "next/image"
import Link from "next/link"
import React from "react"


const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src="/logo.png" width="60" height="60" alt="The Wild Oasis Logo"/>
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  )
}

export default Logo
