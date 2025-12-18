 
export default function AboutSection() {


  return (
    <div className="relative w-full min-h-screen overflow-auto bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4 py-20 max-w-5xl">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-12 dark:text-white">
            About TypeArcade
          </h1>
          
          <div className="space-y-6 text-xl font-normal text-gray-600 dark:text-white leading-relaxed">
            <p>
              TypeArcade is a cutting-edge platform designed to help individuals improve their typing skills through engaging challenges and competitions. Our mission is to make typing practice fun, social, and rewarding.
            </p>
            
            <p>
              Founded in Oct 2025, TypeArcade has quickly grown to become a favorite among typing enthusiasts, students, and professionals looking to enhance their keyboard proficiency. Our team of dedicated developers and typing experts work tirelessly to create new challenges, improve user experience, and foster a supportive community.
            </p>
            
            <p>
              At TypeArcade, we believe that strong typing skills are essential in today's digital world. Whether you're a beginner looking to increase your typing speed or an expert aiming to break records, TypeArcade offers a range of features to help you achieve your goals.
            </p>
          </div>
          
          <div className="pt-8">
            <h2 className="text-2xl md:text-4xl font-semibol text-gray-900 dark:text-white mb-8">
              Our Features
            </h2>
            
            <ul className="space-y-4 font-normal">
              {[
                "Real-time multiplayer typing races",
                "Personalized practice sessions",
                "Daily challenges and leaderboards",
                "Detailed performance analytics",
                "Typing games and themed challenges"
              ].map((feature, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 text-xl text-gray-600 dark:text-white"
                >
                  <span className="text-gray-400 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}