import { useState } from "react";
import AnswersList from "./AnswersList";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [submittedData, setSubmittedData] = useState([]);
  const [editing, setEditing] = useState(0)
  const [id, setId] = useState(1)

  const resetForm = {
    id: id,
    color: "",
    spendTime: {
      swimming: false,
      bathing: false,
      chatting: false,
      noTime: false,
    },
    review: "",
    name: "",
    email: ""
  };

  const [duckData, setDuckData] = useState(resetForm);

  const handleSpendTime = (event) => {
    setDuckData({
      ...duckData,
      spendTime: { ...duckData.spendTime, [event.target.value]: event.target.checked },
    });
  };

  const handleInput = (event) => {
    setDuckData({...duckData, [event.target.name]: event.target.value})
  }


  const handleSubmit = (event) => {
    console.log(duckData)
    event.preventDefault();
    if(editing === 0) {
    setSubmittedData([...submittedData, duckData]);
    setId(id + 1)
    }
    else if(editing !== 0) {
     const updatedData = submittedData.map(item => item.id === editing ? duckData : item) 
     setSubmittedData(updatedData)
     setEditing(0)
    }
    setDuckData({...resetForm, id: id + 1});
  };

  return (
    <main className='main'>
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList 
          submittedData={submittedData} 
          setDuckData={setDuckData}
          setEditing={setEditing} />
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
                  onChange={handleInput}
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
                  onChange={handleInput}
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
                  onChange={handleInput}
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
                  onChange={handleInput}
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
              onChange={handleInput}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type='text'
              name='name'
              value={duckData.name}
              onChange={handleInput}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type='email'
              name='email'
              value={duckData.email}
              onChange={handleInput}
            />
          </label>
          <input class='form__submit' type='submit' value={editing !== 0 ? 'Edit Answer' :'Submit Survey!'} />
        </form>
      </section>
    </main>
  );
}

export default Main;
