import React from "react";
import { useParams } from "react-router";
import { users } from "./home";

export default function UserPage() {
  const { id } = useParams();
  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return <p>User not found!</p>;
  }

  return (
    <div>
      User profile for ID : {id}
      <p>{user.name}</p>
      <p>{user.Occaption}</p>
    </div>
  );
}
