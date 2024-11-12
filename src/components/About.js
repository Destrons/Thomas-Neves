import React from 'react';

function About() {
    return (
        <section className="about" id='about-me'>
            <h2>About Me</h2>
            <div style={{display:'flex'}}>
                <div className='art-txt1'>
                    <h3>desenvolvedor</h3>
                    <p>Sou um desenvolvedor com 5 anos de sólido conhecimento em tecnologias de desenvolvimento web e backend, infraestrutura de TI e ambientes de nuvem.</p>
                    <p>Possuo experiência avançada em HTML5, CSS3, JavaScript e TypeScript, além de trabalhar com frameworks populares como Laravel, Node.js e React.js.</p>
                    <p>No campo de bancos de dados, sou proficiente em MySQL, Oracle SQL e SQL Server, utilizando essas tecnologias para desenvolver soluções escaláveis e de alto desempenho.</p>
                    <p>Minhas habilidades em linguagens de programação incluem Python, Java (versão 11+), C# e PHP, que aplico em projetos diversos, abrangendo desde o desenvolvimento web até o backend.</p>
                </div>
                
                <div className='art-txt2'>
                    <h3>Infraestrutura</h3>
                    <p>Na área de infraestrutura, sou especialista com 3 anos em ferramentas e serviços de segurança e gerenciamento, incluindo Intune, Microsoft Entra ID, Azure Active Directory, controle de domínio e Microsoft EDR.</p>
                    <p>Tenho vasta experiência em ambientes de nuvem como Azure, Oracle Cloud e AWS, e no gerenciamento e configuração de redes físicas e virtuais, além de servidores e serviços essenciais para o bom funcionamento de sistemas corporativos.</p>
                </div>

                <div className='art-txt3'>
                    <h3>Ferramentas</h3>
                    <p>Minha atuação inclui o uso de ferramentas colaborativas e de suporte, como Jira para gestão de projetos, Quest Kace para controle de inventário e suporte de TI, TeamViewer para acesso remoto, e soluções de segurança como McAfee.</p> 
                    <p>Com uma abordagem analítica e proativa, busco sempre otimizar e integrar soluções para gerar resultados sólidos e confiáveis.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
