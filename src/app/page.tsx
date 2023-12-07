import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="body">
        <section className="section">
          <h1 className="title_section">Sobre mim</h1>
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
