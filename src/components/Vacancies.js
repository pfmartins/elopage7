import React, { useEffect, useState } from 'react';
import vacanciesBackground from '../assets/elo7-back2.png';

const API_PATH = 'http://www.mocky.io/v2/5d6fb6b1310000f89166087b';

const Vacancies = () => {
    const [vacancies, setVacancies] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const getUpToDateVacancies = async () => {
        toggleLoader(true);

        const reponse = await fetch(API_PATH)
            .then(response => response.json())
            .catch(() => setErrorMessage('Error ao carregar vagas. Por favor recarregue a página.'));

        toggleLoader(false);
        setErrorMessage('');

        if (!reponse) return;

        const updatedVacancies = reponse.vagas.filter((item) => item.ativa).map((vacancie) => {
            const formattedAddress = !vacancie.localizacao
                ? 'Remoto'
                : `${vacancie.localizacao.bairro} - ${vacancie.localizacao.cidade}, ${vacancie.localizacao.pais}`;

            return {
                position: vacancie.cargo,
                link: vacancie.link,
                formattedAddress
            }
        })

        setVacancies(updatedVacancies);
    }

    const toggleLoader = (isLoading) => {
        setLoading(isLoading);
    }

    useEffect(() => {
        getUpToDateVacancies();
    }, []);

    return (
        <section id="vacancies" data-testid="vacancies-element" className="vacancies">
            <img src={vacanciesBackground} alt="Vagas background" className="vacancies__background" />
            <div className="vacancies__title">Vagas em aberto</div>
            <div className="vacancies__list" id="open_jobs">
                {vacancies.map((item, index) => (
                    <a href={item.link} key={index} target="_blank" rel="noreferrer" className="vacancies__list-item">
                        <div className="vacancies__list-item-title">{item.position}</div>
                        <div className="vacancies__list-item-text">
                            {item.formattedAddress}
                        </div>
                    </a>
                ))}

                {loading && <div className="">Carregando...</div>}
                {errorMessage && <div className="vacancies__text-error">{errorMessage}</div>}
            </div>
        </section>
    );
}

export default Vacancies;