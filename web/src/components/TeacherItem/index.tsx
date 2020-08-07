import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/62776694?s=400&u=1b7482a14aa1791d2d94b39e374af891ce49b3b5&v=4" alt="Fabio Peres"/>
                <div>
                    <strong>Fabio Peres</strong>
                    <span>Química</span>
                    </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Empenhado em criar novas formulas utilizando os mais variados elementos encontrados na natureza.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$42,00</strong>
                </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
            </footer>
        </article>
    );
}

export default TeacherItem;