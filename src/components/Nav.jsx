import { headerLogo } from '../assets/images'
import { close, hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'

const Nav = () => {
    const [nav, setNav] = useState(false)

    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="logo"
                        width={130}
                        height={29}
                    />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className='font-monts errat leading-normal text-lg text-slate-gray'
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='hidden max-lg:block' onClick={() => setNav(!nav)}>
                    {!nav ?
                        <img
                            src={hamburger}
                            alt="hamburger"
                            width={25}
                            height={25}
                        />
                        :
                        <img
                            src={close}
                            alt="close"
                            width={25}
                            height={25}
                        />
                    }
                    {nav &&
                        <ul className="flex flex-col transition-all ease-in-out left-0 absolute justify-center items-center gap-8 lg:hidden w-full bg-gray-100 font-semibold mt-2 z-10">
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className='font-monts errat leading-normal text-lg text-slate-gray'
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>}
                </div>
            </nav>
        </header>
    )
}

export default Nav