import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import NavItems from './NavItems'

import {normalizedPath} from "../../lib/utils";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between"> 
        <Link href='/' className='w-36'>
          <Image 
            src={normalizedPath("/assets/logo2.png")}
            alt= "WeCareYourHome Logo" width={218} height={118}></Image>
        </Link>

        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems/>
        </nav>

        <div className="flex w-32 justify-end gap-3">
          <MobileNav/>
        </div>
      </div>
    </header>
  )
}

export default Header