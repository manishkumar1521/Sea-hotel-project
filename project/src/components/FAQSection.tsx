import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      category: 'Arrival & Transfers',
      question: 'How do airport and island transfers work?',
      answer: 'We provide seamless luxury transfers via private resort catamaran (35 minutes from Paradise Bay International Airport) or private helicopter (12 minutes directly to our overwater helipad). Our airport concierge meets you immediately at baggage claim with refreshments and handles all luggage transfers.'
    },
    {
      category: 'Check-In & Concierge',
      question: 'What are the standard check-in and check-out times?',
      answer: 'Check-in begins at 15:00 and check-out is at 12:00 noon. Guests arriving early or departing late enjoy complimentary access to our private Departure Lounge, complete with showers, infinity relaxation pools, luggage storage, and refreshment bars.'
    },
    {
      category: 'Dining & Dietary',
      question: 'Are special dietary requirements and private dining accommodated?',
      answer: 'Yes, our Michelin-trained executive culinary team caters to all dietary requirements including Halal, Kosher, Vegan, Gluten-Free, and Keto. We also organize bespoke private dinners on secluded sandbanks or inside your villa terrace upon request.'
    },
    {
      category: 'Booking & Cancellation',
      question: 'What is your cancellation and modification policy?',
      answer: 'Bookings made directly through our website enjoy flexible cancellation up to 72 hours prior to arrival with 100% refund. We also guarantee the lowest available rates directly with exclusive complimentary perks such as welcome champagne and spa vouchers.'
    },
    {
      category: 'Family & Children',
      question: 'Is Sea Breeze Hotel family and children friendly?',
      answer: 'Yes, while maintaining a tranquil atmosphere, we offer dedicated multi-bedroom villas, the Junior Marine Biologist coral academy, certified multilingual child-care specialists, and customized children’s dining menus.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Guest Information & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Everything you need to know to prepare for your seamless journey to Paradise Bay.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-ocean-900/60 border border-ocean-800 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-ocean-800/40 transition-colors"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-serif font-bold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-ocean-950 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-ocean-800/60 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Concierge Help Box */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-ocean-900 via-ocean-800 to-ocean-900 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 flex-shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold text-white">Have a special inquiry?</h4>
              <p className="text-xs sm:text-sm text-slate-300">Our VIP concierge team is available 24 hours a day to assist you.</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-cyan-glow transition-colors whitespace-nowrap"
          >
            Contact VIP Concierge
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
