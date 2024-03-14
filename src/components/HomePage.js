import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Shimmer from "./Shimmer";

const HomePage = ({ setIsLoggedIn }) => {
  const [jokes, setJokes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
      );
      const data = await response.json();
      setJokes(data.jokes);
    } catch (error) {
      console.error("Error fetching jokes:", error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return jokes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container">
      <h2 className="mt-3 mb-4">Jokes</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Type</th>
            <th>Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke, index) => (
            <tr key={index}>
              <td>{joke.category}</td>
              <td>{joke.type}</td>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleLogout} className="btn btn-primary mb-3 mt-3">
        Logout
      </button>
    </div>
  );
};

export default HomePage;
