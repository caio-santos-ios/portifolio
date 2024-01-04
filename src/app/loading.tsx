"use client"

import Image from "next/image";
import photoLoading from "@/assets/loading.svg"

const loading = () => {
    
    return(
        <main className="body bg-[var(--bg-body)] text-[var(--color-body)]">
            <section className="section h-[87vh] flex flex-col items-center gap-2">
                <Image className="w-96" width={100} height={100} alt="imagem de loading" src={photoLoading} />
                <div className="flex items-center justify-center h-screen">
                    <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-[var(--color-body)] border-solid"></div>
                </div>
            </section>
        </main>
    )
}

export default loading;