"use client"

import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';


export const Header = () => {
    return(
        <header className="min-h-[12rem] w-full absolute z-10 bg-blue-500 text-white flex items-center justify-center">
             <Navbar className='w-[70vw] xl:m-auto flex justify-between' style={{height: '100%', padding: '2rem'}} expand="xl">
                <Navbar.Brand href="#home">Caio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto flex xl:items-center py-8">
                    <Link className='p-4 bg-slate-600 text-slate-300 no-underline rounded-xl w-52 xl:mx-4' target='_blank' href="https://wa.me/73991952027">Falar no whatsApp</Link>
                    <Nav.Link className='text-2xl font-semibold' href="#">Sobre min</Nav.Link>
                    <Nav.Link className='text-2xl font-semibold' href="#">Habilidades</Nav.Link>
                    <Nav.Link className='text-2xl font-semibold' href="#">Projetos</Nav.Link>
                    <Nav.Link className='text-2xl font-semibold' href="#">Contatos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}