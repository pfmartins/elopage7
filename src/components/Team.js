import React from 'react';
import avatar1 from '../assets/employee_avatar1.jpg';
import avatar2 from '../assets/employee_avatar2.jpg';
import avatar3 from '../assets/employee_avatar3.jpg';
import avatar4 from '../assets/employee_avatar4.jpg';

const Team = () => {
    const teamPhotos = [avatar1, avatar2, avatar3, avatar4];

    return (
        <section id="team" className="team">
            <div className="team__title">Conheça nosso time <br /> fora de série</div>
            <div className="team__photos-grid">
                {teamPhotos.map((item, index) => (<img className="team__photos-grid-item" key={index} src={item} alt={`employe-${index}`} />))}
            </div>
        </section>
    );
}

export default Team;