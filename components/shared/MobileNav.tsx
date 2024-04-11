import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from '../ui/separator'
import NavItems from './NavItems'

import {normalizedPath} from "../../lib/utils";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
        <Sheet>
            <SheetTrigger className='align-middle'>
                <Image 
                    src={normalizedPath('/assets/menu.svg')}
                    alt='menu' width={24} height={24} className='cursor-pointer'/>
            </SheetTrigger>
            <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
                <Image 
                    src={normalizedPath('/assets/logo2.png')} alt='logo'
                    width={128}
                    height={38}/>
                <Separator className='border border-grey-50'/>
                <NavItems/>
            </SheetContent>
        </Sheet>
    </nav>
  )
}

export default MobileNav