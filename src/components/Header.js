import React from 'react';
import thomasimage from '../assets/thomas.png';
import { getByDisplayValue } from '@testing-library/react';


function Header() {
    return (
        <header className="header">
            <div className="header-left">

                <div >
                    <h1 className="title-txt">Thomas Neves Pereira</h1>
                    <p className="title-txt">Full Stack developer and cloud infrastructure specialist</p>
                </div>
                <nav style={{justifycontent: 'spacebetween'}}>
                    <div style={{display:'', textAlign:'center'}}>
                    <button className="navbtt" onclick="window.location.href='#about-me'">About Me</button>
                    <button className="navbtt" onclick="window.location.href='#skills'">Skills</button>
                    <button className="navbtt" onclick="window.location.href='#projects'">Projects</button>
                    <button className="navbtt" onclick="window.location.href='#contact'">Contact</button>
                    </div>
                </nav>
            </div>

            <div className="header-right">
                <img className="picperf" src={thomasimage} alt="Foto de Perfil" />
            </div>            

        </header>
    );
}

export default Header;
