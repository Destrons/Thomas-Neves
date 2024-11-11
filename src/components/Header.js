import React from 'react';
import thomasImage from '../assets/thomas.png';


function Header() {
    return (
        <header className="header">

            <div class="header-left">
                <h1 class="title-txt">Thomas Neves Pereira</h1>
                <p>Desenvolvedor Full Stack e especialista em infraestrutura em nuvem</p>
            </div>
            <div class="header-right">
            <img src={thomasImage} alt="Foto de Perfil" />
            </div>

        </header>
    );
}

export default Header;
