import React from "react";
import { ITask } from  "../Interfaces";

interface Props {
  task: ITask;
  completeTask(tasknameToDelete: string): void;
}

const TodoTask:React.FC<Props> = props => {
  return (
  <div className="task">
    <div className="content">
      <span>{props.task.title}</span>
      <span>{props.task.deadline}日</span>
    </div>
    <button onClick={() => {
      props.completeTask(props.task.title);
    }}>おわり</button>
  </div>
  );
};

export default TodoTask;

