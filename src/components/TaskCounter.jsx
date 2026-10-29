import checkicon from "../assets/check_icon.png";

function TaskCounter({ total, completed }) {
  return (
    <div className="counter">
      <img src={checkicon} alt="Check Icon" />
      <span>
        {total} / {completed}
      </span>
    </div>
  );
}

export default TaskCounter;