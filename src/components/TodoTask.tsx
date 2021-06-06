import React from "react";
import { ITask } from  "../Interfaces";

interface Props {
  task: ITask;
  completeTask(tasknameToDelete: string): void;
}

const TodoTask = ({task, completeTask}: Props) => {
  return (
  <div className="task">
    <div className="content">
      <span>{task.taskName}</span>
      <span>{task.deadline}日</span>
    </div>
    <button onClick={() => {
      completeTask(task.taskName);
    }}>おわり</button>
  </div>
  );
};

export default TodoTask;

