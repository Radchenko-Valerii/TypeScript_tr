import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

export const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div onClick={()=>onClick(user)} style={{ padding: 15, border: "1px solid green" }}>
      id:{user.id} name:{user.name} address:{user.address.zipcode}{" "}
      {user.address.city} {user.address.street}
    </div>
  );
};
