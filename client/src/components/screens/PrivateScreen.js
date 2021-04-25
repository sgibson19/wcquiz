import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivateScreen.css";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import QuizApp from "../quizapp/QuizApp";

const PrivateScreen = ({ history }) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    if(!localStorage.getItem("authToken")) {
      history.push("/login")
    }

    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        history.push("/login");
      }
    };

    fetchPrivateDate();
  }, [history]);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  }

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
      <div> 
      <Router>
        <Route exact path="/" component={QuizApp} />
      </Router>
      <button onClick={logoutHandler}>Logout</button>
      </div>
    </>
  );
};

export default PrivateScreen;
