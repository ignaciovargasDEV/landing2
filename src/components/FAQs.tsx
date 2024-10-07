"use client";

import Plus from "@/assets/icons/plus.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MinusIcon from "@/assets/icons/minus.svg";
import PlusIcon from "@/assets/icons/plus.svg";
import clsx from "clsx";

const items = [
    {
        question: "What is AI Lawyer?",
        answer: "AI Lawyer is a cutting-edge platform that transforms law market using artificial intelligence. It automates research, simplifies complex terms, and handles documents efficiently. Ideal for individuals seeking affordable consultation and for professionals and students aiming to streamline their work. It offers personalized customization, multi-platform access, and prioritizes privacy, making it a valuable tool in LegalTech market.",
    },
    {
        question: "What countries/languages does it works for?",
        answer: "Our platfroms works worldwide and in many languages. You can ask questions in your language and get answers in the same language. This makes it easy for people from different places to use it.",
    },
    {
        question: "Can I change my plan later?",
        answer: "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
    },
    {
        question: "Is my data secure?",
        answer: "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
    },
];

const Item = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center">
                <span className="flex-1 text-md font-bold cursor-pointer">{question}</span>
                {isOpen ? <MinusIcon /> : <PlusIcon />}
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            height: 0,
                            marginTop: 0,
                        }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                            marginTop: "16px",
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                            marginTop: 0,
                        }}
                    >
                        {answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQs = () => {
    return (
        <section className="py-24  bg-[linear-gradient(to_bottom,#000,#004e5a_34%,#0083a4)]">
            <div className="container">
                <div className="flex flex-col items-center">
                    <h2 className="text-5xl md:text-6xl text-center font-bold tracking-tighter max-w-[672px]">
                        Frequently asked questions
                    </h2>
                </div>
                <div className="grid divide-y divide-neutral-200 max-w-2xl mx-auto mt-12">
                    {items.map((item, index) => (
                        <Item key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};
