import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="body">
        <section className="section">
          <h1 className="title_section">Sobre mim</h1>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Image className="rounded-full" width={300} height={300} src="https://res.cloudinary.com/dia2yiu6k/image/upload/v1701897993/wxjaenezlngs2qvlxixq.jpg" alt="minha-foto-perfil" />
            <h5 className="description_section w-[40rem] px-12">
              Meu nome é Caio, tenho 22 anos e tenho mais 1 anos e 8 meses de experiência em projetos full-stack, com as tecnologias front-end, como ReactJs e NextJs, e no back-end, NodeJs, Python(Django), Php(Laravel) e NestJs.
            </h5>
          </div>
        </section>
        
        <section className="section">
          <h1 className="title_section">Habilidades</h1>
        </section>

        <section className="section flex justify-center items-center flex-col ">
          <h1 className="title_section">Meus projetos</h1>
          <Carousel />
        </section>
      </main>
      <Footer />
    </>
  )
}
