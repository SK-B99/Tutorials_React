import useFetch from "./useFetch";
import "./Users.css";

function Users() {
  const { data, loading, error } = useFetch("http://localhost:3001/users");

  if (loading) return <h2 className="loading">Loading users...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="container">
      <h1 className="title">User List</h1>
      <ul className="userList">
        {Array.isArray(data) &&
          data.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default Users;
