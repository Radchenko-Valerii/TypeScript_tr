import axios from "axios";
import { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/Card";
import List from "./components/List";
import { UserItem } from "./components/UserItem";
import { TodoItem } from "./components/TodoItem";
import { ITodo, IUser } from "./types/types";
import { Events } from "./components/Events";
import { DragEvent } from "./components/DragEvent";

function App() {
  // const users: IUser[] = [
  //   {
  //     id: 1,
  //     name: "Nik",
  //     email: "nik@nik.com",
  //     address: {
  //       city: "Zaporizhzhie",
  //       zipcode: "69006",
  //       street: "Soborniy 77",
  //     },
  //   },
  //   {
  //     id: 2,
  //     name: "Edmiral Hakumba",
  //     email: "kingof_CONGO@drc.gov.com",
  //     address: {
  //       city: "Kinshasa",
  //       zipcode: "Postal codes are not used in Congo",
  //       street: "Diktator str",
  //     },
  //   },
  // ];

  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers("https://jsonplaceholder.typicode.com/users");
    fetchTodos("https://jsonplaceholder.typicode.com/todos?_limit=8");
  }, []);

  async function fetchUsers(url: string) {
    try {
      const response = await axios.get<IUser[]>(url);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

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
      <Card
        width="400px"
        height="400px"
        cursor="pointer"
        title="не нажимай!"
        variant={CardVariant.outlined}
        onClick={(num) => {
          alert(`${num} секунд без проишествий на странице`);
        }}
      >
        <img
          src="https://i.pinimg.com/474x/b5/12/42/b51242fccb4c559383eee0fe0295eeaf.jpg"
          alt=""
        />
        <h1 style={{ color: "white" }}>Mike Wazovski</h1>
      </Card>
      <Events/>
      <DragEvent/>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
}

export default App;
