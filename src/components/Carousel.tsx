"use client"

import React, { useEffect, useState } from 'react';
import { apiGitHub } from '@/service/apiGitHub';

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
        <div className="w-full flex items-center justify-center flex-wrap">
            <div className="w-screen overflow-hidden mx-auto xl:w-[60rem]">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {repositories.map((project: any) => (
                        <div key={project.id} className="w-full h-[35rem] flex-shrink-0 p-4 border">
                            <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='py-10 w-full flex justify-center gap-8'>
                <button className="bg-blue-500 text-white p-4" onClick={handlePrev}>Anterior</button>
                <button className="bg-blue-500 text-white p-4" onClick={handleNext}>Próximo</button>
            </div>  
        </div>
  );
};