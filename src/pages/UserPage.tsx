import axios from 'axios';
import React, {FC, useEffect, useState} from 'react'
import { IUser } from '../types/types';
import { useParams, useHistory } from 'react-router-dom';

interface UserPageParams {
  id: string;
}

export const UserPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserPageParams>();
  const history = useHistory();
  
  async function fetchUser(url: string) {
    try {
      const response = await axios.get<IUser>(url);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  }, []);

  return (
    <div>
      <h1> USER: {user?.name}</h1>
      <h2>{user?.email}</h2>
      <h3>address:{user?.address.zipcode}{" "}
      {user?.address.city} {user?.address.street}</h3>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Portrait_Placeholder.png/200px-Portrait_Placeholder.png" alt="" />
      <button onClick={()=>history.push('/users')}>back</button>
    </div>
  )
}
