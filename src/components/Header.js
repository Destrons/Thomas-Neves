import React from 'react';
import thomasImage from '../assets/thomas.png';

function Header() {
    return (
        <header className="header, fixed-header">
            <div className="header-left">
                <h1 className="title-txt">Thomas Neves Pereira</h1>
                <p className="title-txt-rsm">Desenvolvedor Full Stack e especialista em infraestrutura em nuvem</p>
            </div>
            <div className="header-right">
                <img className="picperf" src={thomasImage} alt="Foto de Perfil" />
            </div>
        </header>
    );
}

export default Header;
