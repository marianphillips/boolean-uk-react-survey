import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  return (
    <ul>
      {props.submittedData.map((answerItem, i) => (
        <AnswersItem
          answerItem={answerItem}
          key={i}
          setDuckData={props.setDuckData}
          setEditing={props.setEditing}
        />
      ))}
    </ul>
  );
}
