"use client";
import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const faqs = [
  {
    q: "What are your store hours?",
    a: "We are open Monday to Saturday from 9 AM to 7 PM, and Sundays from 10 AM to 5 PM.",
  },
  {
    q: "Do you offer shipping?",
    a: "Yes, we ship nationwide and offer tracking on all orders.",
  },
  {
    q: "Can I customize my order?",
    a: "Yes, we offer custom orders for events and special occasions. Contact us with your requirements.",
  },
  {
    q: "Where do you source your ingredients?",
    a: "All our ingredients are responsibly sourced from local and international suppliers to ensure the highest quality.",
  },
  {
    q: "How can I contact customer service?",
    a: "You can reach us via our contact form, email, or through our social media channels.",
  },
];

export default function FAQsPage() {
  return (
    <>
      <Header />

      <section className="py-24 mt-10">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-serif font-bold text-rose-500 mb-12 text-center">
            Frequently Asked Questions
          </h1>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <FAQItem key={index} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="bg-rose-100 rounded-lg shadow-md p-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center font-semibold text-rose-600"
      >
        {question}
        <span>{open ? "-" : "+"}</span>
      </button>

      {open && <p className="mt-2 text-rose-700">{answer}</p>}
    </div>
  );
}
