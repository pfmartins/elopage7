import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero__image">
                <div className="hero__title">Trabalhe no Elo7</div>
            </div>
            <div className="hero__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus, neque vitae vulputate eleifend, metus tortor finibus orci, vitae aliquam est augue at nibh. Ut mollis gravida ligula vitae faucibus. Vestibulum vitae lobortis risus. Vivamus vitae enim eget leo scelerisque hendrerit.
            </div>
            <div className="hero__separator"></div>
            <a className="hero__link" href="#open_jobs" >
                VAGAS EM ABERTO
            </a>
        </section>
    );
}

export default Hero;