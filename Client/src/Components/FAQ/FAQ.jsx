import React, { useState } from "react";
import './FAQ.css';

const questions = [
    {
        question: "How many Junior Enterprises are there in the world?",
        answer: "There are over 1700 Junior Enterprises in the world."
    },
    {
        question: "What is a Junior Enterprise?",
        answer: "A Junior Enterprise is a student-run association in a school or university. It offers professional services to companies while allowing students to train and put their knowledge into practice."
    },
    {
        question: "How did the Junior Enterprise movement come about?",
        answer: "The Junior Enterprise movement started in 1967 in France with the aim of bridging the gap between academia and the business world."
    },
    {
        question: "How do students benefit from the experience of a Junior Enterprise?",
        answer: "Students gain practical experience, improve their skills, and build a professional network."
    },
    {
        question: "How is a Junior Enterprise funded?",
        answer: "Junior Enterprises are funded through the services they provide to companies and organizations."
    },
    {
        question: "How do Junior Enterprises contribute to society?",
        answer: "Junior Enterprises contribute by offering valuable services, fostering entrepreneurship, and creating job opportunities."
    },
    {
        question: "How are Junior Enterprises organized?",
        answer: "Junior Enterprises are organized as non-profit organizations run by students, with a structure similar to real companies."
    },
];

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleCategoryClick = (index) => {
        const elements = document.querySelectorAll('.und .con');
        elements.forEach((element, i) => {
            if (i === index) {
                element.classList.toggle('active');
            } else {
                element.classList.remove('active');
            }
        });
    };

    return (
        <div className="all">
            <h1 className="headc">Frequently Asked Questions</h1>
            <div className="faq">
                <div className="content">
                    <p className="ta">Table of content</p>
                    <div className="und">
                        <p className="con" onClick={() => handleCategoryClick(0)}>Global</p>
                        <p className="con" onClick={() => handleCategoryClick(1)}>EJE</p>
                        <p className="con" onClick={() => handleCategoryClick(2)}>Services</p>
                        <p className="con" onClick={() => handleCategoryClick(3)}>Description</p>
                        <p className="con" onClick={() => handleCategoryClick(4)}>Financial</p>
                    </div>
                </div>
                <div className="questions">
                    {questions.map((item, index) => (
                        <div key={index} className="question-container">
                            <div className="question" onClick={() => toggleAnswer(index)}>
                                <span  style={{ color: '#2ea3dd', fontWeight: 'bold' }}>{activeIndex === index ? '−' : '+' }</span> {item.question}
                            </div>
                            {activeIndex === index && <div className="answer">{item.answer}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQ;
