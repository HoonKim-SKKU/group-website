import React from 'react';
import Hero from './Hero';
import ResearchHighlights from './ResearchHighlights';
import TeamSection from './TeamSection';
import Gallery from './Gallery';
import Publications from './Publications';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <ResearchHighlights />
            <TeamSection />
            <Publications />
            <Gallery />
            <Contact />
        </>
    );
};

export default Home;
