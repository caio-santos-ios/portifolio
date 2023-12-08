"use client"

import Link from "next/link"

export const Footer = () => {
    return(
        <footer className="bg-[var(--bg-header)] text-[var(--color-body)] w-full absolute h-72 py-8">
             <div className="flex w-[80vw] m-auto justify-center items-center flex-col">
                <p>caiosantos.dev@outlook.com</p>
                <div className="flex flex-col md:flex-row">
                    <Link target='_blank' className='p-2 no-underline text-[var(--color-body)] flex items-center gap-2 rounded-lg' href='https://www.linkedin.com/in/caio-santos-09119719b/'>
                        Linkedin
                        <img src='https://skillicons.dev/icons?i=linkedin' />
                    </Link>
                    <Link target='_blank' className='p-2 no-underline text-[var(--color-body)] flex items-center gap-2 rounded-lg' href='https://github.com/caio-santos-ios'>
                        GitHub
                        <img src="https://skillicons.dev/icons?i=github" />
                    </Link>
                </div>
             </div>
        </footer>
    )
}