import React from 'react';
import benefitLife from '../assets/benefits_life.png';
import benefitEnv from '../assets/benefits_env.png';
import benefitExtra from '../assets/benefits_extra.png';

const Benefits = () => {
    return (
        <section id="benefits" className="benefits">
            <div className="benefits__grid">
                <div className="benefits__item">
                    <div className="benefits__item-image">
                        <img src={benefitLife} alt="Qualidade de vida" />
                    </div>
                    <div className="benefits__item-title">Qualidade de vida</div>
                    <div className="benefits__item-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </div>
                </div>
                <div className="benefits__item">
                    <div className="benefits__item-image">
                        <img src={benefitEnv} alt="Ambiente descontraído" />
                    </div>
                    <div className="benefits__item-title">Ambiente descontraído</div>
                    <div className="benefits__item-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </div>
                </div>
                <div className="benefits__item">
                    <div className="benefits__item-image">
                        <img src={benefitExtra} alt="Atividades extras" />
                    </div>
                    <div className="benefits__item-title">Atividades extras</div>
                    <div className="benefits__item-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </div>
                </div>
            </div>
            <div className="hero__separator"></div>
            <a className="hero__link" href="https://www.elo7.com.br/sobre" rel="noreferrer" target="_blank">
                Saiba mais
            </a>
        </section>
    );
}

export default Benefits;