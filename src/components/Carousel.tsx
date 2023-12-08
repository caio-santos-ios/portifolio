"use client"

import React, { useEffect, useState } from 'react';
import { api } from '@/service/api';
import { GoChevronLeft, GoChevronRight, } from "react-icons/go";
import Link from 'next/link';
import { Tproject, Ttecnology } from '@/@types/project';
import Image from 'next/image';
import { SlGlobe } from "react-icons/sl";

interface Iprops {
    projects: Tproject[];
}

export const Carousel = ({projects}: Iprops) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => { setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length) }

    const handleNext = () => { setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length) }

    return (
            <div className="w-full flex items-center justify-center flex-wrap relative">
                <div className="w-screen overflow-hidden mx-auto md:w-[45rem]">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {projects.map((project: Tproject) => (
                            <div key={project.id} className="w-full min-h-[44rem] md:h-[40rem] flex-shrink-0 p-4 bg-[var(--bg-header)] rounded-lg">
                                <div className='flex items-center flex-wrap sm:gap-10 justify-center'>
                                    <h2 className="text-xl font-bold mb-2 text-center w-52">{project.name}</h2> 
                                    <Link target='_blank' className='p-2 no-underline text-[var(--color-body)] bg-[var(--bg-body)] flex items-center gap-2 rounded-lg' href={project.repository}>
                                        Repositório
                                        <img src="https://skillicons.dev/icons?i=github" />
                                    </Link>
                                </div>
                                <p className='h-[8rem] py-2'>{project.description}</p>
                                <Image className='w-full rounded-lg h-[16rem] sm:h-3/6 my-4 border border-[var(--color-body)] p-1' alt='foto da tela principal do projeto' src={project.photo} height={0} width={0} />
                                <div className='p-1 no-underline text-[var(--color-body)] bg-[var(--bg-body)] flex items-center gap-2 rounded-lg flex-wrap flex-col sm:flex-row sm:justify-between'>
                                    <Link target='_blank' className='flex justify-center items-center gap-1 p-2 no-underline text-[var(--color-body)]' href={project.link}>
                                        Site
                                        <SlGlobe />
                                    </Link>
                                    <div className='flex gap-1 flex-wrap justify-center'>
                                        {
                                            project.tecnologies.map((tecnology: Ttecnology) => {
                                                return <img src={`https://skillicons.dev/icons?i=${tecnology.name}`} />
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='py-10 w-full flex justify-center gap-8'>
                    <button className="text-white p-4 bg-[var(--bg-header)] rounded-full lg:absolute lg:bg-[var(--color-body)] left-[2.5rem] z-10 bottom-80" onClick={handlePrev}><GoChevronLeft size={20}/></button>
                    <button className="text-white p-4 bg-[var(--bg-header)] rounded-full lg:absolute lg:bg-[var(--color-body)] right-[2.5rem] z-10 bottom-80" onClick={handleNext}><GoChevronRight size={20} /></button>
                </div>  
            </div>
    )
}
