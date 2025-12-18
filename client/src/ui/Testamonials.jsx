import React, { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  
  const testimonials = [
    {
      quote: "TypeArcade has transformed my typing speed and accuracy. I've never had so much fun improving my skills!",
      name: "Sarah Johnson",
      designation: "Content Writer",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
    },
    {
      quote: "The daily challenges keep me motivated. My WPM has increased by 40% in just two months!",
      name: "Michael Chen",
      designation: "Software Developer",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
    },
    {
      quote: "Best typing platform I've used. The analytics help me track exactly where I need to improve.",
      name: "Emily Rodriguez",
      designation: "Data Analyst",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
    },
    {
      quote: "The competitive aspect makes practicing feel like a game. Highly recommend!",
      name: "David Kim",
      designation: "Marketing Manager",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
    },
    {
      quote: "Amazing platform for anyone serious about improving their typing skills.",
      name: "Jessica Williams",
      designation: "Freelancer",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces"
    },
    {
      quote: "TypeArcade made typing practice enjoyable. I actually look forward to my daily sessions!",
      name: "Robert Taylor",
      designation: "Student",
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleUserClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full  py-20 px-6 mt-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-3xl font-bold dark:text-white mb-8">
            Join Thousands of Happy Typists
          </h2>
          
          {/* User Avatars */}
          <div className="flex justify-center items-center mb-8">
            <div className="flex -space-x-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <button
                    onClick={() => handleUserClick(index)}
                    className={`relative w-16 h-16 rounded-full border-4 transition-all duration-300 group-hover:scale-125 group-hover:z-20 overflow-hidden ${
                      currentIndex === index 
                        ? 'border-yellow-400 scale-110 z-10' 
                        : 'border-gray-700 group-hover:border-yellow-400'
                    }`}
                  >
                    {!imageErrors[index] ? (
                      <img
                        src={testimonial.src}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                        onError={() => setImageErrors(prev => ({...prev, [index]: true}))}
                        loading="lazy"
                      />
                    ) : (
                      <div 
                        className="w-full h-full flex items-center justify-center text-white font-bold text-lg"
                        style={{
                          background: `linear-gradient(135deg, ${
                            ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b', '#fa709a'][index]
                          }, ${
                            ['#764ba2', '#667eea', '#4facfe', '#00f2fe', '#38f9d7', '#fee140'][index]
                          })`
                        }}
                      >
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </button>
                  
                  {/* Hover Tooltip */}
                  <div
                    className={`absolute -top-16 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm transition-all duration-300 pointer-events-none ${
                      hoveredIndex === index ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                  >
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-xs">{testimonial.designation}</div>
                    {/* Arrow */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="relative min-h-[100px] flex items-center justify-center px-4">
            <p className="text-lg md:text-xl text-gray-600 dark:text-blackmax-w-4xl italic transition-opacity duration-500">
              "{testimonials[currentIndex].quote}"
            </p>
          </div>

          {/* Author Info */}
          <div className="">
            <p className=" text-gray-600 dark:text-white font-semibold text-lg">{testimonials[currentIndex].name}</p>
            <p className=" text-gray-600 dark:text-white  text-sm">{testimonials[currentIndex].designation}</p>
          </div>

          {/* CTA Button */}
          <button className="mt-8 px-8 py-2 bg-transparent text-black border-black border-2 dark:border-white dark:text-white dark:border-white text-white font-semibold rounded-lg dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white transition-all duration-300">
            Read Success Stories
          </button>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20 pt-16 border-t border-gray-800">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-600 dark:text-white   mb-4">
            Ready to Become a Typing Master?
          </h3>
          <p className="text-lg text-gray-400 mb-8">
            Join our community of fast and accurate typists today. It's free to start!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-700 transition-all duration-300">
              Sign Up Now
            </button>
            <button className="px-8 py-3  bg-transparent text-black border-black border-2 dark:border-white dark:text-white dark:border-white text-white font-semibold rounded-full dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}