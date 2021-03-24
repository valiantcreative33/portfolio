import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

const About = () => {
    return (
        <section data-testid="about" className="my-5">
            <h1 id='about'>Who Am I?</h1>
            <img src={coverImage} className='my-2' style={{ width: '100%' }} alt='cover' />
        </section>
    );
};
export default About;