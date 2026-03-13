import useFetch from "./useFetch";
import "./Users.css";

function Users() {
  const { users, loading } = useFetch("http://localhost:3001/users");

  if (loading) return <h2 className="loading">Loading users...</h2>;

  return (
    <div className="container">
      <h1 className="title">User List</h1>
      <p className="description">
        This list shows all registered users fetched from the server. Each name
        represents a user currently stored in the system database.
      </p>
      <ul className="userList">
        {Array.isArray(users) &&
          users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default Users;
