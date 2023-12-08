"use client"

import React, { useEffect, useState } from 'react';
import { apiGitHub } from '@/service/apiGitHub';
import { GoChevronLeft, GoChevronRight, } from "react-icons/go";
import Link from 'next/link';

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [repositories, setRepository] = useState([])

    const handlePrev = () => { setCurrentIndex((prevIndex) => (prevIndex - 1 + repositories.length) % repositories.length) }

    const handleNext = () => { setCurrentIndex((prevIndex) => (prevIndex + 1) % repositories.length) }

    useEffect(() => {
        const req = async () => {
            try {
                const res = await apiGitHub.get("/repos")
                setRepository(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        req()
    }, [])

  return (
        <div className="w-full flex items-center justify-center flex-wrap relative">
            <div className="w-screen overflow-hidden mx-auto md:w-[45rem]">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {repositories.map((project: any) => (
                        <div key={project.id} className="w-full h-[35rem] flex-shrink-0 p-4 bg-[var(--bg-header)] rounded-lg">
                            <div className='flex items-center flex-wrap sm:gap-44 justify-center'>
                                <h2 className="text-xl font-bold mb-2 text-center w-52">{project.name}</h2> 
                                <Link target='_blank' className='p-2 no-underline text-[var(--color-body)] bg-[var(--bg-body)] flex items-center gap-2 rounded-lg' href={project.html_url}>
                                    Repositório
                                    <img src="https://skillicons.dev/icons?i=github" />
                                </Link>
                            </div>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='py-10 w-full flex justify-center gap-8'>
                <button className="text-white p-4 bg-[var(--bg-header)] rounded-full lg:absolute left-[5.5rem] z-10 bottom-80" onClick={handlePrev}><GoChevronLeft size={20}/></button>
                <button className="text-white p-4 bg-[var(--bg-header)] rounded-full lg:absolute right-[5.5rem] z-10 bottom-80" onClick={handleNext}><GoChevronRight size={20} /></button>
            </div>  
        </div>
  );
};
