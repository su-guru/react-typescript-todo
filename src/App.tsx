import React , { ChangeEvent, useState } from 'react';
import styled from "styled-components";
import GlobalStyle from "./Global";
import Card from './components/Card';
import {ITask} from './Interfaces'
import {StyledButton} from './components/StyledButton';
import {StyledInput} from './components/StyledInput';
import {StyledLabel} from './components/StyledLabel';

const App: React.FC = () => {

  // Hooks クラスコンポーネントの動きを関数コンポーネントで
  // 情報を保持するライブラリ

  // 入力値 タスク名
  const [title, setTask] = useState<string>("")
  // 入力値 内容
  const [comment, setComment] = useState<string>("")
  // 入力値 日数
  const [deadline, setDealine] = useState<number>(0);
  // todoリストに入るオブジェクトを型定義
  const [todoList, setTodoList] = useState<ITask[]>([]);
  
  // 入力があったとき、状態を保存する
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else if (event.target.name === "comment") {
      setComment(event.target.value);
    } else {
      setDealine(Number(event.target.value));
    }
  }

  // 登録ボタンが押されたとき
  const addTask = (): void => {
    // 上記で定義した各プロパティを設定
    const newTask = {
      title: title, 
      date: new Date().toLocaleDateString(),
      comment: comment,
      deadline: deadline
    }
    // 現在のtodoListに加えてnewTaskを追加
    setTodoList([...todoList, newTask]);
    // 入力値は初期化
    setTask("");
    setComment("");
    setDealine(0);
  }

  // タスクのボタンを押したら発動するコールバック関数を定義
  const completeTask = (taskNameToDelete: string): void => {
    // ボタンを押したtaskとtodoListの中のtaskを照合して結果を設定
    setTodoList(todoList.filter((task) => {
      return task.title !== taskNameToDelete
    }))
  }

  // ここにコンポーネントを連ねていく
  return (
    <Container>
      <GlobalStyle/>
      <HeaderWrapper>
        <InputWrapper>
          <StyledLabel>Task</StyledLabel>
          <StyledInput type="text" size={1} placeholder="ex) wash dishes" name="task" value={title} onChange={handleChange}/>
          <StyledLabel>Detail</StyledLabel>
          <StyledInput type="textarea" size={1} placeholder="ex) after homework" name="comment" value={comment} onChange={handleChange}/>
          <StyledLabel>Deadline</StyledLabel>
          <StyledInput type="number" size={1} placeholder="ex) 1" name="deadline" value={deadline} onChange={handleChange}/>
          <StyledButton value="Register" onClick={addTask}/>
        </InputWrapper>
      </HeaderWrapper>
      <TodoListWrapper>
        {todoList.map((task: ITask, key: number) => {
          return <Card key={key} task={task} completeTask={completeTask}></Card>
        })}
      </TodoListWrapper>
    </Container>
  );
}

// styled-componentsというライブラリを使用する
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const HeaderWrapper = styled.div`
  flex: 30%;
  background-color: #1a1919;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TodoListWrapper = styled.div`
  flex: 70%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  padding-top: 5px;
  background-color: #DFEEEA;
`;
export default App;
