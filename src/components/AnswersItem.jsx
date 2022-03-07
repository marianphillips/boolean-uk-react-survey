// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList(props) {
  let answersArray = ['swimming', 'bathing' , 'chatting', 'noTime']
  let renderArray = answersArray.filter(item => props.list[item])
  return (
    <ul>
      {renderArray.map((item) => (
        <li>{answersSet[item]}</li>
      ))}
    </ul>
  );
}


// {  answerItem: { name, color, spendTime, review }}
// This is the main component being exported from this file
export default function AnswersItem(props) {
  const answer = props.answerItem

  const editAnswer = () => {
    props.setDuckData(answer)
    const updatedAnswers = props.submittedData.filter(item => item.name !== answer.name)
    props.setSubmittedData(updatedAnswers)
  }

  return (
    <li>
      <article className="answer">
        <h3>{answer.name || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{answer.color}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={answer.spendTime} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{answer.review}</span>
        </p>
        <button onClick={editAnswer}>Edit</button>
      </article>
    </li>
  );
}
