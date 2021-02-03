import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import cannabiz from '../images/slider.png'
import sanityBlog from '../images/blog.png'
import bootstrap from '../images/portfolio-works.png'
import twBlog from '../images/tailwindblog.png'
import nnBlog from '../images/nnblog2.png'

const ProjectsPage = () => (
        <Layout>
            <SEO title="Projects" />
        <main className="bg-brown text-white min-h-screen p-8 md:p-12">
            <section className="container mx-auto">
                    <h1 className="text-4xl mono tracking-tight pl-4 mb-4">Recent Projects</h1>
                    <h2 className="text-lg mb-12 pl-4">Welcome to my projects page</h2>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <article className="relative bg-white text-brown rounded-lg shadow-xl py-8 px-8">
                            <img src={cannabiz}  alt="" className="relative items-center xl:float-left w-full xl:w-48 xl:h-56 xl:w-64 rounded mr-4" />

                            <div className="flex flex-row items-center justify-between h-12 mt-4 xl:mt-0 xl:mb-4">
                                
                                    <a className="text-left text-3xl font-bold hover:text-pink" href="https://nikkipeel.github.io/cannabiz/" alt="" target="_blank" rel="noopener noreferrer">Cannabiz </a>
                               
                                <span className="bg-green text-black font-semibold text-sm py-2 px-4 rounded justify-center items-center h-9">Tailwind</span>
                            </div>
                            <div className="flex flex-col lg:block text-base text-brown">
     
                                <span className="py-2">
                                    <strong className="font-bold">Finished on</strong>: November 15, 2020
                                </span>

                                <p className="my-4 text-lg leading-relaxed">Responsive ecommerce page featuring sidebar navigation and full-width carousel</p>
                                <a href="https://nikkipeel.github.io/cannabiz/" alt="project link" rel="noopener noreferrer" target="_blank" className="text-mauve text-lg font-bold hover:underline hover:text-pink">
                                    Visit Site

                                </a>
                            </div>
                        </article>

                        <article className="relative bg-white text-brown rounded-lg shadow-xl py-8 px-8">
                            <img src={sanityBlog}  alt="React blog" className="relative items-center xl:float-left w-full xl:w-48 xl:h-56 xl:w-64 rounded mr-4" />

                            <div className="flex flex-row items-center justify-between h-12 my-4 xl:mt-0">
                                
                                    <a className="text-left text-3xl font-bold hover:text-pink" href="https://www.github.com/nikkipeel/react-sanity-portfolio" alt="React blog homepage" target="_blank" rel="noopener noreferrer">Sanity Blog w/React</a>
                               
                                <span className="bg-blue text-black font-semibold text-sm py-2 px-4 rounded justify-center items-center h-9">React</span>
                            </div>
                            <div className="flex flex-col xl:block text-base text-brown">
     
                                <span className="py-2">
                                    <strong className="font-bold">Finished on</strong>: January 10, 2021
                                </span>

                                <p className="my-4 text-lg leading-relaxed">Blog template built with React and integrated with Sanity CMS</p>
                                <a href="https://www.github.com/nikkipeel/react-sanity-portfolio" alt="project link" rel="noopener noreferrer" target="_blank" className="text-mauve text-lg font-bold hover:underline hover:text-pink">
                                    View on Github

                                </a>
                            </div>
                        </article>

                        <article className="relative bg-white text-brown rounded-lg shadow-xl py-8 px-8">
                            <img src={nnBlog}  alt="" className="relative items-center xl:float-left w-full xl:w-48 xl:h-56 xl:w-64 rounded mr-4" />

                            <div className="flex flex-row items-center justify-between h-12 my-4 xl:mt-0">
                                
                                    <a className="text-left text-3xl font-bold hover:text-pink" href="https://nomadicnobodies.com" alt="Travel blog homepage" target="_blank" rel="noopener noreferrer">Nomadic Nobodies </a>
                               
                                <span className="bg-darkBlue text-white font-semibold text-sm py-2 px-4 rounded justify-center items-center h-9">Wordpress</span>
                            </div>
                            <div className="flex flex-col xl:block text-base text-brown">
     
                                <span className="py-2">
                                    <strong className="font-bold">Finished on</strong>: December 12, 2020
                                </span>

                                <p className="my-4 text-lg leading-relaxed">Customized personal blog built with Wordpress featuring masonry grid layout, Google Maps API, and email integration</p>
                                <a href="https://nomadicnobodies.com" alt="project link" rel="noopener noreferrer" target="_blank" className="text-mauve text-lg font-bold hover:underline hover:text-pink">
                                    Visit Site

                                </a>
                            </div>
                        </article>

                        <article className="relative bg-white text-brown rounded-lg shadow-xl py-8 px-8">
                            <img src={bootstrap} alt="Bootstrap portfolio" className="relative items-center xl:float-left w-full xl:w-48 xl:h-56 xl:w-64 rounded mr-4" />

                            <div className="flex flex-row items-center justify-between h-12 my-4 xl:mt-0">
                                
                                    <a className="text-left text-3xl font-bold hover:text-pink" href="https://nikkipeel.com" alt="portfolio homepage" target="_blank" rel="noopener noreferrer">Bootstrap Portfolio </a>
                               
                                <span className="bg-purple text-white font-semibold text-sm py-2 px-4 rounded justify-center items-center h-9">Bootstrap</span>
                            </div>
                            <div className="flex flex-col xl:block text-base text-brown">
     
                                <span className="py-2">
                                    <strong className="font-bold">Published on</strong>: September 12, 2020
                                </span>

                                <p className="my-4 text-lg leading-relaxed">Portfolio website featuring a dark theme with gradient accents, card-grid carousel, and contact form with EmailJS</p>
                                <a href="https://nikkipeel.com" alt="project link" rel="noopener noreferrer" target="_blank" className="text-mauve text-lg font-bold hover:underline hover:text-pink">
                                    Visit Site

                                </a>
                            </div>
                        </article>

                        <article className="relative bg-white text-brown rounded-lg shadow-xl py-8 px-8">
                            <img src={twBlog}  alt="Tailwind Blog" className="relative items-center xl:float-left w-full xl:w-48 xl:h-56 xl:w-64 rounded mr-4" />

                            <div className="flex flex-row items-center justify-between h-12 my-4 xl:mt-0">
                                
                                    <a className="text-left text-3xl font-bold hover:text-pink" href="https://nikkipeel.github.io/tailwind-blog/" alt="Tailwind blog homepage" target="_blank" rel="noopener noreferrer">Tailwind Blog </a>
                               
                                <span className="bg-green text-black font-semibold text-sm py-2 px-4 rounded justify-center items-center h-9">Tailwind</span>
                            </div>
                            <div className="flex flex-col xl:block text-base text-brown">
     
                                <span className="py-2">
                                    <strong className="font-bold">Published on</strong>: October 2nd, 2020
                                </span>

                                <p className="my-4 text-lg leading-relaxed">Responsive blog template built with TailwindCSS with animated transitions</p>
                                <a href="https://nikkipeel.github.io/tailwind-blog/" alt="project link" rel="noopener noreferrer" target="_blank" className="text-mauve text-lg font-bold hover:underline hover:text-pink">
                                    Visit Site

                                </a>
                            </div>
                        </article>
 
                </section>
            </section>
        </main>
        </Layout>
    )

export default ProjectsPage;