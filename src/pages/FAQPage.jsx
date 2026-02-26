import { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'pixel-retroui';

const faqData = [
  {
    id: 1,
    category: 'registration',
    question: 'How do I register for a sport?',
    answer: 'Go to the Games page, click "Register Now" on your desired sport, and fill out the Google Form with your details. Make sure to submit the form before the registration deadline.'
  },
  {
    id: 2,
    category: 'registration',
    question: 'What is the last date for registration?',
    answer: 'The registration deadline is March 7, 2026. Late registrations will not be accepted under any circumstances. We encourage students to register as soon as possible to secure their spot.'
  },
  {
    id: 3,
    category: 'registration',
    question: 'Can I register for more than one sport?',
    answer: 'Yes! You can register for multiple sports as long as their event timings do not clash. Each sport requires a separate registration form submission.'
  },
  {
    id: 4,
    category: 'registration',
    question: 'Is there a registration fee?',
    answer: 'No. Participation in Sports Week 2026 is completely free of charge for all enrolled students of Katpur College Patan.'
  },
  {
    id: 5,
    category: 'eligibility',
    question: 'Who is eligible to participate?',
    answer: 'All currently enrolled students of Katpur College Patan across all semesters and branches are eligible to participate. A valid college ID card is mandatory to take part in any event.'
  },
  {
    id: 6,
    category: 'events',
    question: 'How many sports are there in Sports Week 2026?',
    answer: 'We have 12 different sports events including Cricket, Kabaddi, Volleyball, Badminton, Table Tennis, Chess, Carrom, Kho Kho, Tug of War, and more.'
  },
  {
    id: 7,
    category: 'rules',
    question: 'What are the dress code and equipment requirements?',
    answer: 'Sports shoes and college uniform are mandatory for most events. Detailed equipment requirements for each sport are provided on the respective sport\'s detail page.'
  },
  {
    id: 8,
    category: 'general',
    question: 'When and where will the events be held?',
    answer: 'Sports Week 2026 is scheduled for March 12-21, 2026. Events will be held at various venues across the college campus. Specific venue details are provided on each sport\'s page.'
  }
];

export function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFAQ = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'registration', label: 'Registration' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'events', label: 'Events' },
    { id: 'rules', label: 'Rules' },
    { id: 'general', label: 'General' }
  ];

  return (
    <>
      <div className="bg-[url('/src/assets/bg1.png')] bg-cover bg-center bg-no-repeat relative w-full flex-1 flex-col hero-gradient overflow-x-hidden">
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 md:px-8 py-12 md:py-16 space-y-12">
          
          {/* Page Header */}
          <div className="text-center space-y-4 flex flex-col items-center">
            <div className="text-4xl font-minecraft-bold">
              Frequently Asked Questions
            </div>
            <p className="text-secondary text-lg max-w-xl md:max-w-none mx-auto">Everything you need to know about Sports Week 2026.</p>
          </div>

          {/* Category Pills */}
          {/* <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-sm font-medium px-5 py-2 rounded-full transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary/20 border border-primary/50 text-primary'
                    : 'bg-primary/10 border border-primary/20 text-slate-300 hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div> */}

          {/* FAQ List */}
          <Accordion className="space-y-3">
            {filteredFAQ.map(item => (
              // <div
              //   key={item.id}
              //   className={`faq-item rounded-xl overflow-hidden transition-all ${
              //     openFAQ === item.id ? 'open border-primary/40 bg-primary/5' : 'border-white/10 bg-white/[0.02]'
              //   }`}
              // >
              //   <button
              //     onClick={() => setOpenFAQ(openFAQ === item.id ? null : item.id)}
              //     className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/5 transition-colors"
              //   >
              //     <div className="flex items-center gap-3 flex-1">
              //       <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">help</span>
              //       <span className="text-primary font-semibold text-base md:text-lg">{item.question}</span>
              //     </div>
              //     <span className={`material-symbols-outlined text-secondary text-2xl faq-icon flex-shrink-0 transition-transform ${openFAQ === item.id ? 'rotate-45' : ''}`}>add</span>
              //   </button>
              //   {openFAQ === item.id && (
              //     <div className="px-5 pb-5 animate-in fade-in duration-200">
              //       <p className="text-secondary text-sm leading-relaxed">{item.answer}</p>
              //     </div>
              //   )}
              // </div>
              
                <AccordionItem value={item.id}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
        </main>

        {/* Footer */}
        <footer className="border-t border-primary/10   py-8 px-6 text-center text-primary text-sm">
          © 2026 Sports Week · Government Engineering College, Patan
        </footer>
      </div>
    </>
  );
}
