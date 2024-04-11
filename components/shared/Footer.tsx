import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {normalizedPath} from "../../lib/utils";

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex-col flex-container gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
          <Image 
              src={normalizedPath('/assets/logo2.png')} alt='logo'
              width={128}
              height={38}/>
        </Link>

          <p>2024 WeCare YourHome. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer