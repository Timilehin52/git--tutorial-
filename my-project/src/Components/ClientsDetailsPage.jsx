import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ClientsDetailsPage() {
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const [client, setClient] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setClient(data);
      } catch (error) {
        console.log(error);
      }
    };
    getClients();
  }, [id]);
  if (!client) {
    return <p>Loading client details</p>;
  }

  return (
    <div>
      <p>{client.name}</p>
      <p>{client.phone}</p>
      <p>{client.username}</p>
    </div>
  );
}
