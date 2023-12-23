import "../home.css";
import { useMyContext } from "./utils/Contextanswer";

const StatusButton = () => {
  const { setI, questiondb } = useMyContext();
  let buttonname = [];
  const statusButtonClickEvent = (index: number) => {
    setI(index - 1);
  };
  for (let index: number = 1; index <= 25; index++) {
    buttonname.push(
      <button
        key={index}
        type="button"
        className={`${
          questiondb[index - 1]?.userAnswer != null ? "active " : ""
        }statusButton`}
        onClick={() => statusButtonClickEvent(index)}
      >
        {index}
      </button>
    );
  }

  return <div className="grid-container">{buttonname}</div>;
};
export default StatusButton;
