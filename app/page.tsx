import { Hero } from "./(sections)/hero";
import { Works } from "./(sections)/works";
import { CaseStudies } from "./(sections)/case-studies";
import { Contact } from "./(sections)/contact";
import { FlowerGarden } from "./(sections)/flower-garden";

// Enable ISR with revalidation
export const revalidate = 3600; // Revalidate every hour

export default function Home() {
    return (
        <>
            <Hero />
            <Works />
            <CaseStudies />
            <Contact />
            <FlowerGarden />
        </>
    );
}
