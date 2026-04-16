import { shadow } from '@/app/styles/utils'
import nextIcon from '@/public/image.png'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'


function Header() {
    const user = null
    return (
        <header className='bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8'

            style={{
                boxShadow: shadow
            }}

        >
            <Link href="/" className='flex gap-2'>
                <Image src={nextIcon} width={60} height={60} alt="logo" className='rounded-full' priority />
                <h1 className='flex flex-col font-bold leading-6'>NEXT <span>Notes</span></h1>
            </Link>

            <div className=" justify-center items-center flex gap-4 ">
                {
                    user ? ("Logout") : (<>

                        <Button asChild className='hidden sm:inline-flex' ><Link href="/signup" >Sign up</Link></Button>

                        <Button asChild variant='outline'><Link href="/login">Login</Link></Button>

                    </>)
                }
            </div>
        </header>
    )
}

export default Header
