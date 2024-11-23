import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import Image from "next/image";

const faqs = [
  {
    question: "What services does Atlas Logistics Express provide?",
    answer:
      "We specialize in importing and exporting all kinds of machinery, distribution services, and comprehensive logistic solutions.",
  },
  {
    question: "Where are your warehouses located?",
    answer:
      "Our warehouse is located at BSCIC Industrial Estate, Tongi, Gazipur, Bangladesh.",
  },
  {
    question: "What are your office details?",
    answer:
      "Our office is on the 7th Floor, 77 Motijheel Commercial Area, Motijheel, Dhaka-1000, Bangladesh.",
  },
  {
    question: "Who are the managing partners?",
    answer:
      "Our managing partners are Md Rabiul Mollah (Ref-Parvej) and Noman Hosen (Ref-Parvej).",
  },
  {
    question:
      "Do you provide import/export support for pads and visiting cards?",
    answer:
      "Yes, we handle the import and export of pads, visiting cards, and related supplies.",
  },
  {
    question: "How can I contact you for inquiries?",
    answer:
      "You can reach us at our office or warehouse. For inquiries, email us or call directly.",
  },
];

function FaqSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-10">
          Frequently Asked Questions
        </h2>
        <div className="lg:flex lg:items-start lg:gap-12">
          {/* Left Section: Image */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src="/corporate/what-we-do-1.jpg"
              alt="Atlas Logistics"
              className="rounded-lg shadow-lg"
              width={600}
              height={500}
            />
          </div>

          {/* Right Section: Accordion */}
          <div className="lg:w-1/2">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-black">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
