
import { useMyContext } from "./utils/Contextanswer";

const StatusButton = () => {
  const { setI, questiondb } = useMyContext();
  let buttonname = [];
  const statusButtonClickEvent = (index: number) => {
    setI(index - 1);
  };
  for (let index of questiondb) {
    
    buttonname.push(
      <button
        key={index.questionId}
        type="button"
        className={`${
          questiondb[Number(index.questionId) - 1]?.userAnswer != null ? "active " : ""
        }statusButton`}
        onClick={() => statusButtonClickEvent(Number(index.questionId))}
      >
        {index.questionId}
      </button>
    );
  }

  return <div className="grid-container">{buttonname}</div>;
};
export default StatusButton;
