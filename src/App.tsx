import React , { FC, ChangeEvent, useState } from 'react';
import './App.css';
import {ITask} from './Interfaces'
import TodoTask from './components/TodoTask'

const App: FC = () => {

  // Hooks クラスコンポーネントの動きを関数コンポーネントで
  // 入力値 タスク名
  const [task, setTask] = useState<string>("")
  // 入力値 日数
  const [deadline, setDealine] = useState<number>(0);
  // todoリストに入るオブジェクトを型定義
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDealine(Number(event.target.value));
    }
  }

  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline}
    setTodoList([...todoList, newTask]);
    setTask("");
    setDealine(0);
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete
    }))
  }
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="ex) お皿洗う" name="task" value={task} onChange={handleChange}/>
          <input type="number" placeholder="ex) 1" name="deadline" value={deadline} onChange={handleChange}/>
        </div>
        <button onClick={addTask}>やれ</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask}/>;
        })}
      </div>
    </div>
  );
}

export default App;
