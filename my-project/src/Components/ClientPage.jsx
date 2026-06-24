import React, { useState, useEffect } from "react";
import { Link } from "react-router";

export default function ClientsPage() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  if (!user) {
    return <p>No clients found</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Clients List</h2>
      {user.map((client) => (
        <Link
          key={client.id}
          to={`/client/${client.id}`}
          className="block p-2 border-b hover:bg-gray-100 w-xs lg:w-lg"
        >
          {client.name}
        </Link>
      ))}
    </div>
  );
}
