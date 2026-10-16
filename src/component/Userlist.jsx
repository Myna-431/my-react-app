import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";

function Userlist() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    async function getUsers() {
      const response = await axios.get(API_URL);
  return response.data;
      
    }

    getUsers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      {users.slice(0,2).map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Userlist;