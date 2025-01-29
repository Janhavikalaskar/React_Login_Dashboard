import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const mockData = ["React", "JavaScript", "CSS", "HTML", "Node.js"];
  const filteredData = mockData.filter((item) => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="container search_container">
      <h2>Search Page</h2>
      <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p>No results found</p>
        )}
      </ul>
      <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
    </div>
  );
};

export default SearchPage;
