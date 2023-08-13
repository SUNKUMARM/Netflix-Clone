import React, { useState } from "react";
import "./frequentlyAskedQuestion.css";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const FrequentlyAskedQuestion = ({ question, answer }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="faq-parent">
      <div className="faq-question" onClick={() => setIsShown(!isShown)}>
        <h4 className="faq-question-text">{question}</h4>
        <div className="faq-icon">
          {isShown ? <AiOutlineClose /> : <BsPlusLg />}
        </div>
      </div>
      {isShown && (
        <div className="faq-answer-parent">
          <p className="faq-answer-text">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FrequentlyAskedQuestion;
