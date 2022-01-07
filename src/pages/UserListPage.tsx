import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import List from '../components/List'
import { UserItem } from '../components/UserItem';
import { IUser } from '../types/types';

export const UserListPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const history = useHistory()
  
  async function fetchUsers(url: string) {
    try {
      const response = await axios.get<IUser[]>(url);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers("https://jsonplaceholder.typicode.com/users");
  }, []);

  return (
    <div>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem onClick={(user)=>history.push('/users/'+user.id)} user={user} key={user.id} />}
      />
    </div>
  )
}
