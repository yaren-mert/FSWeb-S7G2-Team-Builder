import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Team from "./components/Team";
import { useState } from "react";

function App() {
  const [team, setTeam] = useState([]);
  const [newMember, setNewMember] = useState({ name: "", email: "", role: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    setTeam([...team, newMember]);
    setNewMember({ name: "", email: "", role: "" });
  };
  const handleChange = (event) => {
    setNewMember({ ...newMember, [event.target.name]: event.target.value });
  };

  return (
    <div className="App">
      <Form
        newMember={newMember}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Team team={team} />
    </div>
  );
}

export default App;
