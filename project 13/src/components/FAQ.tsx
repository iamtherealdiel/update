import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is there any cost to start?",
    answer: "There's no cost to get started. We fully cover all expenses related to promotion, and MediaTiger provides exclusive opportunities at no cost of the clients."
  },
  {
    question: "How Exactly Do Payments Work?",
    answer: "We handle payments through our trusted partner, Tipalti. When it's time for your payout, our finance team will guide you through the onboarding process, allowing you to select your preferred payment method, whether PayPal, wire transfer, or direct bank deposit."
  },
  {
    question: "How can I join MediaTiger?",
    answer: "MediaTiger is strictly invite only to assure quality control and to focus on each client's individual situation."
  }
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-900/30 rounded-2xl border border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white pr-4">
                  {item.question}
                </h3>
                {openItems.includes(index) ? (
                  <Minus className="w-6 h-6 text-[#6366f1] flex-shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 text-[#6366f1] flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-800 pt-6">
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}