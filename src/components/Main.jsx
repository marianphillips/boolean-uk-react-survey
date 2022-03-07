import { useState } from "react";
import AnswersList from "./AnswersList";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const resetForm = {
    color: "",
    spendTime: {
      swimming: false,
      bathing: false,
      chatting: false,
      noTime: false,
    },
    review: "",
    name: "",
    email: "",
  };

  const [duckData, setDuckData] = useState(resetForm);
  const [submittedData, setSubmittedData] = useState([]);

  const handleColor = (event) => {
    setDuckData({ ...duckData, color: event.target.value });
  };

  const handleSpendTime = (event) => {
    if (event.target.value === "swimming")
      setDuckData({
        ...duckData,
        spendTime: { ...duckData.spendTime, swimming: event.target.checked },
      });
    if (event.target.value === "bathing")
      setDuckData({
        ...duckData,
        spendTime: { ...duckData.spendTime, bathing: event.target.checked },
      });
    if (event.target.value === "chatting")
      setDuckData({
        ...duckData,
        spendTime: { ...duckData.spendTime, chatting: event.target.checked },
      });
    if (event.target.value === "noTime")
      setDuckData({
        ...duckData,
        spendTime: { ...duckData.spendTime, noTime: event.target.checked },
      });
  };

  const handleReview = (event) => {
    setDuckData({ ...duckData, review: event.target.value });
  };

  const handleName = (event) => {
    setDuckData({ ...duckData, name: event.target.value });
  };

  const handleEmail = (event) => {
    setDuckData({ ...duckData, email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData([...submittedData, duckData]);
    setDuckData(resetForm);
  };

  return (
    <main className='main'>
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList 
          submittedData={submittedData} 
          setDuckData={setDuckData}
          setSubmittedData={setSubmittedData} />
      </section>
      <section className='main__form'>
        <form class='form' onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div class='form__group radio'>
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id='color-one'
                  type='radio'
                  name='color'
                  value='1'
                  onChange={handleColor}
                  checked={duckData.color === "1"}
                />
                <label for='color-one'>1</label>
              </li>
              <li>
                <input
                  id='color-two'
                  type='radio'
                  name='color'
                  value='2'
                  onChange={handleColor}
                  checked={duckData.color === "2"}
                />
                <label for='color-two'>2</label>
              </li>
              <li>
                <input
                  id='color-three'
                  type='radio'
                  name='color'
                  value='3'
                  onChange={handleColor}
                  checked={duckData.color === "3"}
                />
                <label for='color-three'>3</label>
              </li>
              <li>
                <input
                  id='color-four'
                  type='radio'
                  name='color'
                  value='4'
                  onChange={handleColor}
                  checked={duckData.color === "4"}
                />
                <label for='color-four'>4</label>
              </li>
            </ul>
          </div>
          <div class='form__group'>
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name='spend-time'
                    type='checkbox'
                    value='swimming'
                    onChange={handleSpendTime}
                    checked={duckData.spendTime.swimming}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name='spend-time'
                    type='checkbox'
                    value='bathing'
                    onChange={handleSpendTime}
                    checked={duckData.spendTime.bathing}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name='spend-time'
                    type='checkbox'
                    value='chatting'
                    onChange={handleSpendTime}
                    checked={duckData.spendTime.chatting}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name='spend-time'
                    type='checkbox'
                    value='noTime'
                    onChange={handleSpendTime}
                    checked={duckData.spendTime.noTime}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name='review'
              cols='30'
              rows='10'
              value={duckData.review}
              onChange={handleReview}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type='text'
              name='username'
              value={duckData.name}
              onChange={handleName}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type='email'
              name='email'
              value={duckData.email}
              onChange={handleEmail}
            />
          </label>
          <input class='form__submit' type='submit' value='Submit Survey!' />
        </form>
      </section>
    </main>
  );
}

export default Main;
