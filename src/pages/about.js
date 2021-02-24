import React from 'react';
import Layout from '../components/layout'
import selfie from '../images/selfie.png'

const AboutPage = ()  => (
        <Layout>
        <main className="container relative">   
            <div className="p-4 lg:p-12 lg:w-3/4 mx-auto relative">
                <section className="bg-brown text-white text-center lg:text-left rounded-lg lg:flex p-12 lg:p-20">
                    <img src={selfie} className="h-60 w-60 mx-auto lg:mr-12" alt="portrait" id="about-img"/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="mono text-xl my-8 lg:mt-0">Hi! My name is {" "}
                            <span>Nikki</span>
                        </h1>
                        <div className="prose lg:prose-xl text-base">
                            
                        I'm a Front End Developer seeking remote work opportunities in web development. I create responsive, accessible websites with React, HTML, CSS, Javascript, and a variety of frameworks including Bootstrap, Tailwind, and Materialize. In my free time, I enjoy spending time outdoors with my family and learning new skills.                        </div>
                    </div>
                </section>
            </div>
        </main>
        </Layout>
)

export default AboutPage;
