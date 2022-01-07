import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import List from '../components/List';
import { TodoItem } from '../components/TodoItem';
import { ITodo } from '../types/types';

export const ToDoPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos("https://jsonplaceholder.typicode.com/todos?_limit=8");
  }, []);

  

  async function fetchTodos(url: string) {
    try {
      const response = await axios.get<ITodo[]>(url);
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  )
}
