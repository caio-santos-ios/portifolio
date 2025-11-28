function generateFooter() {
    setTimeout(() => {
        const footer = document.querySelector("#footer");
        console.log(footer)
        footer.insertAdjacentHTML("beforeend", `
            <div id="contacts" class="basic-3">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2 class="h2-heading">Contatos</h2>
                            <p class="text-center">
                                <strong>E-mail:</strong> caiodev.fullstack@gmail.com | caiodesenvolvedor.fullstack@gmail.com
                            </p>
                            <p class="text-center">
                                <strong>Celular:</strong> (11) 98233-2816
                            </p>
                        </div> 
                    </div> 
                </div> 
            </div> 

            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <hr class="section-divider">
                    </div> 
                </div> 
            </div> 

            <div class="footer bg-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="social-container">                    
                                <span class="fa-stack">
                                    <a target="_blank" href="https://wa.me/5511982332816?text=Ol%C3%A1%2C%20tudo%20bem%3F%0A%0AGostaria%20de%20falar%20sobre%20um%20projeto.">
                                        <i class="fas fa-circle fa-stack-2x"></i>
                                        <i class="fab fa-whatsapp fa-stack-1x"></i>
                                    </a>
                                </span>
                            
                                <span class="fa-stack">
                                    <a target="_blank" href="https://www.linkedin.com/in/caio-santos-09119719b/">
                                        <i class="fas fa-circle fa-stack-2x"></i>
                                        <i class="fab fa-linkedin fa-stack-1x"></i>
                                    </a>
                                </span>
                            </div>
                        </div> 
                    </div> 
                </div>
            </div> 
            
            <div class="copyright bg-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <p class="p-small">Copyright © <a class="no-line" href="#your-link">Caio Desenvolvedor</a></p>
                        </div> 
                    </div>
                </div>       
            </div>
        `);
    }, 500);
}

generateFooter()