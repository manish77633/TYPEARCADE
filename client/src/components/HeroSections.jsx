import SelectActionCard from "../ui/cards";
import TestimonialsSection from "../ui/Testamonials";


export default function HeroSections() {
    return (
        <>
            <div className="relative w-full min-h-screen overflow-auto bg-white dark:bg-black transition-colors duration-300">
                
                <div className="pointer-events-none absolute -top-40 -left-40 w-[400px] h-[10px] rounded-full opacity-10 blur-4xl 
                                bg-gradient-to-br  dark:block hidden animate-spotlight">
                </div>
                
                <div className="relative z-20 flex flex-col items-center justify-start min-h-screen px-6 pt-16 pb-20 text-center">
                    <p className="max-w-xl text-gray-600 dark:text-black dark:bg-white p-1 rounded-md">
                        🎉 Introducing TypeArcade
                    </p>
                    
                    <h1 className="text-2xl md:text-6xl font-bold text-gray-800 dark:text-white">
                        Maximize Your Typing Speed <br />
                        with <span className="text-yellow-400">TypeArcade</span>
                    </h1>
                    
                    <p className="mt-6 max-w-xl text-gray-600 dark:text-gray-300">
                        Compete in real-time with friends and players worldwide. <br />
                        Track your progress and master every keystroke.
                    </p>
                    
                    <button className="mt-8 px-6 py-3 bg-yellow-500 hover:bg-yellow-700 text-white font-semibold rounded-full transition duration-150">
                        Start Typing Now <span className="text-lg leading-none"> &rarr;</span>
                    </button>
                    
                    <SelectActionCard />
                    
                    <h2 className="mt-24 mb-12 text-2xl md:text-4xl font-bold text-gray-800 dark:text-white  max-w-5xl w-full px-6">
                        Why Choose TypeArcade?
                    </h2>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full px-6">
                        {/* Detailed Analytics */}
                        <div className="flex gap-4 text-left">
                            <div className="flex-shrink-0">
                                <svg className="w-10 h-10 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                    Detailed Analytics
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Track your progress with in-depth statistics and performance graphs.
                                </p>
                            </div>
                        </div>

                        {/* Personalized Goals */}
                        <div className="flex gap-4 text-left">
                            <div className="flex-shrink-0">
                                <svg className="w-10 h-10 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                    Personalized Goals
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Set and achieve custom typing goals tailored to your skill level.
                                </p>
                            </div>
                        </div>

                        {/* Daily Challenges */}
                        <div className="flex gap-4 text-left">
                            <div className="flex-shrink-0">
                                <svg className="w-10 h-10 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                    Daily Challenges
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Take on new typing challenges every day to keep your skills sharp.
                                </p>
                            </div>
                        </div>

                        {/* Typing Breaks */}
                        <div className="flex gap-4 text-left">
                            <div className="flex-shrink-0">
                                <svg className="w-10 h-10 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                    Typing Breaks
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Learn proper typing posture and take regular breaks to prevent fatigue.
                                </p>
                            </div>
                        </div>
                    </div>
                    <TestimonialsSection />
                </div>
                
            </div>
        </>
    );
}