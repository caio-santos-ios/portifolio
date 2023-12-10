"use client"

import Link from 'next/link';
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export const Header = () => {
    const openMenu = () => {
        const menu = document.querySelector('ul')
        menu?.classList.toggle('show')
    }

    return(
        <header className='flex py-4 items-center justify-around bg-[var(--bg-header)] text-[var(--color-header)]'>
            <h1 className='flex items-center gap-1'>
                Caio
                <img src="https://skillicons.dev/icons?i=devto" />	
            </h1>
            <nav>
                <button onClick={openMenu} className='md:hidden'>
                    <IoMenuSharp size={20} />
                </button>
                <ul className="bg-[var(--bg-header)] fixed top-0 right-0 h-full w-full z-10 translate-x-[100%] transition-transform duration-500 ease-in-out md:relative md:translate-x-0">
                    <div className='flex flex-col gap-1 items-end px-10 py-10 text-[var(--color-header)] md:flex-row md:justify-between md:w-[30rem]'>
                        <Link className='no-underline text-[var(--color-header)]' onClick={openMenu} href="#about" >Sobre mim</Link>
                        <Link className='no-underline text-[var(--color-header)]' onClick={openMenu} href="#ability" >Habilidades</Link>
                        <Link className='no-underline text-[var(--color-header)]' onClick={openMenu} href="#projects" >Projetos</Link>
                        <Link className='no-underline text-[var(--color-header)]' onClick={openMenu} href="#contact" >Contatos</Link>
                        <button className='mt-4 md:hidden' onClick={openMenu}>
                            <IoMdClose size={20} />
                        </button>
                    </div>
                </ul>
            </nav>
        </header>
    )
}