"use client"

import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';
import logo from "@/assets/logo.png"
import Image from 'next/image';


export const Header = () => {
    return(
        <header className="bg-[var(--bg-header)] min-h-[12rem] w-full absolute z-10 flex items-center justify-center">
             <Navbar className='w-[70vw] xl:m-auto flex justify-between' style={{height: '100%', padding: '2rem'}} expand="xl">
                {/*<Image height={200} src={logo} alt='meu-logo' /> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto flex xl:items-center py-8">
                    <Link className='p-4 bg-slate-600 text-[var(--color-header)] no-underline rounded-xl w-52 xl:mx-4' target='_blank' href="https://wa.me/73991952027">Falar no whatsApp</Link>
                    <Nav.Link style={{color: 'var(--color-header)'}} href="#">Sobre mim</Nav.Link>
                    <Nav.Link style={{color: 'var(--color-header)'}} href="#">Habilidades</Nav.Link>
                    <Nav.Link style={{color: 'var(--color-header)'}} href="#">Projetos</Nav.Link>
                    <Nav.Link style={{color: 'var(--color-header)'}} href="#">Contatos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}