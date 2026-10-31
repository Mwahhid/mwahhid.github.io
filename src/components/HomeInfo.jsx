import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import { socialLinks } from '../constants'

const linkedin = socialLinks.find((s) => s.name === 'LinkedIn').link

const InfoBox = ({ text, link, btnText, external }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
            {text}
        </p>
        {external ? (
            <a href={link} target="_blank" rel="noopener noreferrer"
            className="neo-brutalism-white neo-btn">
                {btnText}
                <img src={arrow} className="w-4 h-4 object-contain"/>
            </a>
        ) : (
            <Link to={link} className="neo-brutalism-white neo-btn">
                {btnText}
                <img src={arrow} className="w-4 h-4 object-contain"/>
            </Link>
        )}
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue
        py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Mwahhid</span>👋
            <br/>
            Cloud Infrastructure Engineer
        </h1>
    ),
    2: (
        <InfoBox 
            text="Cloud Infrastructure Engineer at St. Jude Children's Research
            Hospital, working on Azure, automation, and AI platforms."
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
            text="Distributed systems, machine learning, and systems programming
            projects. I've shared them right here."
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
            text="Want to talk cloud, automation, or AI?
            I'm just a few keystrokes away"
            link={linkedin}
            btnText="Connect on LinkedIn"
            external
        />
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo