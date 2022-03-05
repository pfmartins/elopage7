import React from 'react';
const videoURL = 'https://www.youtube.com/embed/Y5e5XeW-xXY';

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials">
            <div className="testimonials__container">
                <div className="testimonials__video">
                    <iframe src={videoURL} height="300" controls="controls" title="Elo7 Trailer" />
                </div>
                <div className="testimonials__description">
                    <div className="testimonials__description-title">Elo 7 trailer</div>
                    <div className="testimonials__description-subtitle">Carlos Curioni</div>
                    <div className="testimonials__description-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus, neque vitae vulputate eleifend, metus tortor finibus orci, vitae aliquam est augue at nibh. Ut mollis gravida ligula vitae faucibus. Vestibulum vitae lobortis risus. Vivamus vitae enim eget leo scelerisque hendrerit.
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;