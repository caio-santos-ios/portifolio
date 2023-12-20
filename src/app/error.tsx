"use client"

import Image from "next/image";
import photoError from "@/assets/erro.svg"
import { useEffect } from "react"

interface Iprops {
    error: Error;
    reset: () => void;
}

const Error = ({error, reset}: Iprops) => {
    useEffect(() => {
        console.error(error)
    }, [error])

    return(
        <main className="body bg-[var(--bg-body)]">
            <section className="ection h-[87vh] flex flex-col items-center gap-10">
                <Image className="w-96" width={100} height={100} alt="imagem de erro" src={photoError} />
                <button className="p-2 bg-blue-400 rounded-md bg-[var(--color-body)]" type="button" onClick={reset}>Tentar novamente</button>
            </section>
        </main>
    )
}

export default Error