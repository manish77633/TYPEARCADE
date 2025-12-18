import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(2); // Third item open by default

  const faqs = [
    {
      question: "How do I start a typing test?",
      answer: "Simply visit the homepage and start typing when you're ready. The test begins automatically as soon as you type your first character. You can choose different test durations and difficulty levels from the settings menu."
    },
    {
      question: "Is TypeArcade free to use?",
      answer: "Yes, TypeArcade is completely free to use. All core features including typing tests, statistics tracking, and leaderboards are available at no cost. We believe in making typing practice accessible to everyone."
    },
    {
      question: "How are the typing speeds calculated?",
      answer: "Typing speed is measured in Words Per Minute (WPM). We calculate this by dividing the number of correctly typed characters by 5 (average word length) and then adjusting for the time taken. Accuracy is calculated as the percentage of correctly typed characters."
    },
    {
      question: "Can I compete with my friends?",
      answer: "You can create private rooms and invite your friends to compete in real-time typing races. You can also compare your scores on our global and friend leaderboards."
    },
    {
      question: "How can I improve my typing speed?",
      answer: "Practice regularly with our diverse text selections, focus on accuracy over speed initially, maintain proper finger positioning, and gradually increase difficulty. Our statistics will help you track your progress and identify areas for improvement."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative w-full min-h-screen overflow-auto pt-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Frequently Asked Questions</h1>
        
        <div className="">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-gray-800"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-6 text-left hover:text-gray-300 transition-colors"
              >
                <span className="text-lg font-medium pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}