import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserListProps {
  users: IUser[];
}

export const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} style={{padding: 15, border: "1px solid green", }}>
          id:{user.id} name:{user.name} address:{user.address.zipcode}{" "}
          {user.address.city} {user.address.street}
        </div>
      ))}
    </div>
  );
};
