import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);//
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }

    setTimeout(() => {
      setData([
        { id: 1, name: "John Doe", role: "Admin" },
        { id: 2, name: "Jane Smith", role: "User" },
        { id: 3, name: "Alice Johnson", role: "Moderator" },
        { id: 4, name: "Bob Brown", role: "Guest" }
      ]);
      setLoading(false);
    }, 2000);
  }, [navigate]);

  return (
    <div className="container">
      {user ? <h2>Welcome,<br /> {user.email}</h2> : <p>Loading...</p>
      }  <button onClick={() => navigate("/search")}>Go to Search Page</button>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <table>
          <thead>
            <tr><th>ID</th><th>Name</th><th>Role</th></tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}><td>{user.id}</td><td>{user.name}</td><td>{user.role}</td></tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={() => { localStorage.removeItem("user"); navigate("/login"); }}>Logout</button>
    </div>
  );
};

export default Dashboard;
