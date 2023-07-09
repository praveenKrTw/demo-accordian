import React, { useState } from "react";

const NewCard = (props) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handelAdd = () => {
    if (question === "" || answer === "") {
      alert("please Fill the input fields first!");
    } else {
      let info = {
        ques: question,
        ans: answer,
      };
      console.log(info);
      props.addNewCard([...props.list, info]);
      setAnswer("");
      setQuestion("");
    }
  };

  return (
    <div className="bg-secondary w-50 d-flex flex-row justify-content-between mb-3 p-4 ">
      <div>
        <form className="d-flex flex-column">
          <label htmlFor="question">
            question:
            <input
              //   required
              type="text"
              id="question"
              value={question}
              placeholder="question"
              onChange={(e) => setQuestion(e.target.value)}
            />
          </label>
          <label htmlFor="answer">
            answer:
            <input
              //   required
              type="text"
              id="answer"
              value={answer}
              placeholder="answer"
              onChange={(e) => setAnswer(e.target.value)}
            />
          </label>
        </form>
      </div>
      <div className="d-flex flex-column">
        <button
          type="button"
          onClick={() => {
            props.showForm(false);
          }}
          className="btn btn-danger"
        >
          Hide Frorm
        </button>
        <button type="button" onClick={handelAdd} className="btn btn-success">
          Add Data
        </button>
      </div>
    </div>
  );
};

export default NewCard;
