import React, { useEffect, useState } from 'react';
import vacanciesBackground from '../assets/elo7-back2.png';

const API_PATH = 'http://www.mocky.io/v2/5d6fb6b1310000f89166087b';

const Vacancies = () => {
    const [vacancies, setVacancies] = useState([]);

    const getUpToDateVacancies = async () => {
        const { vagas } = await fetch(API_PATH).then(response => response.json());
        if (!vagas) return;

        const updatedVacancies = vagas.filter((item) => item.ativa).map((vacancie) => {
            const formattedAddress = !vacancie.localizacao
                ? 'Remoto'
                : `${vacancie.localizacao.bairro} - ${vacancie.localizacao.cidade}, ${vacancie.localizacao.pais}`;

            return {
                position: vacancie.cargo,
                formattedAddress
            }
        })

        setVacancies(updatedVacancies);
    }

    const onSelectJob = () => {
        window.open('https://jobs.kenoby.com/elo7', '_blank');
    }

    useEffect(() => {
        getUpToDateVacancies();
    }, []);

    return (
        <section id="vacancies" className="vacancies">
            <img src={vacanciesBackground} alt="Vagas" className="vacancies__background" />
            <div className="vacancies__title">Vagas em aberto</div>
            <div className="vacancies__list" id="open_jobs">
                {vacancies.map((item, index) => (
                    <div key={index} className="vacancies__list-item" onClick={onSelectJob}>
                        <div className="vacancies__list-item-title">{item.position}</div>
                        <div className="vacancies__list-item-text">
                            {item.formattedAddress}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Vacancies;