import { useState } from "react";
import '../components/faq.scss';

const FAQ = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openFAQ = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <div className="faq-question" onClick={openFAQ}>
                <p>{title}</p>
                <div className={isOpen ? "rotate-180" : ""}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 fill-white"
                        fill="white"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
            <div className={isOpen ? "" : "faq-answer"}>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default FAQ;