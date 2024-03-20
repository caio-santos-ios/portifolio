import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { api } from "@/service/api";
import Image from "next/image";

const fetchProjects = async () => {
  const response = await api.get("/projetos")
  return response.data
}

export default async function Home() {
  const projects = await fetchProjects()

  return (
    <>
      <Header />
    
      <main className="body bg-[var(--bg-body)] text-[var(--color-body)]">
        <section id="about" className="section lg:h-[80vh]">
          <h1 className="title_section">Sobre mim</h1>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Image className="rounded-full" width={300} height={300} src="https://res.cloudinary.com/dia2yiu6k/image/upload/v1707923725/wgkmcmrho2ygoj0byfam.jpg" alt="minha-foto-perfil" />
            <h5 className="description_section w-[40rem] px-12">
              Tenho 1 ano e 6 meses de experiência no desenvolvimento full stack, com JavaScript, no front-end usando React e Next. Tenho conhecimento em PHP, com o framework; Laravel, conhecimentos sólidos em NodeJS e PostgreSql. Como desenvolvedor back end 8 meses. Busco me apronfundar e me especializar na camada back-end.
            </h5>
          </div>
        </section>
        
        <section id="ability" className="section lg:h-[75vh]">
          <h1 className="title_section">Habilidades</h1>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 justify-items-center xl:w-[60rem] xl:m-auto">
            <div className="p-8 bg-[var(--bg-header)] transition-shadw hover:shadow-xl min-h-[23rem] md:w-[28rem] max-w-md md:max-w-md rounded-md hover:scale-105 duration-200 ease-in">
              <h4>
                Front-End
              </h4>
              <p>
                Tenho experiêcias em projetos com tecnologias no front-end, sendo HTML, CSS e JavaScript. Junto com os frameworks Bootstrap, React e Next. Além de GIT e SCRUM.
              </p>
            </div>
            <div className="p-8 bg-[var(--bg-header)] transition-shadw hover:shadow-xl min-h-[23rem] md:w-[28rem] max-w-md md:max-w-md rounded-md hover:scale-105 duration-200 ease-in">
              <h4>
                Back-End
              </h4>
              <p>
                Do lado servidor tenho experiêcias com APIs Rest, com TypeScript com NodeJS, Python(Django), Php(Laravel) e NestJS. Com bancos NoSQL MongoDB e SQL sendo MySQL e PostgreSQL, junto com TypeORM e Prisma, tenho mais familiaridade com postgreSQL. Possuo conhecimento em nuvem com AWS.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section flex justify-center items-center flex-col">
          <h1 className="title_section">Meus projetos</h1>
          <Carousel projects={projects} />
        </section>
      </main>
      <section id="contact">
        <Footer />
      </section>
    </>
  )
}
