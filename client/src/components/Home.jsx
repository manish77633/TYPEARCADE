// components/home.jsx

import HeroSections from "./HeroSections";


// Prop receive kiya (par iska istemal nahi ho raha kyunki Tailwind classes khud hi kaam karti hain)
export default function Home( ) {
    
    return (
        // Background aur Text color dark: prefix se change honge
		<>
		
			<HeroSections />

		</>
    );
}