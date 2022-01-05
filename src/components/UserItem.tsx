import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
}

export const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div style={{ padding: 15, border: "1px solid green" }}>
      id:{user.id} name:{user.name} address:{user.address.zipcode}{" "}
      {user.address.city} {user.address.street}
    </div>
  );
};
