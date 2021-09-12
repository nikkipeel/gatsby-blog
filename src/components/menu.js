import React from 'react';
import Link from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faQuoteRight, faUser, faTools } from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Menu() {
    return (
        <header className="bg-maroon px-24">
            <div className="lg:flex lg:justify-between">
            <nav className="lg:flex justify-center items-center">
            <Link to="/" exact activeClassName="border-b-4 border-white border-opacity-100 text-white-active" className="inline-flex items-center py-3 px-3 md:mr-6  text-white hover:text-white-active hover:scale-105 transform text-base font-bold mono tracking-widest">
            <FontAwesomeIcon icon={faHome} className="md:mr-4"></FontAwesomeIcon>  <p className="hidden md:block">Home</p>
        </Link>
        <Link to="/blog/" activeClassName="border-b-4 border-white border-opacity-100 text-white-active" className="inline-flex items-center py-3 px-3 md:mr-6 text-white hover:text-white-active hover:scale-105 transform text-base font-bold mono tracking:widest">
            <FontAwesomeIcon icon={faQuoteRight} className="md:mr-4"></FontAwesomeIcon> <p className="hidden md:block ">Blog</p>
        </Link>
        <Link to="/about" activeClassName="border-b-4 border-white border-opacity-100 text-white-active" className="inline-flex items-center py-3 px-3 md:mr-6 text-white hover:text-white-active hover:scale-105 transform text-base font-bold mono tracking:widest">
            <FontAwesomeIcon icon={faUser} className="md:mr-4"></FontAwesomeIcon>  <p className="hidden md:block">About</p>
        </Link>
        <Link to="/tools" activeClassName="border-b-4 border-white border-opacity-100 text-white-active" className="inline-flex items-center py-3 px-3 md:mr-6text-white hover:text-white-active hover:scale-105 transform text-base font-bold mono tracking:widest">
            <FontAwesomeIcon icon={faTools} className="md:mr-4"></FontAwesomeIcon> <p className="hidden md:block ">Tools</p>
        </Link>
    </nav>
    <div className="hidden lg:inline-flex items-center py-3 px-3">
        <a href="mailto:nikkipeel.dev@gmail.com" className="mr-8 text-2xl text-white hover:text-white-active cursor-pointer" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faEnvelope} /></a>
        <a href="https://www.github.com/nikkipeel" className="mr-8 text-2xl text-white hover:text-white-active cursor-pointer" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.codepen.io/nikki-peel" className="mr-8 text-2xl text-white hover:text-white-active cursor-pointer" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faCodepen} /></a>
        <a href="https://www.linkedin.com/in/nikkipeel" className="mr-8 text-2xl text-white hover:text-white-active cursor-pointer" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} /></a>
    
    </div>
</div>
</header> 
)}

export default Menu