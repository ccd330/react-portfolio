import React from 'react';
import cover from '../../assets/cover';
function About() {
    return (
        <section className="my-5">
        <h1 id="about">Who am I?</h1>
        <img src={cover} className="my-2" style={{ width: "100%" }} alt="cover" />
        <div className="my-2">
            <p>
            I've been building since the days of Microsoft Paint in elementary school. The intersection between technology, art and communication has always interested and inspired me.
            Now, my toolkit is made of up of HTML/CSS, JavaScript, and JavaScript's most commonly-used libraries and runtime environments, including jQuery and Node.js.
            I fell in love with web development in 2021 while taking a Basics Workshop through SheCodes. Today, I am on course to complete my Full-Stack Engineering Certificate from the Columbia University Fu Foundation School of Engineering and Applied Science Bootcamp in May of 2022.
            As a former publicist, I am looking to make a difference for a company that desires to tell its unique story in an impactful and accessible way. Highly curious, analytical, and creative, I am driven by the challenge to constantly learn new things and execute with equal care to both form and function.
            </p>
        </div>
        </section>
    );
}

export default About;